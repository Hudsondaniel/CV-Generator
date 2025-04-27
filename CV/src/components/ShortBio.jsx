import '../styles/ShortBio.css';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; 
import useDetailsStore from '../stores/useDetailsStore';
import PropTypes from 'prop-types';

export default function ShortBio({ onNext, onBack }) {
    const { shortBio, setShortBio } = useDetailsStore();

    const handleTextChange = (value) => {
        setShortBio(value); 
    };

    return (
        <div className="short-bio-section">
            <div className="first-section">
                <div className="heading">
                    <h2 className="shortbio-heading">Professional Summary</h2>
                    <p className="shortBio-text">Now, let&rsquo;s add a summary</p>
                </div>
                <div className="text-editor">
                    <ReactQuill
                        value={shortBio} 
                        onChange={handleTextChange}
                        placeholder="Write your summary here..."
                        theme="snow"
                    />
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

ShortBio.propTypes = {
    onNext: PropTypes.func.isRequired,
    onBack: PropTypes.func.isRequired,
};
