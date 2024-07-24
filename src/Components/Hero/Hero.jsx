import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'

const Hero = () => {
  return (
    <div className='Hero container' id='hero'>
        <div className="hero-text">
            <h1>We ensure better education for better world</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit totam, aliquam iure incidunt cupiditate deserunt beatae exercitationem culpa. Recusandae soluta ex corporis corrupti quae?</p>
            <button className="btn">Explore More <img src={dark_arrow} alt="" /></button>
        </div>
      
    </div>
  )
}

export default Hero