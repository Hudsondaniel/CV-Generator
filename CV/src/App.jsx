import NavBar from './components/NavBar';
import DetailSection from './components/DetailSection';
import YourDetails from './components/YourDetails';
import ShortBio from './components/ShortBio';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import ResumePage from './components/ResumePage';
import './App.css'


function App() {


  return (
    <>
      < NavBar/>
      < DetailSection/>
      <div className="main-section">
        <div className="left-section">
          < YourDetails/>
          < ShortBio/>
          < Experience/>
          < Education/>
          < Skills/>
        </div>
        <div className="right-section">
          < ResumePage/>
        </div>
      </div>
    </>
  )
}

export default App
