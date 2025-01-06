import '../styles/ShortBio.css'
import ReactQuill from 'react-quill'
import { useDetailsStore } from '../stores/useDetailsStore';

export default function ShortBio() {
    const {shortBio, setShortBio} = useDetailsStore();

    // This function handles the text changes
    const handleTextChange = (value) => {
        setShortBio(value);
    };

    return (
        <div className="short-bio-section">
            <div className="first-section">
                <div className="heading">
                    <h2 className='shortbio-heading'>Professional Summary</h2>
                    <p className='shortBio-text'>Now, let&rsquo;s add a summary</p>
                </div>
                <div className="text-editor">
                    <ReactQuill
                        value={shortBio}
                        onChange={handleTextChange}
                        placeholder="Write your summary here..."
                        theme="snow" // The 'snow' theme adds a toolbar similar to the image you provided
                    />
                </div>
            </div>
            <div className="buttons-back-next-short-bio">
                <button className='back-button'>Back</button>
                <button className="saveNext-button">Save & Next</button>
            </div>
        </div>
    );
}