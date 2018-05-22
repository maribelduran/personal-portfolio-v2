import React from "react";
import Scrollchor from "react-scrollchor";
import  "./cover.css";

const Cover = () =>
<div id="#top" className="cover animated fadeIn">
  <div className="overlay"></div>
  <div className="center">
    <h1 className="name">
      <b>HI, I'M MARIBEL</b>
    </h1>
    <p className="greetings">Let's change the world together!</p>
  </div>
  <div className="arrow animated bounceInDown">
  <Scrollchor to="#about" className="btn btn-md" animate={{ duration: 1000}}>
      <span className="glyphicon glyphicon-menu-down"></span>
  </Scrollchor>
  </div>
</div>

export default Cover;