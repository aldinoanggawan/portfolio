import React from 'react'

import BackEndIcon from '../img/BackEndIcon.svg'
import FrontEndIcon from '../img/FrontEndIcon.svg'
import OtherIcon from '../img/OtherIcon.svg'
import { H1, H3, H4, Img, P, Container, Section, Card } from '../styles/content'

const Skills = () => (
  <Section>
    <Container center>
      <H1 dark>Skills</H1>
      <Container card center>
        <Card>
          <Card item>
            <Img src={FrontEndIcon} alt='front end icon' />
            <H3>Front-End</H3>
            <H4>Language</H4>
            <P dark>HTML5, CSS3, JavaScript</P>
            <H4>Library</H4>
            <P dark>React, Redux</P>
            <H4>React UI</H4>
            <P dark>Reactstrap, Material UI</P>
          </Card>
          <Card item>
            <Img src={BackEndIcon} alt='back end icon' />
            <H3>Back-End</H3>
            <H4>Language</H4>
            <P dark>Python</P>
            <H4>Framework</H4>
            <P dark>Flask</P>
            <H4>Database</H4>
            <P dark>PostgresQL</P>
          </Card>
          <Card item>
            <Img src={OtherIcon} alt='other icon' />
            <H3>Other</H3>
            <H4>UI / UX</H4>
            <P dark>Figma</P>
            <H4>Version Control</H4>
            <P dark>Git</P>
            <H4>Cloud Platform</H4>
            <P dark>Netlify, Heroku, AWS S3</P>
            <H4>IoT</H4>
            <P dark>Raspberry Pi, Arduino</P>
          </Card>
        </Card>
      </Container>
    </Container>
  </Section>
)

export default Skills
