/* eslint-disable react/prefer-stateless-function,react/prop-types */
import React from 'react';
import { withRouter } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import Img from './Img';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../../node_modules/jquery/dist/jquery.min';

import LocaleToggle from '../../containers/LocaleToggle';
import './index.css';
import navs from './navItems.json';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  render() {
    return (
      <div>
        <Navbar className="my-navbar" light expand="md">
          <NavbarBrand href="/">
            <Img src="/logo.svg" alt="SITE - Logo" />
          </NavbarBrand>
          <span className="menu-text" style={{ margin: '0 2vw 0 0em' }}>
            +7 (999) 777-77-77
          </span>
          <span className="menu-text">info@its.society</span>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav navbar className="ml-auto">
              {navs.map(el => (
                <NavItem key={el.linkName}>
                  <NavLink className="menu-text" href={el.link}>
                    {el.linkName}
                  </NavLink>
                </NavItem>
              ))}
            </Nav>
          </Collapse>
          <LocaleToggle />
        </Navbar>
      </div>
    );
  }
}

export default withRouter(Header);
