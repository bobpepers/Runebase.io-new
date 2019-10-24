import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, NavHashLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import ScrollableSection, { ScrollableLink } from 'react-update-url-on-scroll';
import {withRouter} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

class Header extends Component {
  constructor(props) {
      super(props);
      this.state = {
        menu: false,
        height: 0,
        prevHash: '',
        currentHash: '',
        chainInfo: false,
      };
      this.toggleMenu = this.toggleMenu.bind(this);
      this.updateHeight = this.updateHeight.bind(this);
      this.detectHashChange = this.detectHashChange.bind(this);
    }

    toggleMenu(){
      this.setState({ menu: !this.state.menu });
    }
    componentDidMount() {
       this.updateHeight();
       window.addEventListener("resize", this.updateHeight);
       window.addEventListener("scroll", this.detectHashChange);
     }

     componentWillUnmount() {
       window.removeEventListener("resize", this.updateHeight);
       window.removeEventListener("scroll", this.detectHashChange);
     }

     componentDidUpdate() {
       this.updateHeight();
       this.detectHashChange();
     }

     updateHeight() {
       if (this.state.height != this.div.clientHeight)
         this.setState({ height: this.div.clientHeight })
     }
     detectHashChange() {
      this.state.currentHash = window.location.hash.substring(1);
      if(this.state.currentHash !== this.state.prevHash){
        this.setState({currentHash: this.state.currentHash});
        this.state.prevHash = this.state.currentHash;
      }
     }


  render() {
    const show = (this.state.menu) ? "show" : "" ;
    return (
      <header style={{height: this.state.height}}>
          <Navbar ref={ div => { this.div = div; } } fixed='top' className="navbar navbar-default" bg="light" expand="lg">
            <Link to={this.props.authenticated ? '/' : '/'} className="navbar-brand">Runebase</Link>
            <button className="navbar-toggler" type="button" onClick={ this.toggleMenu }>
              <span className="navbar-toggler-icon"></span>
            </button>
            <Navbar.Collapse id="basic-navbar-nav" className={"collapse navbar-collapse " + show}>
              <Nav className="mr-auto">
                <NavDropdown title="Home" id="basic-nav-dropdown">

                  <HashLink role='button' className={`dropdown-item ${this.state.currentHash == 'info' ? "active" : "NotActive"}`} smooth to="/#info"  onClick={ this.toggleMenu } scroll={el => { const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset; const yOffset = -50; window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); }}>
                      Info
                  </HashLink>

                  <HashLink role='button' className={`dropdown-item ${this.state.currentHash == 'wallets' ? "active" : "NotActive"}`} smooth to="/#wallets"  onClick={ this.toggleMenu } scroll={el => { const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset; const yOffset = -50; window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); }}>
                      Wallets
                  </HashLink>

                  <HashLink role='button' className={`dropdown-item ${this.state.currentHash == 'product' ? "active" : "NotActive"}`} smooth to="/#product"  onClick={ this.toggleMenu } scroll={el => { const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset; const yOffset = -50; window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); }}>
                      Product
                  </HashLink>

                  <HashLink role='button' className={`dropdown-item ${this.state.currentHash == 'exchanges' ? "active" : "NotActive"}`} smooth to="/#exchanges"  onClick={ this.toggleMenu } scroll={el => { const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset; const yOffset = -50; window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); }}>
                      Exchanges
                  </HashLink>

                  <HashLink role='button' className={`dropdown-item ${this.state.currentHash == 'pools' ? "active" : "NotActive"}`} smooth to="/#pools"  onClick={ this.toggleMenu } scroll={el => { const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset; const yOffset = -50; window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); }}>
                      Pools
                  </HashLink>

                  <HashLink role='button' className={`dropdown-item ${this.state.currentHash == 'community' ? "active" : "NotActive"}`} smooth to="/#community"  onClick={ this.toggleMenu } scroll={el => { const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset; const yOffset = -50; window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); }}>
                      Community
                  </HashLink>

                  <HashLink role='button' className={`dropdown-item ${this.state.currentHash == 'team' ? "active" : "NotActive"}`} smooth to="/#team"  onClick={ this.toggleMenu } scroll={el => { const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset; const yOffset = -50; window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); }}>
                      Team
                  </HashLink>

                  <HashLink role='button' className={`dropdown-item ${this.state.currentHash == 'roadmap' ? "active" : "NotActive"}`} smooth to="/#roadmap"  onClick={ this.toggleMenu } scroll={el => { const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset; const yOffset = -50; window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); }}>
                      Roadmap
                  </HashLink>

                  <HashLink role='button' className={`dropdown-item ${this.state.currentHash == 'contact' ? "active" : "NotActive"}`} smooth to="/#contact"  onClick={ this.toggleMenu } scroll={el => { const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset; const yOffset = -50; window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); }}>
                      Contact
                  </HashLink>
                </NavDropdown>
                <NavDropdown title="Services" id="basic-nav-dropdown">
                  <NavDropdown.Item onClick={ this.toggleMenu } href="#action/3.1">
                    Explorer
                  </NavDropdown.Item>
                  <NavDropdown.Item onClick={ this.toggleMenu } href="#action/3.2">
                    Faucet
                  </NavDropdown.Item>
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