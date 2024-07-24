import About from './Components/About/About'
import Campus from './Components/Campus/Campus'
import Hero from './Components/Hero/Hero'
import Navbar from './Components/Navbar/Navbar'
import Programs from './Components/Programs/Programs'
import Title from './Components/Title/Title'
import Testimonials from './Components/Testimonials/Testimonials'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import VideoPlayer from './Components/VideoPlayer/VideoPlayer'
import { useState } from 'react'

const App = () => {
  const [playState,setPlayState]=useState(false);

  return (
  <>
   <Navbar/>
   <Hero/>
   <div className="container">
    <Title subtitle='OUR PROGRAM' title='What We offer'/>
      <Programs/>
      <About setPlayState={setPlayState}/>
    <Title subtitle='Gallery' title='Campus Photos'/>
    <Campus/>
    <Title subtitle='TESTIMONIALS' title='What Student Says'/>
    <Testimonials/>
    <Title subtitle='Contact Us' title='Get In touch'/>
    <Contact/>
    <Footer/>
   </div>
   <VideoPlayer playState={playState} setPlayState={setPlayState}/>
  </>
  )
}

export default App
