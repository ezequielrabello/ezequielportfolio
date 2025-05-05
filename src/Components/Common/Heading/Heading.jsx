import React from "react";
import "./Heading.css"
function Heading({title}) {
    return(
        <>
            <h2 className="heading" data-aos='fade-down'>
                {title}
            </h2>
        </>
    )
}

export default Heading