import PropTypes from 'prop-types'
import React from 'react'

import Logo from '../img/Logo.svg'
import NavToggle from '../img/NavToggle.svg'
import {
  Container,
  Header,
  Img,
  Nav,
  NavItem,
  Row,
  SidebarButton,
  StyledHashLink,
  StyledNavHashLink,
} from '../styles/contentStyle'
import { EyeIcon } from '../styles/icon'

const Navbar = ({ handleOnClick }) => (
  <Header>
    <Container row>
      <StyledHashLink smooth to='/#home'>
        <Img src={Logo} alt='navbar-logo' />
      </StyledHashLink>
      <Row navbar>
        <Nav>
          <NavItem>
            <StyledNavHashLink bigscreen='true' smooth to='/#home' activeClassName='active'>
              Home
            </StyledNavHashLink>
          </NavItem>
          <NavItem>
            <StyledNavHashLink bigscreen='true' smooth to='/#skills' activeClassName='active'>
              Skills
            </StyledNavHashLink>
          </NavItem>
          <NavItem>
            <StyledNavHashLink bigscreen='true' smooth to='/#education' activeClassName='active'>
              Education
            </StyledNavHashLink>
          </NavItem>
          <NavItem>
            <StyledNavHashLink bigscreen='true' smooth to='/#awards' activeClassName='active'>
              Awards
            </StyledNavHashLink>
          </NavItem>
          <NavItem>
            <StyledNavHashLink bigscreen='true' smooth to='/#contact' activeClassName='active'>
              Contact Me
            </StyledNavHashLink>
          </NavItem>
        </Nav>
        <StyledHashLink button='true' smooth to='/#portfolio'>
          <EyeIcon />
          Portfolio
        </StyledHashLink>
        <SidebarButton
          type='button'
          onClick={() => {
            handleOnClick()
          }}
        >
          <Img src={NavToggle} alt='nav-toggle-button' />
        </SidebarButton>
      </Row>
    </Container>
  </Header>
)

Navbar.propTypes = {
  handleOnClick: PropTypes.func.isRequired,
}

export default Navbar
