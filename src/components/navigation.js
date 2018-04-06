import React from "react";
import { Navbar, Nav, NavItem} from 'react-bootstrap';
import  "./navigation.css";

const { 
  Header, 
  Brand,
  Toggle, 
  Collapse 
  } = Navbar;

const Navigation = () => 
<Navbar className="no-botton-border" fixedTop={true}>
<Header>
    <Brand>
      <a href="#top">MARIBEL DURAN</a>
    </Brand>
    <Toggle />
  </Header>
  <Collapse>
  <Nav pullRight>
    <NavItem eventKey={1} href="#about">
      ABOUT ME
    </NavItem>
    <NavItem eventKey={2} href="#projects">
      PROJECTS
    </NavItem>
    <NavItem eventKey={3} href="#contact">
      CONTACT
    </NavItem>
    <NavItem eventKey={3} href="https://medium.com/@maribelduran">
      WRITING
    </NavItem>
  </Nav>
  </Collapse>
</Navbar>

/*
<nav className="navbar navbar-fixed-top">
  <div className="navbar-header">
    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
      <span className="icon-bar"></span>
      <span className="icon-bar"></span>
      <span className="icon-bar"></span>                        
    </button>
    
    <a className="navbar-brand" href="https://maribelduran.github.io/
    ">MARIBEL DURAN</a>
  </div>
  <div className="collapse navbar-collapse" id="myNavbar">
    <ul className="nav navbar-nav navbar-right">
      <li><a href="#about">ABOUT ME</a></li>
      <li><a href="#projects">PROJECTS</a></li>
      <li><a href=".contact">CONTACT</a></li>
      <li><a href="https://medium.com/@maribelduran" target="_blank" >WRITING</a></li>
    </ul>
  </div>
  </nav>
*/

export default Navigation;