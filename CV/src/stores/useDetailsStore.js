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

    // Setters for each field
    setImage: (image) => set({ image }),
    setJobTitle: (jobTitle) => set({ jobTitle }),
    setFirstName: (firstName) => set({ firstName }),
    setLastName: (lastName) => set({ lastName }),
    setEmail: (email) => set({ email }),
    setPhoneNumber: (phoneNumber) => set({ phoneNumber }),
    setAddress: (address) => set({ address }),
    setShortBio: (value) => set({ shortBio: value }),

    // Setters for experience entries
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
}));

export default useDetailsStore;
