import React from "react";

const Navigation = () => 
<nav className="navbar navbar-fixed-top">
  <div className="navbar-header">
    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
      <span className="icon-bar"></span>
      <span className="icon-bar"></span>
      <span className="icon-bar"></span>                        
    </button>
    
    <a className="navbar-brand" href="https://maribelduran.github.io/
    ">MARIBEL DURAN</a>
  </div>
  <div className="collapse navbar-collapse" id="myNavbar">
    <ul className="nav navbar-nav navbar-right">
      <li><a href="#about">ABOUT ME</a></li>
      <li><a href="#projects">PROJECTS</a></li>
      <li><a href="#contact">CONTACT</a></li>
      <li><a href="https://medium.com/@maribelduran" target="_blank" >WRITING</a></li>
    </ul>
  </div>
  </nav>

export default Navigation;