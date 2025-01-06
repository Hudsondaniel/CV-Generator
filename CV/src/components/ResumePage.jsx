import '../styles/ResumePage.css'
import useDetailsStore from '../stores/useDetailsStore'

export default function ResumePage(){
    const { image, jobTitle, firstName, lastName, email, phoneNumber, address} = useDetailsStore();

    
    return(
        <div className="resume-page">
            <div className="dp-address">
                <div className="resume-page-dp">
                    <img src={image} alt="" />
                </div>
                <div className="resume-page-address">
                    <div className='resume-page-inner-details'>
                        <p className='resume-inner-text'>{email}</p>
                        <p className='resume-inner-text'>{phoneNumber}</p>
                        <p className='resume-inner-text'>{address}</p>
                    </div>
                </div>
            </div>

            <div className="resume-page-about">
                <div className="resume-page-about-word">
                    <h1 className='About'>ABOUT</h1>
                </div>
                <div className="about-details-container">
                    <div className="about-details">
                        <h2 className='name'>{firstName} {lastName}</h2>
                        <h3 className='job-title'>{jobTitle}</h3>
                    </div>
                    <div className="about-description">

                    </div>
                </div>

            </div>
            
            <div className="resume-page-experience">

            </div>
            <div className="resume-page-education-skills">

            </div>
        </div>
    )
}