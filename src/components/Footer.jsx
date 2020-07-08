import React from 'react'

import Logo from '../img/Logo.svg'
import {
  A,
  P,
  Button,
  Container,
  Img,
  Row,
  StyledFooter,
  StyledLink,
} from '../styles/content'
import { GithubIcon, LinkedInIcon, MailIcon } from '../styles/icon'

const Footer = () => (
  <StyledFooter>
    <Container center>
      <StyledLink footerImg href='/'>
        <Img fade footer src={Logo} alt='logo' />
      </StyledLink>
      <P footer>Check out my resume !</P>
      <Button rectangle href='/'>
        resume
      </Button>
    </Container>
    <Container center footerItem>
      <Row footer>
        <A icon href='/'>
          <GithubIcon />
        </A>
        <A icon href='/'>
          <LinkedInIcon />
        </A>
        <A icon href='/'>
          <MailIcon />
        </A>
      </Row>
      <P footer>© 2020 Aldino Anggawan. All rights reserved.</P>
    </Container>
  </StyledFooter>
)

export default Footer
