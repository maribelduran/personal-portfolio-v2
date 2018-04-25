import React, {Component} from "react";
import { Navbar, Nav, NavItem} from 'react-bootstrap';
import ScrollchorItem from './scrollchor-item';
import Scrollspy from 'react-scrollspy'
import  "./navigation.css";

const { 
  Header, 
  Brand,
  Toggle, 
  Collapse 
  } = Navbar;

class Navigation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hasScrolledDown: false,
      activeKey: "",
    };
    this.handleScroll = this.handleScroll.bind(this);
    this. addActiveClassName = this. addActiveClassName.bind(this);
   }

   addActiveClassName(event){
    this.setState({activeKey: event});
   }

   handleScroll() {
      const bodyScrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      if (bodyScrollTop > 75){
        this.setState({hasScrolledDown: true});
      }
      else{
        this.setState({hasScrolledDown: false});
      }
   }
  
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  render(){
    const whiteBackground = (this.state.hasScrolledDown) ? "white-background navbar-border" : "";
    const fontColor = (this.state.hasScrolledDown) ? "blue-font" : "white-font";
     
    return(
      <Navbar className={whiteBackground} fixedTop={true} fluid={true} collapseOnSelect={true}>
      <Header >
          <Brand className={fontColor}>
            <a href="http://localhost:8000/">MARIBEL DURAN</a>
          </Brand>
          <Toggle className={fontColor}/>
        </Header>
        <Collapse >
        <Scrollspy 
          items={ ['about', 'projects', 'contact'] } 
          currentClassName="active" 
          componentTag={Nav}
          className={`${fontColor} navbar-right`}
         >
         <NavItem eventKey={1} >
            <ScrollchorItem to="#about" className="nav-link" >ABOUT ME</ScrollchorItem>
         </NavItem>
          <NavItem eventKey={2} >
              <ScrollchorItem to="#projects" className="nav-link">PROJECTS</ScrollchorItem>
          </NavItem>
          <NavItem eventKey={3} >
              <ScrollchorItem to="#contact" className="nav-link">CONTACT</ScrollchorItem>
          </NavItem>
          <NavItem eventKey={4} href="https://medium.com/@maribelduran" target="_blank" >
            <span className="nav-link">WRITING</span>
          </NavItem>
        </Scrollspy>
        </Collapse>
      </Navbar>
    )
  }
}

export default Navigation;