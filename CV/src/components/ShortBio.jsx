import '../styles/ShortBio.css'
import { useState } from 'react';
import ReactQuill from 'react-quill'

export default function ShortBio() {
    const [text, setText] = useState('');

    // This function handles the text changes
    const handleTextChange = (value) => {
        setText(value);
    };

    return (
        <div className="short-bio-section">
            <div className="heading">
                <h2>Professional Summary</h2>
                <p>Now, let&rsquo;s add a summary</p>
            </div>
            <div className="text-editor">
                <ReactQuill
                    value={text}
                    onChange={handleTextChange}
                    placeholder="Write your summary here..."
                    theme="snow" // The 'snow' theme adds a toolbar similar to the image you provided
                />
            </div>
        </div>
    );
}