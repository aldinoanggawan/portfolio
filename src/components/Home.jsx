import React from 'react'

import Avatar from '../img/Avatar.svg'
import Computer from '../img/Computer.svg'
import { H2, Img, P, Container, Section } from '../styles/contentStyle'

const Home = () => (
  <Section home dark id='home'>
    <Container center>
      <H2>Full-Stack Developer</H2>
      <P home>
        Hi I’m Angga, a full-stack developer who’s comfortable with building web-apps using React
        and I love what I do.
      </P>
      <Img avatar src={Avatar} alt='avatar' />
    </Container>
    <Container computer center>
      <Img computer src={Computer} alt='computer illustration' />
    </Container>
  </Section>
)

export default Home
