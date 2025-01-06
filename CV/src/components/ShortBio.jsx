import '../styles/ShortBio.css';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; 
import useDetailsStore from '../stores/useDetailsStore';

export default function ShortBio() {
    const { shortBio, setShortBio } = useDetailsStore();

    // Function to handle text changes
    const handleTextChange = (value) => {
        setShortBio(value); // Save raw HTML content to Zustand store
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
                        value={shortBio} // Controlled by Zustand store
                        onChange={handleTextChange}
                        placeholder="Write your summary here..."
                        theme="snow"
                    />
                </div>
            </div>
            <div className="buttons-back-next-short-bio">
                <button className="back-button">Back</button>
                <button className="saveNext-button">Save & Next</button>
            </div>
        </div>
    );
}
