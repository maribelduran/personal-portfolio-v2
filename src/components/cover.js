import React from "react";
import  "./cover.css";

const Cover = () =>
<div id="cover" className="cover animated fadeIn">
  <div className="overlay"></div>
  <div className="center">
    <h1 className="name">
      <b>HI, I'M MARIBEL</b>
    </h1>
    <p className="greetings">Let's change the world together!</p>
  </div>
  <div className="arrow animated bounceInDown">
    <a href="#about" className="btn btn-md">
      <span className="glyphicon glyphicon-menu-down"></span>
    </a>
  </div>
</div>

export default Cover;