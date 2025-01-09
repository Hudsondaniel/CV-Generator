import '../styles/ResumePage.css'
import useDetailsStore from '../stores/useDetailsStore'

export default function ResumePage(){
    const { image, jobTitle, firstName, lastName, email, phoneNumber, address, shortBio, experienceEntries, educationEntries} = useDetailsStore();
    const stripHtmlTags = (html) => {
        const div = document.createElement('div');
        div.innerHTML = html;
        return div.textContent || div.innerText || '';
    };
    
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
                        <p className='about-description-text'>{stripHtmlTags(shortBio)}</p>
                    </div>
                </div>
            </div>
            
            <div className="resume-page-experience-container">
                    <div className="resume-page-about-word">
                        <h1 className='About'>WORK EXPERIENCE</h1>
                    </div>
                    <div className="experience-resume-page">
                        {experienceEntries.map((entry) => (
                            <div key={entry.id} className="experience-entry">
                                <h3 className='company-name'>{entry.designationValue}</h3>
                                <div className="working-details">
                                    <h4 className="position">{entry.addressValue}</h4> 
                                    <span className='hypen'>-</span>
                                    <p className="duration">
                                        (<time dateTime={entry.startDate}>{entry.startDate}</time> - 
                                        <time dateTime={entry.endDate}>{entry.endDate}</time>)
                                    </p>
                                </div>

                                <p className='description'><pre>{stripHtmlTags(entry.shortDescription)}</pre></p>
                            </div>
                        ))}
                    </div>
            </div>
            <div className="resume-page-education-skills-container">
                <div className="resume-page-about-word">
                    <h1 className='About'>EDUCATION</h1>
                </div>
                <div className="resume-page-education">
                    <div className="education-resume-page">
                        {educationEntries.map((entry) => (
                            <div key={entry.id} className="education-entry">
                                <h3 className='institution-name'>{entry.institutionValue}</h3>
                                <div className="degree-details">
                                    <h4 className="degree">{entry.degreeValue}</h4> 
                                    <p className="duration">
                                        [<time dateTime={entry.startDateValue}>{entry.startDateValue}</time>] <span>-</span>  
                                        [<time dateTime={entry.endDateValue}>{entry.endDateValue}</time>]
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="resume-page-skills">
                    <div className="resume-page-skills-title">
                        <h1 className='About'>SKILLS</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}