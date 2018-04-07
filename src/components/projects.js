import React, {Component} from "react";
import {FormGroup, ControlLabel, FormControl} from "react-bootstrap";
import classNames from 'classnames';
import "./projects.css";
import projectList from "../data/projects.json"

class Projects extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedType: 'front-end'
    };

    this.onSelectChange = this.onSelectChange.bind(this);
  }
  onSelectChange(e) {
    this.setState({ selectedType: e.target.value});
  }

  render(){
    const {selectedType} = this.state;
    return(
      <section id="projects" className="section projects">
        <h2 className="text-center">PROJECTS</h2>
        <div className="section-content">
        <div className="subheader">
          <FormGroup controlId="formControlsSelect">
            <FormControl 
                componentClass="select" 
                placeholder="select" 
                defaultValue={selectedType}
                onChange={this.onSelectChange}>
              <option value="front-end" >Front End</option>
              <option value="back-end">Back End</option>
              <option value="react">React</option>
            </FormControl>
          </FormGroup>
      </div>
        <div className="project-list" >
          {projectList.map(project => {
             const isSelectedType = (selectedType == project.type);
             const singleCardClass = classNames(
                'single-card',
                { 'hide': !isSelectedType }
              );
            return(
              <a href={project.url} className={singleCardClass} target="_blank">
                <div className="card-img">
                  <img className="card-img_src center-block" src={`images/frontend/${project.img}`} alt="Screenshot of project" />
                </div>
              <div className="blue-divider"></div>
              <div className="card-info">
                <h4 className="card-name">{project.name}</h4>
                <p>{project.description}</p>
              </div>
            </a>
           )} 
          )}
        </div>
    </div>
    </section>
  )
 }
}

export default Projects;