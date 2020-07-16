import React from 'react'

import { H1, H3, P, Container, ScrollAnchor, Section } from '../styles/contentStyle'

const Education = () => (
  <Section>
    <ScrollAnchor id='education' />
    <Container center>
      <H1 dark>Education</H1>
      <Container education>
        <H3 education>Next Academy</H3>
        <P education left dark>
          Full-Stack Web Development
        </P>
        <P educationXs left dark>
          2019 - 2020
        </P>
      </Container>
      <Container education>
        <H3 education>Taylor&apos;s University</H3>
        <P education left dark>
          Mechanical Engineering (Degree)
        </P>
        <P educationXs left dark>
          2015 - 2019
        </P>
      </Container>
    </Container>
  </Section>
)

export default Education
