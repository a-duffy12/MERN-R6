import React, { Component } from "react";
import {
  // bootstrap imports
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container
} from "reactstrap";

// class declaation
class AppNavbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false // nav bar is closed by default
    };
  }

  // toggling function from open to close for the nav bar
  toggle = () => {
    this.setState({
      // checks current state
      isOpen: !this.state.isOpen // sets it to the opposite state
    });
  };

  // html appearance of the nav bar
  render() {
    return (
      <div>
        <Navbar color="dark" dark expand="sm" className="mb-5">
          <Container>
            <NavbarBrand href="/">Rainbow 6 Team Builder</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink href="https://rainbow6.ubisoft.com/siege/en-ca/game-info/operators.aspx">
                    Attack
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="https://rainbow6.ubisoft.com/siege/en-ca/game-info/operators.aspx">
                    Defense
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="https://github.com/a-duffy12">Github</NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}

export default AppNavbar;
