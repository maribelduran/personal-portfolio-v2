import React, { useState } from "react";
import { FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import Img from "gatsby-image";
import classNames from "classnames";
import "./projects.css";
import projectList from "../data/projects.json";

const Projects = ({ projectImgs }) => {
  const [type, setType] = useState("front-end");

  return (
    <section id="projects" className="section projects">
      <h2 className="text-center">PROJECTS</h2>
      <div className="section-content">
        <div className="subheader">
          <FormGroup controlId="project-type-select">
            <ControlLabel className="visually-hidden">
              Select a project type
            </ControlLabel>
            <FormControl
              componentClass="select"
              placeholder="select"
              defaultValue={type}
              onChange={(e) => setType(e.target.value)}
            >
              <option value="front-end">Front End</option>
              <option value="back-end">Back End</option>
              <option value="react">React</option>
            </FormControl>
          </FormGroup>
        </div>
        <div className="project-list">
          {projectList.map((project) => {
            const isSelectedType = type === project.type;
            const singleCardClass = classNames("single-card", {
              hide: !isSelectedType,
            });
            const image = projectImgs.find((n) => {
              return n.node.relativePath === `projects/${project.img}`;
            });
            const imageSizes = image.node.childImageSharp.sizes;
            return (
              <a
                href={project.url}
                key={project.url}
                className={singleCardClass}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="card-img">
                  <Img
                    title={project.name}
                    alt="Screenshot of Project"
                    sizes={imageSizes}
                    className="card-img_src center-block"
                  />
                </div>
                <div className="blue-divider" />
                <div className="card-info">
                  <h4 className="card-name">{project.name}</h4>
                  <p>{project.description}</p>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
