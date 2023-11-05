import  style from "./App.module.css"
import About from "./componenets/about/About"
import Hero from "./componenets/hero/Hero"
import Navbar from "./componenets/navbar/Navbar"
import Experience from './componenets/experience/Experience'
import Projects from './componenets/projects/Projects'
import Contact  from './componenets/contact/Contact'

function App() {
  return (
    <div className={style.App}>
      <Navbar/>
      <Hero/>
      <About/>
      <Experience/>
      <Projects/>
      <Contact/>
    </div>
  )
}

export default App
