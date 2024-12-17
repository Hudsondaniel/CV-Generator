import useDetailsStore from '../stores/useDetailsStore';
import '../styles/YourDetails.css';

export default function YourDetails() {
    const { image, jobTitle, firstName, lastName, email, phoneNumber, address, 
        setImage, setJobTitle, setFirstName, setLastName, setEmail, setPhoneNumber, setAddress} = useDetailsStore();


    // Handle file upload and preview
    const handleFileChange = (e) => { 
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                setImage(e.target.result); // Set image preview
            };
            reader.readAsDataURL(file);
        }
    };

    const handleJobTitleChange = (e) => setJobTitle(e.target.value);
    const handleFirstNameChange = (e) => setFirstName(e.target.value);
    const handleLastNameChange = (e) => setLastName(e.target.value);
    const handleEmailChange = (e) => setEmail(e.target.value);
    const handlePhoneNumberChange = (e) => setPhoneNumber(e.target.value);
    const handleAddressChange = (e) => setAddress(e.target.value);


    return (
        <div className="outer-container">
            <div className="your-details-container">
                <div className="other-data">
                    <h3 className="Title-your-details">Your Journey Begins Here!</h3>
                    <p className="form-text">How do you want employers to contact you?</p>

                    {/* Image Display */}
                    <div className="resume-dp">
                        <div className="image-container">
                                <img src={image} alt="Preview" className="image-resume" />
                        </div>
                    </div>

                    {/* File Upload */}
                    <div className="file-input-container">
                        <input 
                            type="file"
                            accept="image/*"
                            id="file-upload"
                            onChange={handleFileChange}
                        />
                        <label htmlFor="file-upload" className="custom-file-upload">
                            +
                        </label>
                    </div>
                </div>

                {/* Form Fields */}
                <form>
                    <div className="job-title">
                        <label htmlFor="job-title" className="label-styling">Job Title</label>
                        <input 
                            type="text" 
                            name="job-title" 
                            className="input-styling" 
                            value={jobTitle}
                            onChange={handleJobTitleChange}
                        />
                    </div>
                    <div className="personal-details-one">
                        <div className="first-name">
                            <label htmlFor="first-name" className="label-styling">First Name</label>
                            <input 
                                type="text" 
                                name="first-name" 
                                className="input-styling"
                                value={firstName}
                                onChange={handleFirstNameChange}
                            />
                        </div>
                        <div className="second-name">
                            <label htmlFor="last-name" className="label-styling">Last Name</label>
                            <input 
                                type="text" 
                                name="last-name"
                                className="input-styling" 
                                value={lastName}
                                onChange={handleLastNameChange}
                            />
                        </div>
                        <div className="email">
                            <label htmlFor="email" className="label-styling">Email</label>
                            <input 
                                type="email" 
                                name="email"
                                className="input-styling" 
                                value={email}
                                onChange={handleEmailChange}
                            />
                        </div>
                        <div className="phone">
                            <label htmlFor="phone" className="label-styling">Phone Number</label>
                            <input 
                                type="tel" 
                                name="phone"
                                className="input-styling" 
                                value={phoneNumber}
                                onChange={handlePhoneNumberChange}
                            />
                        </div>
                    </div>
                    <div className="address">
                        <label htmlFor="address" className="label-styling">Address</label>
                        <input 
                            type="text" 
                            name="address" 
                            className="input-styling"
                            value={address}
                            onChange={handleAddressChange}
                        />
                    </div>
                </form>
            </div>

            {/* Buttons */}
            <div className="buttons-back-next">
                <button className="back-button">Back</button>
                <button 
                    type="button" 
                    className="saveNext-button" 
                >
                    Save & Next
                </button>
            </div>
        </div>
    );
}
