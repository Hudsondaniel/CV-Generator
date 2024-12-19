import '../styles/ResumePage.css'
import useDetailsStore from '../stores/useDetailsStore'

export default function ResumePage(){
    const { image, jobTitle, firstName, lastName, email, phoneNumber, address, 
        setImage, setJobTitle, setFirstName, setLastName, setEmail, setPhoneNumber, setAddress} = useDetailsStore();

    
    return(
        <div className="resume-page">

                <h1>{firstName} {lastName}</h1>
                <h2>{jobTitle}</h2>

        
        </div>
    )
}