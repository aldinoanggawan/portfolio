import React from 'react'

import { H1, H3, H4, P, Container, Section, Card } from '../styles/content'
import { BackEndIcon, FrontEndIcon, OtherIcon } from '../styles/icon'

const Skills = () => (
  <Section>
    <Container center>
      <H1 dark>Skills</H1>
      <Container card center>
        <Card skills>
          <Card itemSkills>
            <FrontEndIcon />
            <H3 dark>Front-End</H3>
            <H4>Language</H4>
            <P dark skills>
              HTML5, CSS3, JavaScript
            </P>
            <H4>Library</H4>
            <P dark skills>
              React, Redux
            </P>
            <H4>React UI</H4>
            <P dark skills>
              Reactstrap, Material UI
            </P>
          </Card>
          <Card itemSkills>
            <BackEndIcon />
            <H3 dark>Back-End</H3>
            <H4>Language</H4>
            <P dark skills>
              Python
            </P>
            <H4>Framework</H4>
            <P dark skills>
              Flask
            </P>
            <H4>Database</H4>
            <P dark skills>
              PostgresQL
            </P>
          </Card>
          <Card itemSkills>
            <OtherIcon />
            <H3 dark>Other</H3>
            <H4>UI / UX</H4>
            <P dark skills>
              Figma
            </P>
            <H4>Version Control</H4>
            <P dark skills>
              Git
            </P>
            <H4>Cloud Platform</H4>
            <P dark skills>
              Netlify, Heroku, AWS S3
            </P>
            <H4>IoT</H4>
            <P dark skills>
              Raspberry Pi, Arduino
            </P>
          </Card>
        </Card>
      </Container>
    </Container>
  </Section>
)

export default Skills
