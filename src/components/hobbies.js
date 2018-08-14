import React from "react";
import hobbyList from "../data/hobbies.json";
import Img from "gatsby-image";
import "./hobbies.css";

const Hobbies = () => {
  return (
    <div>
      <h4>When I'm not coding, you can find me </h4>
      <p>
        {hobbyList.map((hobby, i) => {
          let isExternal = hobby.external_url;
          return (
            <span className="hobby-wrapper" key={hobby.name}>
              <span className="hobby-icon">
                <img
                  src={`static/icons/${hobby.img}`}
                  alt={`${hobby.name} Icon`}
                  className="hobby-icon"
                />
              </span>
              {isExternal ? (
                <a
                  href={hobby.external_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {hobby.name}
                </a>
              ) : (
                hobby.name
              )}
              {i !== hobbyList.length - 1 ? "|" : null}
            </span>
          );
        })}
      </p>
    </div>
  );
};

export default Hobbies;
