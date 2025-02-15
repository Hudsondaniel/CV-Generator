import '../styles/Education.css';
import trashIcon from '../assets/Icons/trashIco.svg'
import useDetailsStore from '../stores/useDetailsStore';

export default function Education() {
    const {
        educationEntries,
        addEducationEntry,
        updateEducationEntry,
        deleteEducationEntry,
    } = useDetailsStore();

    return (
        <div className="education-container">
            <div className="education-section">
                <h2 className="education-heading">Education</h2>
                <p className="education-text">Review your education history</p>
                <div className="education-box">
                    {educationEntries.map((entry) => (
                        <form key={entry.id} className="education-entry">
                            <div className="education-delete">
                                <input
                                    type="text"
                                    value={entry.institutionValue}
                                    onChange={(e) =>
                                        updateEducationEntry(entry.id, 'institutionValue', e.target.value)
                                    }
                                    placeholder="Degree "
                                    className="institution-input"
                                />
                                <button
                                    className="delete-icon-education"
                                    onClick={() => deleteEducationEntry(entry.id)}
                                >
                                    <img src={trashIcon} alt="Delete" />
                                </button>
                            </div>
                            <div className="degree-date">
                                <input
                                    type="text"
                                    value={entry.degreeValue}
                                    onChange={(e) =>
                                        updateEducationEntry(entry.id, 'degreeValue', e.target.value)
                                    }
                                    placeholder="Institution Name"
                                    className="degree-input"
                                />
                                <div className="date-education">
                                    <input
                                        type="date"
                                        value={entry.startDateValue}
                                        onChange={(e) =>
                                            updateEducationEntry(entry.id, 'startDateValue', e.target.value)
                                        }
                                        placeholder="Start Date"
                                        className="start-date-input"
                                    />
                                    <input
                                        type="date"
                                        value={entry.endDateValue}
                                        onChange={(e) =>
                                            updateEducationEntry(entry.id, 'endDateValue', e.target.value)
                                        }
                                        placeholder="End Date"
                                        className="end-date-input"
                                    />
                                </div>
                            </div>
                        </form>
                    ))}
                </div>
                <div className="add-education">
                    <button onClick={addEducationEntry} className="add-education-button">
                        +
                    </button>
                    <h3 className="add-edu-button">Add Education</h3>
                </div>
            </div>
            <div className="buttons-back-next-short-bio">
                <button className="back-button">Back</button>
                <button className="saveNext-button">Save & Next</button>
            </div>
        </div>
    );
}
