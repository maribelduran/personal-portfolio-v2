import React from "react";
import hobbyList from "../data/hobbies.json";

const Hobbies = ({ icons }) => {
  return (
    <div>
      <h4>When I'm not coding, you can find me </h4>
      <p>
        {hobbyList.map((hobby, i) => {
          let isExternal = hobby.external_url;
          const icon = icons.find(n => {
            return n.node.relativePath === `icons/${hobby.img}`;
          });
          return (
            <span className="hobby-wrapper" key={hobby.name}>
              <span className="hobby-icon">
                <img
                  src={icon.node.childImageSharp.sizes.src}
                  alt={`${hobby.name} Icon`}
                  height={"30px"}
                  width={"32px"}
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
