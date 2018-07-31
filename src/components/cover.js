import React from "react";
import Scrollchor from "react-scrollchor";
import Img from "gatsby-image";
import "./cover.css";

const Cover = ({ coverImg }) => (
  <div id="#top" className="cover animated">
    <Img
      title="Cover image"
      alt="Air Balloon in Nature"
      sizes={coverImg.sizes}
      style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: "100%",
        height: "100%"
      }}
    />
    <div className="overlay" />
    <div className="center">
      <h1 className="name">
        <b>HI, I'M MARIBEL</b>
      </h1>
      <p className="greetings">Let's change the world together!</p>
    </div>
    <div className="arrow animated bounceInDown">
      <Scrollchor to="#about" className="btn" animate={{ duration: 500 }}>
        <i className="fa fa-chevron-down" />
      </Scrollchor>
    </div>
  </div>
);

export default Cover;
