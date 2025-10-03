import './App.css'
import HeroSection from './component/hero-section/HeroSection'
import InfoSection from './component/info-section/InfoSection'
import Navbar from './component/navabr/Navbar'
import Projects from './component/projects/Projects'

function App() {

  return (
    <>

      <Navbar></Navbar>
      <HeroSection></HeroSection>
      <InfoSection></InfoSection>
      <Projects></Projects>

    </>
  )
}

export default App
