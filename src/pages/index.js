import React from "react";
import Cover from "../components/cover";
import Navigation from "../components/navigation";
import AboutMe from "../components/about-me";
import Projects from "../components/projects";
import Contacts from "../components/contacts";
import Footer from "../components/footer";
import Helmet from "react-helmet";
import favicon from "../static/logo/favicon.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import "./index.css";

const HomePage = ({ data }) => {
  const siteTitle = data.site.siteMetadata.title;
  const { edges: imgData } = data.ProjectImgs;
  return (
    <div>
      <Helmet
        title={siteTitle}
        link={[{ rel: "icon", type: "image/png", href: `${favicon}` }]}
      />
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
    site {
      siteMetadata {
        title
      }
    }

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
            sizes(maxWidth: 320) {
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
