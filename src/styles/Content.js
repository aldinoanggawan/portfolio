import styled, { css } from 'styled-components'

const mobileFontS = '1.2rem'
const mobileFontM = '1.75rem'
const mobileFontL = '2.3rem'
const mobileFontXL = '2.5rem'

const textFont = 'Montserrat, sans-serif'
const titleFont = 'Eurostile'

export const H1 = styled.h1`
  text-transform: uppercase;
  letter-spacing: 5px;
  font-family: ${titleFont};
  font-size: ${mobileFontXL};
  color: ${({ dark }) => (dark ? '#222831' : '#eeeeee')};
  margin: 1em 0;
`

export const H2 = styled.h2`
  font-family: ${titleFont};
  font-size: ${mobileFontL};
  color: #eeeeee;
  margin: 1.4em 0 0.6em;
`

export const H3 = styled.h3`
  font-family: ${titleFont};
  font-size: ${mobileFontM};
  color: #222831;
  margin: 0.5em 0 1.75em;
`

export const H4 = styled.h4`
  font-family: ${textFont};
  font-size: ${mobileFontS};
  font-weight: 600;
  color: #2bced6;
  margin: 1.9em 0 0.5em;
`

export const P = styled.p`
  font-family: ${textFont};
  font-size: ${mobileFontS};
  color: ${({ dark }) => (dark ? '#222831' : '#eeeeee')};
  margin: 0;
`

export const Img = styled.img`
  max-width: 100%;

  ${({ avatar }) =>
    avatar &&
    css`
      width: 40%;
      max-width: 200px;
      margin: 3.7em 0;
    `}

  ${({ computer }) =>
    computer &&
    css`
      width: 100%;
      max-width: 700px;
    `}
`

export const Button = styled.a`
  cursor: pointer;
  font-family: 'Eurostile';
  font-size: 1rem;
  font-weight: bold;
  text-decoration: none;
  color: #eeeeee;
  background-color: #00adb5;
  border-radius: 50px;
  margin-right: 1.5em;
  padding: 0.45em 0.85em;

  display: flex;
  align-items: center;
`

export const Card = styled.div`
  border: 2px solid #d4e3e3;
  border-radius: 15px;

  ${({ item }) =>
    item &&
    css`
      border: none;
      border-radius: 0;
      padding: 2.5em 0 2.75em;

      & + & {
        border-top: 1px solid #d4e3e3;
      }
    `}
`

export const Container = styled.div`
  width: ${({ computer }) => (computer ? '100%' : '90%')};
  max-width: 1100px;
  margin: 0 auto;
  text-align: ${({ center }) => (center ? 'center' : 'left')};

  ${({ card }) =>
    card &&
    css`
      width: 90%;
    `}

  ${({ row }) =>
    row &&
    css`
      display: flex;
      justify-content: space-between;
      align-items: center;
    `}
`

export const Header = styled.header`
  width: 100%;
  background-color: #393e46;
  padding: 1.5em 0;

  position: fixed;
  top: 0;
  z-index: 100;
`

export const Icon = styled.img`
  margin-right: 0.2em;
`

export const LogoImg = styled.img`
  ${({ fade }) =>
    fade &&
    css`
      opacity: 0.6;
    `}
`

export const Row = styled.div`
  display: flex;
  align-items: center;
`

export const Section = styled.section`
  background-color: ${({ dark }) => (dark ? '#393E46' : '#eeeeee')};
  min-height: 80vh;
  padding: ${({ home }) => (home ? '6em 0 0' : '0.1em 0 3em')};
`

export const StyledLink = styled.a`
  cursor: pointer;
`
