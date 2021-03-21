import React from "react";
import Typed from "react-typed";

const Header = () => {
    return (
        <div id="home" className="header-wrapper">
            <div className="main-info">
            <h2><span class="outline-text">DEJAN MLADENOVIC</span></h2>
                 <h2 style={{ color: "rgba(3, 169, 252)"}}> BASKETBALL COACH!!</h2>
                <Typed 
                className="typed-text"
                strings={["Individaul Trainings", "Motor skills", "Techical skills"]}
                typeSpeed={40}
                backSpeed={60}
                loop
                />
                <a href="contact-me" className="btn-main-offer">contact me</a>
            </div>
        </div>
    )
}

export default Header
