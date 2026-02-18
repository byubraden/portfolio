import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Resume from './components/Resume'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollProgress from './components/ScrollProgress'

function App() {
  return (
    <div className="min-h-screen text-white">
      <Navbar />
      <ScrollProgress />
      <Hero />
      <About />
      <Resume />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App