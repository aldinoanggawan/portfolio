import PropTypes from 'prop-types'
import React from 'react'

import { H3, P, Button, Card, Container, Img, Row, Tag, TagItem } from '../styles/contentStyle'
import { EyeIcon, GithubIcon, PlayIcon, SandboxIcon } from '../styles/icon'

const CardPortfolio = ({ skill }) => {
  const { id, image, link, tag, text, title } = skill
  return (
    <Card portfolio>
      <Container img>
        <Img portfolio src={image} alt={id} />
      </Container>
      <Card itemPortfolio>
        <H3 left portfolio>
          {title}
        </H3>
        <Tag>
          {tag.map(t => (
            <TagItem key={t.id}>{t.text}</TagItem>
          ))}
        </Tag>
        <P left portfolio>
          {text}
        </P>
        <Row portfolioButton>
          <Button row portfolio href={link.github} target='_blank'>
            <GithubIcon button />
            Github
          </Button>
          <Button row portfolio href={link.sandbox} target='_blank'>
            <SandboxIcon />
            Sandbox
          </Button>
          <Button row portfolio href={link.live} target='_blank'>
            <EyeIcon portfolio />
            Live
          </Button>
          {link.video && (
            <Button row portfolio href={link.video} target='_blank'>
              <PlayIcon />
              Video
            </Button>
          )}
        </Row>
      </Card>
    </Card>
  )
}

CardPortfolio.propTypes = {
  skill: PropTypes.shape({
    id: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    link: PropTypes.shape({
      github: PropTypes.string.isRequired,
      sandbox: PropTypes.string.isRequired,
      live: PropTypes.string.isRequired,
      video: PropTypes.string.isRequired,
    }).isRequired,
    tag: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        text: PropTypes.string.isRequired,
      })
    ).isRequired,
    text: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
}

export default CardPortfolio
