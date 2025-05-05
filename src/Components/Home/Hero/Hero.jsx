import React from "react";
import Typewriter from "typewriter-effect"
import "./Hero.css"
import {home} from "../../data/data"

function Hero() {
    return (
        <section className="hero"> 
           {
            home.map((val, i) => (
                <div className="heroContainer" key={i}>
                    <h3 data-aos='fade-right'>{val.text}</h3>
                    <h1>
                        <Typewriter
                            options = {{
                                strings: [`${val.name}`, `${val.post}`, `${val.design}`],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </h1>
                    <p data-aos='fade-left'>{val.desc}</p>
                    <a className="primaryBtn" 
                        target="#" 
                        data-aos='fade-up-right'
                        href="../../../assets/Dev_Resume.docx.pdf">Download CV</a>
                </div>
            ))
           }
        </section>
    ) 
}

export default Hero