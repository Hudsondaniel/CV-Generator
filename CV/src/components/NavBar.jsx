import '../styles/NavBar.css';
import profilePic from '../assets/Img/Nav-Profile-pic.jpg'; 

export default function NavBar() {
    return (
        <nav className="navbar">
            <h1 className='nav-heading'>CV Builder</h1>
            <div className='profile-pic-nav'>
                <img src={profilePic} alt="Profile" /> 
            </div>
        </nav>
    );
}
