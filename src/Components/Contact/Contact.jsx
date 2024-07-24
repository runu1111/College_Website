import './Contact.css'
import React from 'react'
import msg_icon from '../../assets/msg-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'

const Contact = () => {
    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "ca094526-8b9c-4693-b0df-d8410adf1008");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div className='contact' id='contact'>
      <div className="contact-col">
        <h3>Send us a meaasge <img src={msg_icon} alt=""/></h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam tenetur nulla odit iste impedit, illum optio eum odio molestiae quae debitis animi tempora quasi Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique accusantium quam, vero fuga quisquam ratione eveniet.</p>
        <ul>
        <li><img src={msg_icon} alt="" />Contactabc@gmail.com</li>
         <li><img src={phone_icon} alt="" />+1 123-456-789</li>
         <li><img src={location_icon} alt="" />77 Power Bridge,Cambridge<br/>MA 02139,United States</li>
        </ul>
      </div>
      <div className="contact-col">
      <form onSubmit={onSubmit} >
        <label >Your name</label>
        <input type="text" name='name' placeholder='Enter Your Name' required/>
        <label>Phone Number</label>
        <input type="tel" name='phone' placeholder='Enter Your Mobile Number' required/>
        <label >Write Your Message Here</label>
        <textarea name="message" row="11" placeholder='Enter Your Message' required></textarea>
        <button type='submit' className='btn dark-btn'>Submit Now <img src={white_arrow} alt="" /></button>
      </form>
      <span>{result}</span>
      </div>
    </div>
  )
}

export default Contact
