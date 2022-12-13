import React from 'react';
import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import { NavLink } from 'react-router-dom';
import { Roles } from 'meteor/alanning:roles';
import { Container, Nav, Navbar, NavDropdown, Image } from 'react-bootstrap';

const NavBar = () => {
  // useTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
  const { currentUser } = useTracker(() => ({
    currentUser: Meteor.user() ? Meteor.user().username : '',
  }), []);

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand as={NavLink} to="/">
          <Image src="images/manoa_eateries_green.png" width="100px" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Nav.Link id="list-vendors-nav" as={NavLink} to="/listVendors" key="list-vendors"> View All Vendors</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
          <Nav className="me-auto justify-content-start">
            {currentUser ? (
              <Nav.Link id="user-home-nav" as={NavLink} to="/userHome" key="user-home">
                I`m Hungry!
              </Nav.Link>
            ) : ''}
            {Roles.userIsInRole(Meteor.userId(), 'admin') ? (
              ''
            ) : ''}
            {Roles.userIsInRole(Meteor.userId(), 'vendor') ? (
              ''
            ) : ''}
          </Nav>
        </Navbar.Collapse>
        <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
          <Nav>
            {currentUser === '' ? (
              <NavDropdown id="login-dropdown" title="Login">
                <NavDropdown.Item id="login-dropdown-sign-in" as={NavLink} to="/signin">
                  Sign
                  in
                </NavDropdown.Item>
                <NavDropdown.Item id="login-dropdown-sign-up" as={NavLink} to="/signup">
                  Sign
                  up
                </NavDropdown.Item>
              </NavDropdown>
            ) : (
              <NavDropdown id="account" title="Account">
                {currentUser ? ([
                ]) : ''}
                {Roles.userIsInRole(Meteor.userId(), '') ? (
                  <NavDropdown.Item id="profile" as={NavLink} to="/listUser">
                    Profile
                  </NavDropdown.Item>
                ) : (''
                )}
                {Roles.userIsInRole(Meteor.userId(), 'vendor') ? (
                  <NavDropdown.Item id="profile" as={NavLink} to="/vendorprofiles">
                    Vendor Profile
                  </NavDropdown.Item>
                ) : (
                  <NavDropdown.Item id="profile" as={NavLink} to="/listUser">
                    User Profile
                  </NavDropdown.Item>
                )}
                <NavDropdown.Item id="signout" as={NavLink} to="/signout">
                  Sign
                  out
                </NavDropdown.Item>
              </NavDropdown>

            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
