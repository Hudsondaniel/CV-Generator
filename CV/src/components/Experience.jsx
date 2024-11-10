import '../styles/Experience.css'

export default function Experience(){
    return(
        <div className="experience-container">
            <div className="experience-section">
                <h2>Experience</h2>
                <p>Review your experience history</p>
                <div className="add-experience">
                    <button className='add-experience-button'>+ </button>
                    <h3 className='add-exp-button'>Add Experience</h3>
                </div>
            </div>
            <div className="buttons-back-next-short-bio">
                <button className='back-button'>Back</button>
                <button className="saveNext-button">Save & Next</button>
            </div>
        </div>
    )
}