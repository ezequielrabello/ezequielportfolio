import React, {useState} from "react"; 
import "./Contact.css"
import Heading from "../../Common/Heading/Heading"
import {contact} from "../../data/data"



function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    
      const [status, setStatus] = useState("");
    
      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
          const response = await fetch("https://formspree.io/f/manooywn", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          });
    
          if (response.ok) {
            setStatus("Message sent successfully!");
            setFormData({ name: "", email: "", subject: "", message: "" });
          } else {
            setStatus("Something went wrong. Try again.");
          }
        } catch (error) {
          console.error(error);
          setStatus("Network error.");
        }
      };
    
    return (
        <div className="contact">
            <div className="container">
                <Heading title="Contact me"/>
                <div className="content">
                    <div className="right">
                        <form onSubmit={handleSubmit}>
                            <div className="flex">
                                <input type="text" 
                                    name="name"
                                    value={formData.name} 
                                    onChange={handleChange}
                                    required
                                    placeholder="Name" 
                                    data-aos='zoom-in-down'/>
                                <input type="email" 
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    placeholder="Email" 
                                    data-aos='zoom-in-down'/>
                            </div>
                            <input type="text" 
                                name="subject"
                                placeholder="Subject"  
                                value={formData.subject}
                                onChange={handleChange}
                                required
                                data-aos='zoom-in-down'/>
                            <textarea 
                                placeholder="Type a message" 
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                cols="30" 
                                rows="10" 
                                data-aos='zoom-in-down'>
                            </textarea>
                            <button type="submit">Submit</button>
                            <p>{status}</p>
                        </form>
                    </div>

                    <div className='ContactInfo'>
                        {contact.map((item) => (
                            <div className='infoBox' data-aos='zoom-in'>
                                <i>{item.icon}</i>
                                <p>{item.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact