import { useState } from 'react';
import '../styles/Experience.css';

export default function Experience() {
    // State to control visibility of the experience form
    const [experienceEntries, setExperienceEntries] = useState([]);

    // Toggle form visibility when the button is clicked
    const handleAddExperience = () => {
        setExperienceEntries([...experienceEntries, {id: experienceEntries.length + 1, value: ""}]);
    };

    const handleExperienceChange = (id, newValue) => {
        setExperienceEntries(
            experienceEntries.map(entry =>
                entry.id === id? {...entry, value: newValue} : entry
            )
        )
    }

    return (
        <div className="experience-container">
            <div className="experience-section">
                <h2>Experience</h2>
                <p>Review your experience history</p>
                <div className="experience-box">
                    {experienceEntries.map((entry) => (
                            <form key={entry.id} className="experience-entry">
                                <input 
                                    type="text" 
                                    value={entry.value} 
                                    onChange={(e) => handleExperienceChange(entry.id, e.target.value)} 
                                    placeholder="Enter experience details" 
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
