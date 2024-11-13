import '../styles/Skills.css';
import { useState } from 'react';

export default function Skills() {
    const [skills, setSkills] = useState([]);
    const [inputValue, setInputValue] = useState('');

    // Handle skill input
    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    // Add skill to the list when pressing Enter
    const handleInputKeyDown = (e) => {
        if (e.key === 'Enter' && inputValue.trim()) {
            e.preventDefault();
            const newSkill = { id: skills.length + 1, text: inputValue.trim() }; // Generate ID based on length
            setSkills([...skills, newSkill]);
            setInputValue(''); // Clear input after adding
        }
    };

    // Remove a skill by its unique ID
    const removeSkill = (id) => {
        setSkills(skills.filter(skill => skill.id !== id));
    };

    return (
        <div className="skills-container">
            <h2 className="skills-heading">Skills</h2>
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
                        {skill.text}
                        <button className="remove-skill" onClick={() => removeSkill(skill.id)}>✕</button>
                    </div>
                ))}
            </div>
        </div>
    );
}
