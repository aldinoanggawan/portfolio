import PropTypes from 'prop-types'
import React from 'react'

import Logo from '../img/Logo.svg'
import NavToggle from '../img/NavToggle.svg'
import { Container, Header, Img, Row, SidebarButton, StyledHashLink } from '../styles/contentStyle'
import { EyeIcon } from '../styles/icon'

const Navbar = ({ handleOnClick }) => (
  <Header>
    <Container row>
      <StyledHashLink smooth to='/#home'>
        <Img src={Logo} alt='navbar-logo' />
      </StyledHashLink>
      <Row>
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
