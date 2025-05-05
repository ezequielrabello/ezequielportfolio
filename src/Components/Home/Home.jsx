import React from "react";
import Hero from "./Hero/Hero";
import About from "../Pages/About/About";
import Portfolio from "../Pages/Portfolio/Portfolio";
import Contact from "../Pages/Contact/Contact";
import Footer from "../Common/Footer/Footer"

function Home() {
    return (
        <>
            <Hero/>
            <Portfolio/>
            <About/>
            <Contact/>
            <Footer/>
        </>
    )
}

export default Home