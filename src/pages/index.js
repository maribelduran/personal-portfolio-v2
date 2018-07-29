import React from "react";
import Cover from "../components/cover";
import Navigation from "../components/navigation";
import AboutMe from "../components/about-me";
import Projects from "../components/projects";
import Contacts from "../components/contacts";
import Footer from "../components/footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import "./index.css";

const HomePage = ({ data }) => {
  const { edges: imgData } = data.ProjectImgs;
  console.log(data.iconImgs);
  return (
    <div>
      <Cover coverImg={data.coverImg} />
      <div className="container-fluid main">
        <Navigation />
        <AboutMe profileImg={data.profileImg} />
        <Projects projectImgs={imgData} />
        <Contacts />
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;

export const query = graphql`
  query allImgsQuery {
    coverImg: imageSharp(id: { regex: "/AirBalloon/" }) {
      sizes(maxWidth: 1200) {
        ...GatsbyImageSharpSizes
      }
    }

    profileImg: imageSharp(id: { regex: "/Maribel/" }) {
      sizes(maxWidth: 420, maxHeight: 630) {
        ...GatsbyImageSharpSizes
      }
    }

    meditatingImg: imageSharp(id: { regex: "/meditating/" }) {
      sizes(maxHeight: 30) {
        ...GatsbyImageSharpSizes
      }
    }

    ProjectImgs: allFile(
      sort: { order: ASC, fields: [absolutePath] }
      filter: { relativePath: { regex: "/projects/.*.png/" } }
    ) {
      edges {
        node {
          relativePath
          name
          childImageSharp {
            sizes(maxWidth: 320, maxHeight: 210) {
              ...GatsbyImageSharpSizes
            }
          }
        }
      }
    }

    iconImgs: allFile(
      sort: { order: ASC, fields: [absolutePath] }
      filter: { relativePath: { regex: "/icons/.*.png/" } }
    ) {
      edges {
        node {
          relativePath
          name
          childImageSharp {
            sizes(maxHeight: 30) {
              ...GatsbyImageSharpSizes
            }
          }
        }
      }
    }
  }
`;
