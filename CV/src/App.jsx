import NavBar from './components/NavBar';
import DetailSection from './components/DetailSection';
import YourDetails from './components/YourDetails';
import ShortBio from './components/ShortBio';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import ResumePage from './components/ResumePage';
import DeviceWarning from './components/DeviceWarning';
import './App.css'
import { useState } from 'react';

function App() {
  const [activeSection, setActiveSection] = useState('yourDetails');

  const sections = ['yourDetails', 'shortBio', 'experience', 'education', 'skills'];

  const handleNext = () => {
    const currentIndex = sections.indexOf(activeSection);
    if (currentIndex < sections.length - 1) {
      setActiveSection(sections[currentIndex + 1]);
    }
  };

  const handleBack = () => {
    const currentIndex = sections.indexOf(activeSection);
    if (currentIndex > 0) {
      setActiveSection(sections[currentIndex - 1]);
    }
  };

  const renderActiveComponent = () => {
    switch(activeSection) {
      case 'yourDetails':
        return <YourDetails onNext={handleNext} onBack={handleBack} />;
      case 'shortBio':
        return <ShortBio onNext={handleNext} onBack={handleBack} />;
      case 'experience':
        return <Experience onNext={handleNext} onBack={handleBack} />;
      case 'education':
        return <Education onNext={handleNext} onBack={handleBack} />;
      case 'skills':
        return <Skills onNext={handleNext} onBack={handleBack} />;
      default:
        return <YourDetails onNext={handleNext} onBack={handleBack} />;
    }
  };

  return (
    <>
      <DeviceWarning />
      <div className="nav-section">
        <NavBar/>
        <DetailSection setActiveSection={setActiveSection}/>
      </div>
      <div className="main-section">
        <div className="left-section">
          {renderActiveComponent()}
        </div>
        <div className="right-section">
          <ResumePage/>
        </div>
      </div>
    </>
  );
}

export default App

