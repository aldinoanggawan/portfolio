import PropTypes from 'prop-types'
import React from 'react'

import Logo from '../img/Logo.svg'
import NavToggle from '../img/NavToggle.svg'
import { Button, Container, Header, Img, Row, StyledLink } from '../styles/content'
import { EyeIcon } from '../styles/icon'

const Navbar = ({ handleOnClick }) => (
  <Header>
    <Container row>
      <StyledLink href='/'>
        <Img src={Logo} alt='navbar-logo' />
      </StyledLink>
      <Row>
        <Button row href='/'>
          <EyeIcon />
          Portfolio
        </Button>
        <div onClick={handleOnClick}>
          <img src={NavToggle} alt='nav-toggle-button' />
        </div>
      </Row>
    </Container>
  </Header>
)

Navbar.propTypes = {
  handleOnClick: PropTypes.func.isRequired,
}

export default Navbar
