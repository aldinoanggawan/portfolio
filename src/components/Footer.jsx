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
import { DownloadIcon, GithubIcon, LinkedInIcon, MailIcon } from '../styles/icon'

const Footer = () => (
  <StyledFooter>
    <Container center>
      <StyledHashLink footerlogo='true' smooth to='/#home'>
        <Img fade footer src={Logo} alt='logo' />
      </StyledHashLink>
      <P footer>Check out my resume !</P>
      <Row button>
        <Button
          row
          rectangle
          href='https://aldinoanggawan.s3.amazonaws.com/Resume+Aldino+Dwi+Anggawan.pdf'
          target='_blank'
        >
          <DownloadIcon />
          resume
        </Button>
      </Row>
    </Container>
    <Container center footerItem>
      <Row footer>
        <A icon href='https://github.com/aldinoanggawan' target='_blank'>
          <GithubIcon />
        </A>
        <A icon href='https://www.linkedin.com/in/aldinoanggawan/' target='_blank'>
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
