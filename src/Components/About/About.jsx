import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = ({setPlayState}) => {
  return (
    <div className='about' id='about'>
      <div className="about-left">
        <img src={about_img} alt="" className='about-img'/>
        <img src={play_icon} alt="" className='play-icon' onClick={()=>{setPlayState(true)}}/>
      </div>
      <div className="about-right">
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Nurturing Tomorrows Leaders Today</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore sint quo reprehenderit iste, omnis quaerat vero id at cupiditate, sit ducimus laudantium quas repudiandae dolore natus cumque. Dolores exercitationem, totam quae possimus reprehenderit recusandae natus.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum aut debitis possimus aliquid modi illo consequuntur id placeat minima. Itaque amet mollitia non in.</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos adipisci dolor eligendi recusandae quas, assumenda architecto officia dicta voluptas illum nemo quidem eveniet. Quia architecto similique quas at sit nobis, commodi beatae ipsum? Quidem, nisi!</p>

      </div>
      
    </div>
  )
}

export default About
