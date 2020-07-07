import React from 'react'

import Eye from '../img/Eye.svg'
import NavToggle from '../img/NavToggle.svg'
import Logo from '../img/Logo.svg'
import {
  Button,
  Container,
  Header,
  Icon,
  LogoImg,
  Row,
  StyledLink,
} from '../styles/content'

const Navbar = () => (
  <Header>
    <Container row>
      <StyledLink href='/'>
        <LogoImg src={Logo} alt='navbar-logo' />
      </StyledLink>
      <Row>
        <Button href='/'>
          <Icon className='icon' src={Eye} alt='eye icon' />
          Portfolio
        </Button>
        <img src={NavToggle} alt='nav-toggle-button' />
      </Row>
    </Container>
  </Header>
)
export default Navbar
