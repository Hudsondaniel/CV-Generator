import '../styles/Skills.css';
import useDetailsStore from '../stores/useDetailsStore';
import PropTypes from 'prop-types';

export default function Skills({ onNext, onBack }) {
    const skills = useDetailsStore((state) => state.skills);
    const addSkill = useDetailsStore((state) => state.addSkill);
    const deleteSkill = useDetailsStore((state) => state.deleteSkill);

    const handleInputKeyDown = (e) => {
        const inputValue = e.target.value.trim();
        if (e.key === 'Enter' && inputValue) {
            e.preventDefault();
            addSkill(inputValue); 
            e.target.value = ''; 
        }
    };

    return (
        <div className="skills-container">
            <div className="skills-inner-container">
                <h2 className="skills-heading">Skills</h2>
                <p className="skills-text">Highlight Your Top Skills</p>
                <div className="skills-input-container">
                    <input
                        type="text"
                        onKeyDown={handleInputKeyDown}
                        placeholder="Type a skill and press Enter"
                        className="skills-input"
                    />
                </div>
                <div className="skills-tags-container">
                    {skills.map((skill) => (
                        <div key={skill.id} className="skill-tag">
                            <div className="skill-text">
                                {skill.text}{' '}
                                <button
                                    className="remove-skill"
                                    onClick={() => deleteSkill(skill.id)}
                                >
                                    ✕
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="buttons-back-next-short-bio">
                <button 
                    className="back-button"
                    onClick={onBack}
                >
                    Back
                </button>
                <button 
                    className="saveNext-button"
                    onClick={onNext}
                >
                    Save & Next
                </button>
            </div>
        </div>
    );
}

Skills.propTypes = {
    onNext: PropTypes.func.isRequired,
    onBack: PropTypes.func.isRequired,
};
