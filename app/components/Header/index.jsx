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
import LocaleToggle from '../../containers/LocaleToggle';

import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.css';

import navs from './navItems.json';

const HeaderSpan =({text}) => (
  <span className="header__text header__margin">
    {text}
  </span>
);

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <Navbar light expand="md">
          <NavbarBrand href="/">
            <Img src="/logo.svg" alt="SITE - Logo" />
          </NavbarBrand>
          <HeaderSpan text={'+7 (999) 777-77-77'}/>
          <HeaderSpan text={'info@its.society'}/>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav navbar className="ml-auto">
              {navs.map(el => (
                <NavItem key={el.linkName}>
                  <NavLink className="header__text header__margin" href={el.link}>
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
}

export default withRouter(Header);
