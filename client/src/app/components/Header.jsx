import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.css';

class Header extends Component {
  constructor(props) {
      super(props);
      this.state = {
        menu: false
      };
      this.toggleMenu = this.toggleMenu.bind(this);
    }

    toggleMenu(){
      this.setState({ menu: !this.state.menu })
    }
  render() {
    const show = (this.state.menu) ? "show" : "" ;
    return (
      <header>
          <Navbar className="navbar navbar-default navbar-fixed-top" bg="light" expand="lg">
            <Link to={this.props.authenticated ? '/users' : '/'} className="navbar-brand">Runebase</Link>
            <button className="navbar-toggler" type="button" onClick={ this.toggleMenu }>
              <span className="navbar-toggler-icon"></span>
            </button>
            <Navbar.Collapse id="basic-navbar-nav" className={"collapse navbar-collapse " + show}>
              <Nav className="mr-auto">
                <Link onClick={ this.toggleMenu } className="nav-link" to="/">Home</Link>
                <Link onClick={ this.toggleMenu } className="nav-link" to="/download">Download</Link>
                <NavDropdown title="Services" id="basic-nav-dropdown">
                  <NavDropdown.Item onClick={ this.toggleMenu } href="#action/3.1">Explorer</NavDropdown.Item>
                  <NavDropdown.Item onClick={ this.toggleMenu } href="#action/3.2">Faucet</NavDropdown.Item>
                  <NavDropdown.Item onClick={ this.toggleMenu } href="#action/3.3">Radio</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>
                <Link onClick={ this.toggleMenu } className="nav-link" to="/status">Status</Link>
              </Nav>
              {
              this.props.authenticated ?
                <ul>
                  <li>
                    <Link className="nav-link" to="/users">Users</Link>
                  </li>
                  <li>
                    <Link className="nav-link" to="/signout">Signout</Link>
                  </li>
                </ul>
                :
                <ul>
                  <li>
                    <Link className="nav-link" to="/signin">Sign in</Link>
                  </li>
                  <li>
                    <Link className="nav-link" to="/signup">Sign up</Link>
                  </li>
                </ul>
            }
            </Navbar.Collapse>
          </Navbar>
      </header>
    )
  }
}

function mapStateToProps(state) {
  return { authenticated: state.auth.authenticated };
}

export default connect(mapStateToProps)(Header);