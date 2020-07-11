import React from 'react'

import CardPortfolio from './CardPortfolio'
import { skills } from '../data/data'
import { H1, Container, Section } from '../styles/content'

const Portfolio = () => {
  const skillsArray = Object.values(skills)
  return (
    <Section dark>
      <Container center>
        <H1>Portfolio</H1>
        {skillsArray.map(skill => (
          <CardPortfolio key={skill.id} skill={skill} />
        ))}
      </Container>
    </Section>
  )
}
export default Portfolio
