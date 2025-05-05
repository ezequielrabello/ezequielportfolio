import React from "react"
import "./Portfolio.css"
import Heading from "../../Common/Heading/Heading"
import Card from "../../Common/Card/Card"
import {portfolio} from "../../data/data"
function Portfolio() {
    return (
        <>
            <section className="portfolio">
                <div className="container">
                    <Heading title="Portfolio"/>
                    <div className="projects" >
                        {
                            portfolio.map((item, i) => (
                                <div className="box" data-aos="flip-left">
                                    <a href={item.link} target="#" className="img">
                                        <img src={item.img} alt="" />
                                    </a>
                                    <div className="description">
                                        <h3>{item.title}</h3>
                                        <label>{item.tool}</label>
                                        <p>{item.description}</p>
                                    </div>
                                </div>
                                
                                
                                
                            ))
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

export default Portfolio