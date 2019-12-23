import React, { useState, useEffect } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  NavLink,
  NavItem,
} from "reactstrap";
import ScrollchorItem from "./scrollchor-item";
import Scrollspy from "react-scrollspy";
import "./navigation.css";

const Navigation = () => {
  const [scrolledDownEnough, setScrolledDownEnough] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleCloseCollapse = () => {
    if (isOpen) {
      setIsOpen(!isOpen);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const bodyScrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      const scrolledDownEnough = bodyScrollTop > 75 ? true : false;
      setScrolledDownEnough(scrolledDownEnough);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolledDownEnough]);

  const whiteBackground = scrolledDownEnough
    ? "white-background navbar-border"
    : "";
  const fontColor = scrolledDownEnough ? "blue-font" : "white-font";

  return (
    <Navbar className={whiteBackground} fixed={"top"} expand="md">
      <NavbarBrand href="https://www.maribelduran.com/" className={fontColor}>
        MARIBEL DURAN
      </NavbarBrand>
      <NavbarToggler onClick={() => setIsOpen(!isOpen)}>
        <i className={`fa fa-navicon ${fontColor}`} />
      </NavbarToggler>
      <Collapse isOpen={isOpen} className={`${fontColor}`} navbar>
        <Scrollspy
          items={["about", "projects", "contact"]}
          currentClassName="active"
          className={`${fontColor} ml-auto navbar-nav`}
          navbar
        >
          <NavItem onClick={handleCloseCollapse}>
            <ScrollchorItem to="#about" className="nav-link">
              ABOUT ME
            </ScrollchorItem>
          </NavItem>
          <NavItem onClick={handleCloseCollapse}>
            <ScrollchorItem to="#projects" className="nav-link">
              PROJECTS
            </ScrollchorItem>
          </NavItem>
          <NavItem onClick={handleCloseCollapse}>
            <ScrollchorItem to="#contact" className="nav-link">
              CONTACT
            </ScrollchorItem>
          </NavItem>
          <NavItem onClick={handleCloseCollapse}>
            <NavLink
              href="https://medium.com/@maribelduran"
              target="_blank"
              className="external-link"
              rel="noopener noreferrer"
            >
              WRITING
            </NavLink>
          </NavItem>
        </Scrollspy>
      </Collapse>
    </Navbar>
  );
};

export default Navigation;
