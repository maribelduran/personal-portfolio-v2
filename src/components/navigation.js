import React, {Component} from "react";
import { Navbar, Nav, NavItem} from 'react-bootstrap';
//import Scrollchor from 'react-scrollchor';
import ScrollchorItem from './scrollchor-item';
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
    const bootstrapBlueBackground = (this.state.hasScrolledDown) ? "bootstrap-background-color" : "";

    const scrollDuration ={duration: 1000};
     
    return(
      <Navbar className={whiteBackground} fixedTop={true} fluid={true} collapseOnSelect={true}>
      <Header >
          <Brand className={fontColor}>
            <a href="http://localhost:8000/">MARIBEL DURAN</a>
          </Brand>
          <Toggle className={fontColor}/>
        </Header>
        <Collapse >
        <Nav onSelect={this.addActiveClassName}
            activeKey={this.state.activeKey}
            pullRight
            className={fontColor}>
          <NavItem eventKey={1}  >
          <ScrollchorItem role="button" to="#about" className="nav-link">ABOUT</ScrollchorItem>
          </NavItem>
          <NavItem eventKey={2} >
          <ScrollchorItem to="#projects" className="nav-link">PROJECTS</ScrollchorItem>
          </NavItem>
          <NavItem eventKey={3} >
          <ScrollchorItem to="#contact" className="nav-link">CONTACT</ScrollchorItem>
          </NavItem>
          <NavItem eventKey={4} href="https://medium.com/@maribelduran">
            WRITING
          </NavItem>
        </Nav>
        </Collapse>
      </Navbar>
    )
  }
}

export default Navigation;