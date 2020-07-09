import React from 'react'

import InstagramClone from '../img/InstagramClone.png'
import { H1, H3, P, A, Button, Card, Container, Img, Row, Section, Span } from '../styles/content'
import { EyeIcon, GithubIcon, SandboxIcon } from '../styles/icon'

const Portfolio = () => (
  <Section dark>
    <Container center>
      <H1>Portfolio</H1>
      <Card portfolio>
        <Img src={InstagramClone} alt='ig clone thumbnail' />
        <Card itemPortfolio>
          <H3 left portfolio>
            <A>Instagram Clone</A>
          </H3>
          <Row portfolioTag>
            <Card tag>
              <Span>React</Span>
            </Card>
            <Card tag>
              <Span>Redux</Span>
            </Card>
          </Row>
          <P left portfolio>
            A web-app that allows user to post photos, comments and likes with their account, just
            like Instagram.
          </P>
          <Row portfolioButton>
            <Button
              row
              portfolio
              href='https://github.com/aldinoanggawan/nextagram-2'
              target='_blank'
            >
              <GithubIcon button />
              Github
            </Button>
            <Button
              row
              portfolio
              href='https://codesandbox.io/s/github/aldinoanggawan/nextagram-2/tree/master'
              target='_blank'
            >
              <SandboxIcon />
              Sandbox
            </Button>
            <Button row portfolio href='https://fakeig.netlify.app/' target='_blank'>
              <EyeIcon portfolio />
              Live
            </Button>
          </Row>
        </Card>
      </Card>
    </Container>
  </Section>
)

export default Portfolio
