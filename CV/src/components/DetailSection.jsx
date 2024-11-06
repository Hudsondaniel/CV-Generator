import '../styles/DetailSection.css';
import PropTypes from 'prop-types';

export default function DetailSection({ setActiveSection }){
    return (
        <div className='buttons-details'>
            <button onClick={()=>setActiveSection('yourDetails')} className='your-details'>
                Your Details
            </button>
            <button onClick={()=> setActiveSection('shortBio')} className='short-bio'>
                Short Bio
            </button>
            <button onClick={()=> setActiveSection('experience')} className='experience'>
                Experience
            </button>
            <button onClick={()=> setActiveSection('education')} className='education'>
                Education
            </button>
            <button onClick={()=> setActiveSection('skills')} className='skills'>
                Skills
            </button>
        </div>
    )
}

DetailSection.propTypes ={
    setActiveSection: PropTypes.func.isRequired,
}

