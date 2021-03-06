import React, { Component } from "react";
import {
  Route,
  HashRouter
} from "react-router-dom";

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
// import '../css/main.css';
import s from '../css/main.less';
import classNames from 'classnames';

import Home from "./Home";
import About from "./About";
import People from "./People";
import Programs from './Programs';
import Corporate from './Corporate';
import Login from './Login';
import Register from './Register';
import Footer from './Footer';
import MyAccount from './MyAccount';

class Main extends Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: false
    }
  }

  render() {
    return (
        <HashRouter>
          <div>
            <div className={s.header}>
            <Navbar className={s.fullWidth} collapseOnSelect expand="lg">
              <Navbar.Brand href="#/">
                <img
                  src="images/ceo_logo.png"
                  width="100"
                  height="60"
                  className="d-inline-block align-top"
                  alt="React Bootstrap logo"
                />
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className={classNames("mr-auto", s.mainNav)}>
                  <Nav.Link className={s.nav} href="#/">HOME</Nav.Link>
                  <Nav.Link className={s.nav} href="#/about">ABOUT</Nav.Link>
                  <NavDropdown className={s.navDrop} title="PEOPLE" id="collasible-nav-dropdown">
                    <NavDropdown.Item className={s.item} href='#/people/#team-section'>EXECUTIVE TEAM</NavDropdown.Item>
                    <NavDropdown.Item className={s.item} href='#/people/#guest-section'>GUESTS &#38; SPEAKERS</NavDropdown.Item>
                    <NavDropdown.Item className={s.item} href='#/people/#community-section'>COMMUNITY</NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown className={s.navDrop} title="PROGRAMS" id="collasible-nav-dropdown">
                    <NavDropdown.Item className={s.item}>SPEAKER SERIES</NavDropdown.Item>
                    <NavDropdown.Item className={s.item}>INNOVATION MIXER</NavDropdown.Item>
                    <NavDropdown.Item className={s.item}>SMALL GROUP DINNER</NavDropdown.Item>
                    <NavDropdown.Item className={s.item}>FRIDAY HAPPY HOUR</NavDropdown.Item>
                    <NavDropdown.Item className={s.item}>CHINA STARTUP TREK</NavDropdown.Item>
                    <NavDropdown.Item className={s.item}>PITCH NIGHT</NavDropdown.Item>
                    <NavDropdown.Item className={s.item}>FUTURE @ CEO</NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown className={s.navDrop} title="CORPORATE" id="collasible-nav-dropdown">
                    <NavDropdown.Item className={s.item} href="#action/3.1">SPONSORS</NavDropdown.Item>
                    <NavDropdown.Item className={s.item} href="#action/3.2">INTEREST FORM</NavDropdown.Item>
                  </NavDropdown>
                </Nav>              
                {
                  this.state.isLoggedIn? (
                    <Nav className={classNames("justify-content-end", s.account)}>
                      <Nav.Link className={s.myAccount} href="#/myAccount">MY ACCOUNT</Nav.Link>
                    </Nav>
                  ) : (
                  <Nav className={classNames("justify-content-end", s.account)}>
                    <Login />
                    <Nav.Link className={s.register} href="#/register">REGISTER</Nav.Link>
                  </Nav>
                  )
                } 
              </Navbar.Collapse>
            </Navbar>
            </div>
            <div className="content">
              <Route exact path="/" component={Home}/>
              <Route path="/about" component={About}/>
              <Route path="/people" component={People}/>
              <Route path="/programs" component={Programs}/>
              <Route path="/corporate" component={Corporate}/>
              <Route path="/register" component={Register}/>
              <Route path="/myAccount" component={MyAccount}/>              
            </div>
            <Footer />
          </div>
        </HashRouter>
    );
  }
}

export default Main;


