import '../styles/Experience.css';
import trashIcon from '../assets/Icons/trashIco.svg';
import useDetailsStore from '../stores/useDetailsStore';
import PropTypes from 'prop-types';

// I have swapped the placeholder name for degree and institution name so the degreee gets a bolder name.

export default function Experience({ onNext, onBack }) {
    const {
        experienceEntries,
        addExperienceEntry,
        updateExperienceEntry,
        deleteExperienceEntry,
    } = useDetailsStore();

    return (
        <div className="experience-container">
            <div className="experience-section">
                <h2 className="experience-heading">Experience</h2>
                <p className="experience-text">Review your experience history</p>
                <div className="experience-box">
                    {experienceEntries.map((entry) => (
                        <form key={entry.id} className="experience-entry">
                            <div className="experience-deleteIcon">
                                <input
                                    type="text"
                                    value={entry.designationValue}
                                    onChange={(e) =>
                                        updateExperienceEntry(entry.id, 'designationValue', e.target.value)
                                    }
                                    placeholder="Enter Your Designation"
                                    className="designation-input"
                                />
                                <button
                                    type="button"
                                    className="delete-icon"
                                    onClick={() => deleteExperienceEntry(entry.id)}
                                    aria-label="Delete Experience Entry"
                                >
                                    <img src={trashIcon} alt="Delete" />
                                </button>

                            </div>
                            <div className="address-date">
                                <input
                                    type="text"
                                    value={entry.addressValue}
                                    onChange={(e) =>
                                        updateExperienceEntry(entry.id, 'addressValue', e.target.value)
                                    }
                                    placeholder="Enter Company Address"
                                    className="address-input"
                                />
                                <div className="date">
                                    <input
                                        type="date"
                                        value={entry.startDate}
                                        onChange={(e) =>
                                            updateExperienceEntry(entry.id, 'startDate', e.target.value)
                                        }
                                        className="start-date"
                                    />
                                    <input
                                        type="date"
                                        value={entry.endDate}
                                        onChange={(e) =>
                                            updateExperienceEntry(entry.id, 'endDate', e.target.value)
                                        }
                                        className="end-date"
                                    />
                                </div>
                            </div>
                            <textarea
                                value={entry.shortDescription}
                                onChange={(e) =>
                                    updateExperienceEntry(entry.id, 'shortDescription', e.target.value)
                                }
                                placeholder="Short Description of Your Role"
                                className="short-description"
                            />
                        </form>
                    ))}
                </div>

                <div className="add-experience">
                    <button onClick={addExperienceEntry} className="add-experience-button">
                        +
                    </button>
                    <h3 className="add-exp-button">Add Experience</h3>
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

Experience.propTypes = {
    onNext: PropTypes.func.isRequired,
    onBack: PropTypes.func.isRequired,
};
