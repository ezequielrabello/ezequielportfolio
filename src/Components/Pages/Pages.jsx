import React from "react"
import { BrowserRouter as Router,Routes, Route, Link } from "react-router-dom"
import Header from "../Common/Header/Header.jsx"
import Footer from "../Common/Footer/Footer.jsx"
import Home from "../Home/Home.jsx"
import About from "./About/About.jsx"
import Portfolio from "./Portfolio/Portfolio.jsx"
import Contact from "./Contact/Contact.jsx"

function Pages() {
    return (
        <>
            <Router>
                <Header/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/portfolio" element={<Portfolio/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/contact" element={<Contact/>}/>
                    <Route path="/footer" element={<Footer/>}/>
                </Routes>
               
            </Router>
        
        </>
    )
}

export default Pages