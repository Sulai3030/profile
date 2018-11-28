import React from 'react';
import {NavLink} from "react-router-dom"
export default function Navbar(){
    return(
      <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
        <header className="mdl-layout__header mdl-layout__header--waterfall portfolio-header">
            <div className="mdl-layout__header-row portfolio-logo-row">
               <center> <span className="mdl-layout__title"></span>
                    <div className="portfolio-logo"> Sulai Sivadel : Web Developer</div></center>
                    <span className="mdl-layout__title"> </span>
                
            </div>
            <div className="mdl-layout__header-row portfolio-navigation-row mdl-layout--large-screen-only">
                <nav className="mdl-navigation mdl-typography--body-1-force-preferred-font">
                    <NavLink exact to="/" className="mdl-navigation__link">Home</NavLink>
                    <NavLink to="/projects" className="mdl-navigation__link">Projects</NavLink>
                    <NavLink to="/contact-me" className="mdl-navigation__link">Contact Me</NavLink>
                </nav>
            </div>
        </header>
        
        </div>
    )

}