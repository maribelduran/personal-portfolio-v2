import React, {Component} from "react";
import {FormGroup, ControlLabel, FormControl} from 'react-bootstrap';
import './projects.css'

//create a JSON object that lists the projects

class Projects extends Component {

  constructor(props) {
    super(props);

    this.state = {
      selectedType: 'front-end'
    };

    this.onSelectChange = this.onSelectChange.bind(this);
  }
  onSelectChange(e) {
    this.setState = { selectedType: e.target.value};
  }

  render(){

    return(
      <section id="projects" className="section projects">
        <h2 className="text-center">PROJECTS</h2>
        <div className="section-content">
          <FormGroup controlId="formControlsSelect">
            <FormControl 
                componentClass="select" 
                placeholder="select" 
                defaultValue={this.state.selectedType}
                onChange={this.onSelectChange}>
              <option value="front-end" >Front End</option>
              <option value="back-end">Back End</option>
            </FormControl>
          </FormGroup>

        <div className="project-list" >
        <a href="http://www.maribelduran.com/Hacking4Humanity2017/web/index.html" className="single-card front-end" target="_blank" >
            <div className="card-img">
              <img className="card-img_src center-block" src="images/frontend/EmpowerHerSF_cover.png" alt="Screenshot of project" />
            </div>
          <div className="blue-divider"></div>
          <div className="card-info">
            <h4 className="card-name">EmpowerHer:SF</h4>
            <p>EmpowerHerSF focuses on providing Human Trafficking awareness and funding to local SF women shelters. The website matches you with local shelters that need items that you have available to donate.</p>
          </div>
          </a>

           <a href="https://maribelduran.github.io/tic-tac-toe/" className="single-card front-end" target="_blank" >
            <div className="card-img">
              <img className="card-img_src center-block" src="images/frontend/TicTacToe.png" alt="Screenshot of project" />
            </div>
          <div className="blue-divider"></div>
          <div className="card-info">
            <h4 className="card-name">Tic Tac Toe</h4>
            <p>A user can play a game of Tic Tac Toe with the computer and choose whether they want to play as X or O. The game will reset as soon as it's over. Built using: Javascript, jQuery, HTML, CSS3, and Bootstrap. 
            </p>
          </div>
          </a>

            <a href="https://maribelduran.github.io/pomodoro-timer" className="single-card front-end" target="_blank">
            <div className="card-img">
              <img className="card-img_src center-block" src="images/frontend/PomodoroTimer.png" alt="Screenshot of project" />
            </div>
          <div className="blue-divider"></div>
          <div className="card-info">
            <h4 className="card-name">Pomodoro Timer</h4>
            <p>A countdown clock that switches between a Session Timer and Break Timer. The length of the timers are customizable and can be reset. Built using: Javascript, Jquery, HTML5, CSS3, and Bootstrap. </p>
          </div>
          </a>
          <a href="https://maribelduran.github.io/javascript-calculator" className="single-card front-end" target="_blank">
            <div className="card-img">
              <img className="card-img_src center-block" src="images/frontend/JavascriptCalculator.png" alt="Screenshot of project" />
            </div>
          <div className="blue-divider"></div>
          <div className="card-info">
           <h4 className="card-name">Javascript Calculator</h4>
            <p>A fully functional calculator that can chain mathematical operations together. Built using Javascript, jQuery, HTML5, and CSS3.</p>
          </div>
          </a>
          <a href="https://www.maribelduran.com/simon-game/" className="single-card front-end" target="_blank" >
            <div className="card-img">
              <img className="card-img_src center-block" src="images/frontend/SimonGame.png" />
            </div>
          <div className="blue-divider"></div>
          <div className="card-info">
            <h4 className="card-name">Simon Game</h4>
            <p>A browser based version of the 1980s classNameic Simon Game. Built using Javascript, jQuery, HTML5, and CSS3.</p>
          </div>
          </a>
           <a href="https://maribelduran.github.io/twitch_streamers" className="single-card front-end" target="_blank">
            <div className="card-img">
              <img className="card-img_src center-block" src="images/frontend/Twitch_Streamers.png" alt="Screenshot of project" />
            </div>
          <div className="blue-divider"></div>
          <div className="card-info">
            <h4 className="card-name">Twitch Streamers</h4>
            <p>Shows whether a Twitch streamer is online, offline, or no longer active. Uses the Twitch.tv JSON API to get twitch streamers information. Built using Vanilla JS, HTML, and CSS3.</p>
          </div>
          </a>
           <a href="https://maribelduran.github.io/wikipedia-viewer/" className="single-card front-end" target="_blank">
            <div className="card-img">
              <img className="card-img_src center-block" src="images/frontend/WikipediaViewer.png" alt="Screenshot of project" />
            </div>
          <div className="blue-divider"></div>
          <div className="card-info">
            <h4 className="card-name">Wikipedia Viewer</h4>
            <p>Allows a user to search and view Wikipedia articles.Uses Wikpedia's API to retrieve the articles. Built using Vanilla JS, HTML, and CSS3.</p>
          </div>
          </a>
           <a href="https://maribelduran.github.io/local-weather/" className="single-card front-end" target="_blank">
            <div className="card-img">
              <img className="card-img_src center-block" src="images/frontend/SFWeatherSmall.png" alt="Screenshot of project" />
            </div>
          <div className="blue-divider"></div>
          <div className="card-info">
            <h4 className="card-name">Local Weather App</h4>
            <p>Shows the weather of the user's current location in both Fahrenheit and Celcius. Uses HTML5 Geolocation API to get the user's location and Dark Sky API for the weather conditions. Built using Javascript, jQuery, HTML5, CSS, and Bootstrap.</p>
          </div>
          </a>
           
          <a href="https://maribelduran.github.io/inspirational-quote-generator" className="single-card front-end" target="_blank">
            <div className="card-img">
              <img className="card-img_src center-block" src="images/frontend/RandomQuoteGenerator.png" alt="Screenshot of project" />
            </div>
          <div className="blue-divider"></div>
          <div className="card-info">
            <h4 className="card-name">Inspirational Quotes Generator</h4>
            <p>Provides random inspirational quotes using Forismatic API. The user can share the quotes on Facebook and Twitter. Built using Javascript, JQuery, HTML, CSS3, and Bootstrap</p>
          </div>
          </a>
          <a href="https://maribelduran.github.io/tribute-to-steve-jobs" className="single-card front-end" target="_blank">
            <div className="card-img">
              <img className="card-img_src center-block" src="images/frontend/TributePage.png" alt="Screenshot of project" />
            </div>
          <div className="blue-divider"></div>
          <div className="card-info">
            <h4 className="card-name">Tribute Page</h4>
            <p>A simple tribute page featuring Steve Jobs's timeline and some of his famous quotes. This was my first time using Bootstrap :)</p>
          </div>
          </a>
          <a href="https://file-metadata-micro-srvc.herokuapp.com/" className="single-card back-end hide" target="_blank">
            <div className="card-img">
              <img className="card-img_src center-block" src="images/backend/FileMetadata.png" alt="Screenshot of project" />
            </div>
          <div className="blue-divider"></div>
          <div className="card-info">
            <h4 className="card-name">File Metadata Microservice</h4>
            <p>
              This service accepts a single file upload and will return the file size in bytes in the JSON response.
              Built using Node.js, Express, and Multer.
            </p></div>
          </a>
          <a href="https://url-shortener-microsrvc.herokuapp.com/" className="single-card back-end hide" target="_blank">
            <div className="card-img">
              <img className="card-img_src center-block" src="images/backend/urlShortener.png" alt="Screenshot of project" />
            </div>
          <div className="blue-divider"></div>
          <div className="card-info">
            <h4 className="card-name">URL Shortener Microservice</h4>
            <p>This service accepts a URL and will return both the original URL and shortened URL in a JSON response.
                Built using MongoDB, Node.js and Express.
            </p></div>
          </a>
          <a href="https://req-header-parser-srvc.herokuapp.com/" className="single-card back-end hide" target="_blank">
            <div className="card-img">
              <img className="card-img_src center-block" src="images/backend/RequestHeaderParser.png" alt="Screenshot of project" />
            </div>
          <div className="blue-divider"></div>
          <div className="card-info">
            <h4 className="card-name">Request Header Parser Microservice</h4>
            <p>This service returns your IP address, language, operating system, and browser specs.
                Built using Node.js and Express.
            </p></div>
          </a>
          <a href="https://timestamp-micro-srvc.herokuapp.com/" className="single-card back-end hide" target="_blank">
            <div className="card-img">
              <img className="card-img_src center-block" src="images/backend/Timestamp.png" alt="Screenshot of project" />
            </div>
          <div className="blue-divider"></div>
          <div className="card-info">
            <h4 className="card-name">Timestamp Microservice</h4>
            <p>
                This service accepts a string and returns both the Unix timestamp and the natural language form of that date as a JSON object.
                Built using Node.js and Express.
            </p></div>
          </a>
          <a href="https://img-search-layer-microsrvc.herokuapp.com/" className="single-card back-end hide" target="_blank">
            <div className="card-img">
              <img className="card-img_src center-block" src="images/backend/ImageSearch.png" alt="Screenshot of project" />
            </div>
          <div className="blue-divider"></div>
          <div className="card-info">
            <h4 className="card-name">Image Search Abstraction Microservice</h4>
            <p>
              This service accepts a search string and will return a set of image results from a Google custom search engine.
              Built using, MongoDB, Node.js, and Express.
            </p></div>
          </a>
        </div>
    </div>
    </section>
  )
 }
}

export default Projects;