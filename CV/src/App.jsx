import NavBar from './components/NavBar';
import DetailSection from './components/DetailSection';
import YourDetails from './components/YourDetails';
import ShortBio from './components/ShortBio';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import ResumePage from './components/ResumePage';
import './App.css'
import { useState } from 'react';


function App() {
  const [activeSection, setActiveSection] = useState(null);

  const renderActiveComponent = () =>{
    switch(activeSection){
      case 'yourDetails':
        return <YourDetails/>
      case 'shortBio':
        return <ShortBio/>
      case 'experience':
        return <Experience/>
      case 'education':
        return <Education/>
      case'skills':
        return <Skills/>
      default:
        return <YourDetails/>
    }
  }


  return (
    <>
      <div className="nav-section">
        < NavBar/>
        < DetailSection setActiveSection={setActiveSection}/>
      </div>
      <div className="main-section">
        <div className="left-section">
          {renderActiveComponent()}
        </div>
        <div className="right-section">
          < ResumePage/>
        </div>
      </div>
    </>
  )
}

export default App

