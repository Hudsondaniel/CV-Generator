import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

const useDetailsStore = create(
    persist(
        (set) => ({
            image: '',
            jobTitle: '',
            firstName: '',
            lastName: '',
            email: '',
            phoneNumber: '',
            address: '',
            shortBio: '',
            experienceEntries: [],
            educationEntries: [], 
            skills: [],

            // Setters for each field
            setImage: (image) => set({ image }),
            setJobTitle: (jobTitle) => set({ jobTitle }),
            setFirstName: (firstName) => set({ firstName }),
            setLastName: (lastName) => set({ lastName }),
            setEmail: (email) => set({ email }),
            setPhoneNumber: (phoneNumber) => set({ phoneNumber }),
            setAddress: (address) => set({ address }),
            setShortBio: (value) => set({ shortBio: value }),

            // Experience entry setters
            addExperienceEntry: () =>
                set((state) => ({
                    experienceEntries: [
                        ...state.experienceEntries,
                        {
                            id: Date.now(), // Using timestamp for unique IDs
                            designationValue: '',
                            addressValue: '',
                            startDate: '',
                            endDate: '',
                            shortDescription: '',
                        },
                    ],
                })),
            updateExperienceEntry: (id, field, newValue) =>
                set((state) => ({
                    experienceEntries: state.experienceEntries.map((entry) =>
                        entry.id === id ? { ...entry, [field]: newValue } : entry
                    ),
                })),
            deleteExperienceEntry: (id) =>
                set((state) => ({
                    experienceEntries: state.experienceEntries.filter((entry) => entry.id !== id),
                })),

            // Education entry setters
            addEducationEntry: () =>
                set((state) => ({
                    educationEntries: [
                        ...state.educationEntries,
                        {
                            id: Date.now(), // Using timestamp for unique IDs
                            institutionValue: '',
                            degreeValue: '',
                            startDateValue: '',
                            endDateValue: '',
                        },
                    ],
                })),
            updateEducationEntry: (id, field, value) =>
                set((state) => ({
                    educationEntries: state.educationEntries.map((entry) =>
                        entry.id === id ? { ...entry, [field]: value } : entry
                    ),
                })),
            deleteEducationEntry: (id) =>
                set((state) => ({
                    educationEntries: state.educationEntries.filter((entry) => entry.id !== id),
                })),
            
            // Skills setters
            addSkill: (text) =>
                set((state) => ({
                    skills: [...state.skills, { id: Date.now(), text }],
                })),
            deleteSkill: (id) =>
                set((state) => ({
                    skills: state.skills.filter((skill) => skill.id !== id),
                })),

            // Reset all data
            resetStore: () => set({
                image: '',
                jobTitle: '',
                firstName: '',
                lastName: '',
                email: '',
                phoneNumber: '',
                address: '',
                shortBio: '',
                experienceEntries: [],
                educationEntries: [],
                skills: [],
            }),
        }),
        {
            name: 'skillhsheet-storage', // unique name for localStorage key
            storage: createJSONStorage(() => localStorage),
            version: 1, // Add versioning for future migrations if needed
        }
    )
);

export default useDetailsStore;
