import React from "react";
import Typed from "react-typed";

const Header = () => {
    return (
        <div className="header-wrapper">
            <div className="main-info">
                <h1 style={{color: "#55a92d"}}>DEJAN MLADENOVIC</h1> <h2 style={{ color: "rgba(3, 169, 252)"}}> BASKETBALL COACH!</h2>
                <Typed 
                className="typed-text"
                strings={["Individaul Training", "Motor skills", "Techical skills"]}
                typeSpeed={40}
                backSpeed={60}
                loop
                />
                <a href="#" className="btn-main-offer">contact me</a>
            </div>
        </div>
    )
}

export default Header
