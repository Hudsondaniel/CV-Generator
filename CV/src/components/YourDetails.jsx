import { useState } from 'react'
import '../styles/YourDetails.css'

export default function YourDetails(){
    const [image, setImage] = useState("");

    const handleFileChange = (e) => { 
        const file = e.target.files[0];
        if (file){
            const reader = new FileReader(null);
            reader.onload = (e) => {
                setImage(e.target.result);
            }
            reader.readAsDataURL(file);
        }
    }


    return (
        <div className="outer-container">
            <div className="your-details-container">
                <div className="other-data">
                    <h3 className='Title-your-details'>Your Journey Begins Here!</h3>
                    <p className='form-text'>How do you want employers to contact you?</p>
                    <div className="resume-dp">
                        <div className="image-container">
                            <img src={image} alt="" className='image-resume'/>
                        </div>
                    </div>
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
                <form action="">
                    <div className="job-title">
                        <label htmlFor="Job-Title" className='label-styling'>Job Title</label>
                        <input type="text" name='Job-Title' className='input-styling'/>
                    </div>
                    <div className="personal-details-one">
                        <div className="first-name">
                            <label htmlFor="First-name" className='label-styling'>First Name</label>
                            <input type="text" className='input-styling'/>
                        </div>
                        <div className="second-name">
                            <label htmlFor="second-name" className='label-styling'>Last Name</label>
                            <input type="text" className='input-styling' />
                        </div>
                        <div className="email">
                            <label htmlFor="email" className='label-styling' >Email</label>
                            <input type="email" className='input-styling' />
                        </div>
                        <div className="phone">
                            <label htmlFor="phone" className='label-styling'>Phone Number</label>
                            <input type="tel" className='input-styling' />
                        </div>
                    </div>
                    <div className="address">
                        <label htmlFor="address" className='label-styling'>Address</label>
                        <input type="text" className='input-styling' />
                    </div>
                </form>
            </div>
            <div className="buttons-back-next">
                <button className='back-button'>Back</button>
                <button className="saveNext-button">Save & Next</button>
            </div>
        </div>
    )
}