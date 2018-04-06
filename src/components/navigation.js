import React, {Component} from "react";
import { Navbar, Nav, NavItem} from 'react-bootstrap';
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

    //this.state = {  scrollBackground: 'nav-bg' };
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
        //navbar.ClassList.add('white-background navbar-border');
        //$('.navbar-nav>li>a, .navbar-brand').addClass('bootstrap-blue');
      // $('.icon-bar').addClass('bootstrap-background-color');
      }
      else{
        this.setState({hasScrolledDown: false});
      // $('.navbar').removeClass('white-background navbar-border');
      // $('.navbar-nav>li>a, .navbar-brand').removeClass('bootstrap-blue');
      // $('.icon-bar').removeClass('bootstrap-background-color');
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
     
    return(
      <Navbar className={whiteBackground} fixedTop={true} fluid={true} collapseOnSelect={true}>
      <Header >
          <Brand className={fontColor}>
            <a href="#top">MARIBEL DURAN</a>
          </Brand>
          <Toggle />
        </Header>
        <Collapse >
        <Nav onSelect={this.addActiveClassName}
            activeKey={this.state.activeKey}
            className={fontColor} pullRight>
          <NavItem eventKey={1} href="#about">
            ABOUT ME
          </NavItem>
          <NavItem eventKey={2} href="#projects">
            PROJECTS
          </NavItem>
          <NavItem eventKey={3} href="#contact">
            CONTACT
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