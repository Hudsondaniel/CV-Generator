import '../styles/Skills.css';
import { useState } from 'react';

export default function Skills() {
    const [skills, setSkills] = useState([]);
    const [inputValue, setInputValue] = useState('');

    // Handle skill input
    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleInputKeyDown = (e) => {
        if (e.key === 'Enter' && inputValue.trim()) {
            e.preventDefault();
            const newSkill = { id: skills.length + 1, text: inputValue.trim() }; // Generate ID based on length
            setSkills([...skills, newSkill]);
            setInputValue(''); 
        }
    };

    const removeSkill = (id) => {
        setSkills(skills.filter(skill => skill.id !== id));
    };

    return (
        <div className="skills-container">
            <div className="skills-inner-container">
                <h2 className="skills-heading">Skills</h2>
                <p className="skills-text">Highlight Your Top Skills</p>
                <div className="skills-input-container">
                    <input
                        type="text"
                        value={inputValue}
                        onChange={handleInputChange}
                        onKeyDown={handleInputKeyDown}
                        placeholder="Type a skill and press Enter"
                        className="skills-input"
                    />
                </div>
                <div className="skills-tags-container">
                    {skills.map((skill) => (
                        <div key={skill.id} className="skill-tag">
                            <div className="skill-text">{skill.text} <button className="remove-skill" onClick={() => removeSkill(skill.id)}>✕</button></div>                            
                        </div>
                    ))}
                </div>
                </div>
            <div className="buttons-back-next-short-bio">
                <button className="back-button">Back</button>
                <button className="saveNext-button">Save & Next</button>
            </div>
        </div>
    );
}
