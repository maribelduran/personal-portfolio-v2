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
                href="https://medium.freecodecamp.org/my-journey-to-becoming-a-software-engineer-4ae301fc02b"
                target="_blank"
                rel="noopener noreferrer"
              >
                landed my first software engineer role
              </a>
              ,{" "}
              <a
                href="https://medium.freecodecamp.org/how-i-made-my-portfolio-website-blazing-fast-with-gatsby-82ccddc2f671"
                target="_blank"
                rel="noopener noreferrer"
              >
                made this website blazing fast with Gatsby
              </a>
              , and gave my first meetup talk. I am helping others as I advance
              in my career by sharing my experiences and perspectives through
              writing, speaking, and mentoring.
            </p>
            <p>
              On my free time, I attend meetups, listen to engineering podcasts,
              read tech blogs, and take other online courses in order to help me
              develop a growth mindset and become a better developer.
            </p>
            <Hobbies icons={hobbyImgs} />
          </div>
        </div>
        <div className="row">
          <div className=" col-12 col-md-4 col-lg-4 offset-lg-1">
            <div className="box">
              <h5>Toolbox</h5>
              <p>
                <b>Languages and Frameworks:</b> Javascript, HTML5, CSS3,
                ReactJS, Bootstrap, NodeJS, ExpressJS, MongoDB, PostgreSQL
                <br />
                <b>IDE:</b> Microsoft VS Code
                <br />
                <b>VCS:</b> Git/Github
                <br />
                <b>PMS:</b> Trello, JIRA
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
                Currently: Ruby, Jest, i18n/l10n
                <br /> On the radar: GraphQL, React Hooks
              </p>
            </div>
          </div>
          <div className="col-lg-4  col-md-4 col-6 ">
            <div className="box">
              <h5>Hacking on</h5>
              <p>
                {" "}
                1) Contributing fulltime to Worklete, an amazing product that is
                helping workers stay healthy, happy, and injury-free.
                <br />
                2) Brainstorming a new technical blog post to write.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
