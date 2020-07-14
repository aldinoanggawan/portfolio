import React from 'react'

import { H1, H3, P, Container, ScrollAnchor, Section } from '../styles/contentStyle'

const Awards = () => (
  <Section dark>
    <ScrollAnchor id='awards' />
    <Container center>
      <H1>Awards</H1>
      <Container awards>
        <H3 awards>Next Academy Final Project</H3>
        <P awards left>
          First Runner-Up
        </P>
        <P awardsXs left>
          Developed EzParking web-app
        </P>
      </Container>
      <Container awards>
        <H3 awards>Taylor&apos;s University Engineering Fair</H3>
        <P awards left>
          First Runner-Up
        </P>
        <P awardsXs left>
          Developed e-Payment prototype
        </P>
      </Container>
    </Container>
  </Section>
)

export default Awards
