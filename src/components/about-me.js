import React from "react";
import "./about-me.css";
import Img from "gatsby-image";
import Hobbies from "./hobbies";

const AboutMe = ({ profileImg, hobbyImgs }) => {
  return (
    <section id="about" className="section">
      <h2 className="text-center">ABOUT ME</h2>
      <div className="section-content">
        <div className="row">
          <div className="col-12 col-sm-10 offset-sm-1 col-md-6 offset-md-0 col-lg-5 offset-lg-1 ">
            <Img
              title="Profile image"
              alt="Large image of Maribel"
              sizes={profileImg.sizes}
              className="img-responsive center-block"
            />
          </div>
          <div className="col-12 col-sm-12 col-md-6">
            <h4>What I hope to do</h4>
            <p>
              My mission as a developer is to contribute to applications that
              empower and improve lives. I believe that through code we can make
              the world a better place by building products that empower
              communities. Yes, let's change the world together!
            </p>
            <h4>What I'm doing</h4>
            <p>
              I recently{" "}
              <a
                href="https://www.freecodecamp.org/news/how-i-was-landing-software-engineer-interviews-after-being-laid-off-2/"
                target="_blank"
                rel="noopener noreferrer"
              >
                shared all of the resources and strategies I used to land many
                software engineer interviews
              </a>
              .
            </p>
            <p>
              I am helping others as I advance in my career by sharing my
              experiences and perspectives through writing, speaking, and{" "}
              <a
                href="https://mentors.codingcoach.io/?name=MARIBEL+DURAN"
                target="_blank"
                rel="noopener noreferrer"
              >
                mentoring
              </a>
              .
            </p>
            <p>
              On my free time, I attend meetups, listen to engineering podcasts,
              read tech blogs, and take online courses to help me become a
              better developer for the people around me.
            </p>
            <Hobbies icons={hobbyImgs} />
          </div>
        </div>
        <div className="row">
          <div className=" col-12 col-md-4 col-lg-4 offset-lg-1">
            <div className="box">
              <h5>Toolbox</h5>
              <p>
                <b>Languages and Frameworks:</b> Javascript, HTML5, CSS3, React,
                Bootstrap, Node, Express, MongoDB, Rails, Postgres, Jest
                <br />
                <b>IDE:</b> Microsoft VS Code
                <br />
                <b>VCS:</b> Git/Github
                <br />
                <b>PMS:</b> Trello
                <br />
                <b>Debugger:</b> Chrome DevTools
                <br />
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-6 ">
            <div className="box">
              <h5>Learning</h5>
              <p>
                Currently: GraphQL, Typescript, Accessibility
                <br /> On the radar: Web Performance
              </p>
            </div>
          </div>
          <div className="col-lg-4  col-md-4 col-6 ">
            <div className="box">
              <h5>Hacking on</h5>
              <p>
                {" "}
                1) Contributing fulltime to NerdWallet. We're on a mission to
                provide clarity for all of life’s financial decisions.
                <br />
                2) Making this website more{" "}
                <a
                  href="https://github.com/maribelduran/personal-portfolio-v2/pull/14"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  accessible
                </a>
                .
                <br />
                3) Brainstorming a new technical blog post to write.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
