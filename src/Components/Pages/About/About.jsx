import React from "react";
import "./About.css"
import {about} from "../../data/data"
import aboutimg from "../../data/images/AboutmeEzequiel.jpg"
import Heading from "../../Common/Heading/Heading";

function About() {
    return(
        <>
            <section className="about">
                <div className="aboutContent">
                    {
                        about.map((val, i) => (
                            <>
                                <div className="img">
                                    <img src={aboutimg} alt="About me image" className="aboutImg" data-aos='fade-down-right'/>
                                </div> 
                                <div className="info" key={i} data-aos='fade-down-left'>
                                    <Heading title="About me"/>
                                    <p>{val.desc}</p>
                                    <p>{val.desc1}</p>
                                    <div className="download">
                                        <a target="#" href="/Dev_Resume.docx.pdf" download>Download CV</a>
                                    </div>
                                  
                                </div>
                            </>
                        ))
                    }
                </div>
            </section>
        </>
        
    )
}

export default About