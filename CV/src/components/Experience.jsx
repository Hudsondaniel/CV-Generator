import { useState } from 'react';
import '../styles/Experience.css';

export default function Experience() {
    const [experienceEntries, setExperienceEntries] = useState([]);

    const handleAddExperience = () => {
        setExperienceEntries([...experienceEntries, 
            {
                id: experienceEntries.length + 1, 
                designationValue: "", 
                addressValue: "",  
                experienceDuration: "", 
                shortDescription: ""
            }]);
    };

    const handleExperienceChange = (id, field, newValue) => {
        setExperienceEntries(
            experienceEntries.map(entry =>
                entry.id === id ? {...entry, [field]: newValue} : entry
            )
        )
    }

    return (
        <div className="experience-container">
            <div className="experience-section">
                <h2 className='experience-heading'>Experience</h2>
                <p className='experience-text'>Review your experience history</p>
                <div className="experience-box">
                    {experienceEntries.map((entry) => (
                        <form key={entry.id} className="experience-entry">
                            <div className="experience-deleteIcon">
                                <input 
                                    type="text" 
                                    value={entry.designationValue} 
                                    onChange={(e) => handleExperienceChange(entry.id, 'designationValue', e.target.value)} 
                                    placeholder="Enter Your Designation" 
                                    className='designation-input'
                                />
                                <div className="delete-icon">
                                    <img src="../assets/Icons/trashIcon.png" alt="" />
                                </div>
                            </div>
                            <div className="address-date">
                                <input 
                                    type="text" 
                                    value={entry.addressValue} 
                                    onChange={(e) => handleExperienceChange(entry.id, 'addressValue', e.target.value)} 
                                    placeholder="Enter Company Address" 
                                    className='address-input'
                                />
                                <div className="date">
                                    <input
                                        type="date"
                                        value={entry.startDate}
                                        onChange={(e) => handleExperienceChange(entry.id, 'startDate', e.target.value)}
                                        placeholder='Start Date'
                                        className='start-date'
                                    />
                                    <input
                                        type="date"
                                        value={entry.endDate}
                                        onChange={(e) => handleExperienceChange(entry.id, 'endDate', e.target.value)}
                                        className='end-date'
                                    />
                                </div>
                            </div>
                            <textarea
                                value={entry.shortDescription} 
                                onChange={(e) => handleExperienceChange(entry.id, 'shortDescription', e.target.value)} 
                                placeholder="Short Description of Your Role"
                                className='short-description'
                            />
                        </form>
                        
                    ))}
                </div>
                
                <div className="add-experience">
                    <button onClick={handleAddExperience} className="add-experience-button">
                        + 
                    </button>
                    <h3 className="add-exp-button">Add Experience</h3>
                </div>
            </div>
            <div className="buttons-back-next-short-bio">
                <button className="back-button">Back</button>
                <button className="saveNext-button">Save & Next</button>
            </div>
        </div>
    );
}
