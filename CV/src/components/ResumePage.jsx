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
                <h2>Hello</h2>
            </div>
            <div className="resume-page-experience">

            </div>
            <div className="resume-page-education-skills">

            </div>
        </div>
    )
}