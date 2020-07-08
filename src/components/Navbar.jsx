import React from 'react'

import { EyeIcon } from '../styles/icon'
import NavToggle from '../img/NavToggle.svg'
import Logo from '../img/Logo.svg'
import {
  Button,
  Container,
  Header,
  Img,
  Row,
  StyledLink,
} from '../styles/content'

const Navbar = () => (
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
        <img src={NavToggle} alt='nav-toggle-button' />
      </Row>
    </Container>
  </Header>
)
export default Navbar
