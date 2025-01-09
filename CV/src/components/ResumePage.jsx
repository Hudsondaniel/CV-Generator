import '../styles/ResumePage.css';
import useDetailsStore from '../stores/useDetailsStore';
import { jsPDF } from 'jspdf';
import html2canvas from "html2canvas";
import NavBar from './NavBar';

export default function ResumePage() {
    const { image, jobTitle, firstName, lastName, email, phoneNumber, address, shortBio, experienceEntries, educationEntries, skills } = useDetailsStore();
    const stripHtmlTags = (html) => {
        const div = document.createElement('div');
        div.innerHTML = html;
        return div.textContent || div.innerText || '';
    };

    const exportToPDF = async () => {
        const resumeElement = document.querySelector('.resume-page');
        const canvas = await html2canvas(resumeElement, { scale: 2});
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF('p', 'mm', 'a4');

        const imgWidth = 210; // PDF width in mm
        const pageHeight = 297; // PDF height in mm
        const imgHeight = (canvas.height * imgWidth) / canvas.width; // Calculate image height to maintain aspect ratio
        let heightLeft = imgHeight;
        let position = 0;

        // Add multiple pages if the content overflows
        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;

        while (heightLeft > 0) {
            position = heightLeft - imgHeight;
            pdf.addPage();
            pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
            heightLeft -= pageHeight;
        }

        pdf.save(`${firstName}_${lastName}_Resume.pdf`);       
    
    }

    return (
        <>
            <NavBar onExport={exportToPDF}/>
            <div className="resume-page">
                <div className="dp-address">
                    <div className="resume-page-dp">
                        {image && <img src={image} alt="Profile" className="image-resume" />}
                    </div>
                    <div className="resume-page-address">
                        <div className='resume-page-inner-details'>
                            {email && <p className='resume-inner-text'>{email}</p>}
                            {phoneNumber && <p className='resume-inner-text'>{phoneNumber}</p>}
                            {address && <p className='resume-inner-text'>{address}</p>}
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
                            {jobTitle && <h3 className='job-title'>{jobTitle}</h3>}
                        </div>
                        <div className="about-description">
                            {shortBio && <p className='about-description-text'>{stripHtmlTags(shortBio)}</p>}
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
                                {entry.designationValue && <h3 className='company-name'>{entry.designationValue}</h3>}
                                <div className="working-details">
                                    {entry.addressValue && <h4 className="position">{entry.addressValue}</h4>}
                                    {entry.startDate && entry.endDate && (
                                        <p className="duration-experience">
                                            (<time dateTime={entry.startDate}>{entry.startDate}</time> - <time dateTime={entry.endDate}>{entry.endDate}</time>)
                                        </p>
                                    )}
                                </div>
                                {entry.shortDescription && <p className='description'><pre>{stripHtmlTags(entry.shortDescription)}</pre></p>}
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
                                    {entry.institutionValue && <h3 className='institution-name'>{entry.institutionValue}</h3>}
                                    <div className="degree-details">
                                        {entry.degreeValue && <h4 className="degree">{entry.degreeValue}</h4>}
                                        {entry.startDateValue && entry.endDateValue && (
                                            <p className="duration">
                                                <time dateTime={entry.startDateValue}>{entry.startDateValue}</time> - <time dateTime={entry.endDateValue}>{entry.endDateValue}</time>
                                            </p>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="resume-page-skills">
                        <div className="resume-page-skills-title">
                            <h1 className='About' id='skills-resume'>SKILLS</h1>
                        </div>
                        <div className="resume-page-skills-section">
                            <ul className="skills-list">
                                {skills.map((skill) => (
                                    <li key={skill.id}>{skill.text}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
}
