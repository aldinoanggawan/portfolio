import styled, { css } from 'styled-components'

const mobileFontM = '2rem'

export const H2 = styled.h2`
  font-family: 'Eurostile';
  font-size: ${mobileFontM};
  color: #eeeeee;
  margin: 1.5625em 0 0.78125em;
`

export const P = styled.p`
  font-size: 1.2rem;
  color: ${({ dark }) => (dark ? '#222831' : '#eeeeee')};
  margin: 0;
`

export const Img = styled.img`
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

export const Container = styled.div`
  width: ${({ computer }) => (computer ? '100%' : '90%')};
  max-width: 1100px;
  margin: 0 auto;
  text-align: ${({ center }) => (center ? 'center' : 'left')};

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
  padding: 0.1em 0 0;
`

export const StyledLink = styled.a`
  cursor: pointer;
`
