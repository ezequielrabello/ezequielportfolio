import React, { useState } from "react"
import { Link } from "react-router-dom"
import {navlink} from "../../data/data"
import github from "../../data/images/github.svg"
import { Menu } from "@mui/icons-material"
import "./Header.css"

function Header() {
    const [responsive, setResponsive] = useState(false) 
    function handleResponsive() {
        setResponsive(!responsive)
    }

    function handleLinkClick() {
        setResponsive(false)
    }
    return (
        <>
            <header>
                <div className="container flexsb">
                    <a href="https://github.com/ezequielrabello/" className="logo">
                        <img src={github} alt="" data-aos="zoom-in-right" />
                    </a>
                    <div className={responsive ? "hideMenu" : "nav"} >
                        {
                            navlink.map((links, i) => (
                                <Link to={links.url} key={i} data-aos="zoom-in-right" onClick={handleLinkClick}>
                                    {links.text}
                                </Link>
                            ))
                        }
                    </div>
                    <button data-aos="fade-down"  className="toggle" onClick={() => handleResponsive()}>
                        <Menu className="icon"></Menu>
                    </button>
                </div>
            
            </header>
        </>
    )
}

export default Header