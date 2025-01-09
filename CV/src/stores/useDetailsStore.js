import { create } from 'zustand';

const useDetailsStore = create((set) => ({
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
                    id: state.experienceEntries.length + 1,
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
                    id: state.educationEntries.length + 1,
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
            skills: [...state.skills, { id: state.skills.length + 1, text }],
        })),
    deleteSkill: (id) =>
        set((state) => ({
            skills: state.skills.filter((skill) => skill.id !== id),
        })),
}));

export default useDetailsStore;
