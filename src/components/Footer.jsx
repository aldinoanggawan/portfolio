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
  StyledHashLink,
} from '../styles/contentStyle'
import { GithubIcon, LinkedInIcon, MailIcon } from '../styles/icon'

const Footer = () => (
  <StyledFooter>
    <Container center>
      <StyledHashLink footerlogo='true' smooth to='/#home'>
        <Img fade footer src={Logo} alt='logo' />
      </StyledHashLink>
      <P footer>Check out my resume !</P>
      <Button rectangle href='/'>
        resume
      </Button>
    </Container>
    <Container center footerItem>
      <Row footer>
        <A icon href='https://github.com/aldinoanggawan' target='_blank'>
          <GithubIcon />
        </A>
        <A icon href='https://linkedin.com/in/aldino-anggawan-73aa39123' target='_blank'>
          <LinkedInIcon />
        </A>
        <A icon href='mailto:aldinoanggawan@gmail.com'>
          <MailIcon />
        </A>
      </Row>
      <P footerXs>© 2020 Aldino Anggawan. All rights reserved.</P>
    </Container>
  </StyledFooter>
)

export default Footer
