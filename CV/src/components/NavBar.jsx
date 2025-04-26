import '../styles/NavBar.css';
import profilePic from '../assets/Img/Nav-Profile-pic.jpg'; 
import { jsPDF } from 'jspdf';
import html2canvas from "html2canvas";
import useDetailsStore from '../stores/useDetailsStore';

export default function NavBar() {
    const resetStore = useDetailsStore((state) => state.resetStore);

    const exportToPDF = async () => {
        const resumeElement = document.querySelector('.resume-page');
        const canvas = await html2canvas(resumeElement, { scale: 2});
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF('p', 'mm', 'a4');

        const imgWidth = 210; // PDF width in mm
        const pageHeight = 297; // PDF height in mm
        const imgHeight = (canvas.height * imgWidth) / canvas.width; // Calculate image height to maintain aspect ratio
        let heightLeft = imgHeight;
        let position = 0;

        // Add multiple pages if the content overflows
        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;

        while (heightLeft > 0) {
            position = heightLeft - imgHeight;
            pdf.addPage();
            pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
            heightLeft -= pageHeight;
        }

        pdf.save(`Resume.pdf`);       
    };

    const handleExportClick = () => {
        exportToPDF();
    };

    const handleResetClick = () => {
        if (window.confirm('Are you sure you want to reset all data? This cannot be undone.')) {
            resetStore();
        }
    };

    return (
        <nav className="navbar">
            <h1 className='nav-heading'>Skillhsheet</h1>
            <div className='profile-pic-nav'>
                <button className='reset-button' onClick={handleResetClick}>Reset Data</button>
                <button className='export-button' onClick={handleExportClick}>Export PDF</button>
                <img src={profilePic} alt="Profile" /> 
            </div>
        </nav>
    );
}
