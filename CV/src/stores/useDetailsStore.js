import { create } from 'zustand';


const useDetailsStore = create((set) => ({
    image: '',
    jobTitle: '',
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    address: '',
    shortBio: '', // Corrected to match the variable name

    // Setters for each field
    setImage: (image) => set({ image }),
    setJobTitle: (jobTitle) => set({ jobTitle }),
    setFirstName: (firstName) => set({ firstName }),
    setLastName: (lastName) => set({ lastName }),
    setEmail: (email) => set({ email }),
    setPhoneNumber: (phoneNumber) => set({ phoneNumber }),
    setAddress: (address) => set({ address }),
    setShortBio: (value) => set({ shortBio: value }), // Fixed key here

    // Optionally, you can add a function to save form data (just like you had `handleSaveNext`)
    saveFormData: () => {
        set((state) => {
            const formData = {
                jobTitle: state.jobTitle,
                firstName: state.firstName,
                lastName: state.lastName,
                email: state.email,
                phoneNumber: state.phoneNumber,
                address: state.address,
                image: state.image,
            };
            console.log("Form Data:", formData);
            alert("Form saved successfully!");
        });
    },
}));

export default useDetailsStore;
