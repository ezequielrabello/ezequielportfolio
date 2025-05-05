import React from "react"
import "./Footer.css"
import { social } from "../../data/data"
import { data } from "react-router-dom";

const Footer = () => {
    const date = new Date();
    const year = date.getFullYear()
  return (
    <>
      <footer>
        {social.map((item) => (
          <>
            <a href={item.link} target="#" data-aos='zoom-in'>{item.icon}</a>
          </>
        ))}
        <p>All Right Reserved {year}</p>
      </footer>
    </>
  )
}

export default Footer