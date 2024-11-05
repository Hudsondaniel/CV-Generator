import '../styles/YourDetails.css'

export default function YourDetails(){
    return (
        <div className="your-details-container">
            <div className="other-data">
                <h3 className='Title-your-details'>Your Journey Begins Here!</h3>
                <p className='form-text'>How do you want employers to contact you?</p>
                <div className="resume-dp">
                    <img src="" alt="" />
                </div>
            </div>
            <form action="">
                <div className="job-title">
                    <label htmlFor="Job-Title" className='label-styling'>Job Title</label>
                    <input type="text" name='Job-Title' className='input-styling'/>
                </div>
                <div className="personal-details-one">
                    <div className="first-name-details">
                        <label htmlFor="First-name" className='label-styling'>First Name</label>
                        <input type="text" className='First-name'/>
                    </div>
                    <div className="second-name-details">
                        <label htmlFor="second-name" className='label-styling'>Last Name</label>
                        <input type="text" className='second-name' />
                    </div>
                    <div className="email">
                        <label htmlFor="email" className='label-styling' >Email</label>
                        <input type="email" className='email-input' />
                    </div>
                    <div className="phone">
                        <label htmlFor="phone" className='label-styling'>Phone Number</label>
                        <input type="tel" className='phone-input' />
                    </div>
                </div>
            </form>
        </div>
    )
}