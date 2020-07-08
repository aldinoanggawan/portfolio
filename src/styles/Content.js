import styled, { css } from 'styled-components'

const mobileFontXS = '0.875rem'
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
  margin: 1.3em 0 1.3em;
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

  ${({ footer }) =>
    footer &&
    css`
      font-size: ${mobileFontXS};
      color: #8392a7;
    `}
`

export const A = styled.a`
  cursor: pointer;

  ${({ icon }) =>
    icon &&
    css`
      width: 50px;
      height: 50px;
      color: #2bced6;
      border-radius: 50%;
      border: 2px solid #47505e;

      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      & + & {
        margin-left: 1em;
      }

      &:focus,
      &:hover {
        color: #222831;
        border: 2px solid #2bced6;
        background: #2bced6;
      }
    `}
`

export const Button = styled.a`
  cursor: pointer;
  font-family: ${titleFont};
  font-size: 1rem;
  font-weight: bold;
  text-decoration: none;
  color: #eeeeee;
  background-color: #00adb5;
  border-radius: 50px;
  margin-right: 1.5em;
  padding: 0.45em 0.85em;

  &:focus,
  &:hover {
    color: #00adb5;
    background-color: #eeeeee;
  }

  ${({ row }) =>
    row &&
    css`
      display: flex;
      align-items: center;
    `}

  ${({ rectangle }) =>
    rectangle &&
    css`
      display: inline-block;
      text-transform: uppercase;
      letter-spacing: 3px;
      font-family: ${textFont};
      font-weight: 300;
      background: none;
      border-radius: 0;
      border: 1px solid #eeeeee;
      margin: 1.2em 0 2em;
      padding: 0.45em 1em;

      &:focus,
      &:hover {
        color: #222831;
        background: #eeeeee;
      }
    `}
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

  ${({ footerItem }) =>
    footerItem &&
    css`
      width: 100%;
      border-top: 1px solid #47505d;
    `}

  ${({ row }) =>
    row &&
    css`
      display: flex;
      justify-content: space-between;
      align-items: center;
    `}
`

export const Form = styled.form`
  text-align: left;
`

export const Header = styled.header`
  width: 100%;
  background-color: #393e46;
  padding: 1em 0;

  position: fixed;
  top: 0;
  z-index: 100;
`

export const Img = styled.img`
  max-width: 100%;
  /* opacity: ${({ fade }) => (fade ? '0.6' : '1')}; */

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

export const Input = styled.input`
  display: block;
  font-family: ${textFont};
  font-size: ${mobileFontS};
  background: #e5e5e5;
  border: none;
  border-radius: 3px;
  width: 100%;
  margin: 0.5em 0 0;
  padding: 0.75em 1em;

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(43, 206, 214, 1);
  }

  ${({ submit }) =>
    submit &&
    css`
      cursor: pointer;
      text-transform: uppercase;
      letter-spacing: 2px;
      font-family: ${titleFont};
      font-size: ${mobileFontM};
      font-weight: bold;
      background: none;
      color: #2bced6;
      border: 2px solid #2bced6;
      border-radius: 50px;
      margin: 1.5em 0 0;
      padding: 0.5em 0;

      &:hover,
      &:focus {
        color: #eeeeee;
        background: #2bced6;
        outline: none;
      }
    `}
`

export const Label = styled.label`
  font-family: ${titleFont};
  font-size: ${mobileFontM};
  font-weight: bold;
  color: #2bced6;
  display: block;

  & + & {
    margin-top: 1.5em;
  }
`

export const Row = styled.div`
  display: flex;
  align-items: center;

  ${({ footer }) =>
    footer &&
    css`
      justify-content: center;
      margin: 2em 0;
    `}
`

export const Section = styled.section`
  background-color: ${({ dark }) => (dark ? '#393E46' : '#eeeeee')};
  min-height: 80vh;
  padding: ${({ home }) => (home ? '6em 0 0' : '0.1em 0 3em')};
`

export const StyledFooter = styled.footer`
  background: #222831;
  padding: 0.1em 0 1em;
`

export const StyledLink = styled.a`
  cursor: pointer;

  &:focus,
  &:hover {
    opacity: 0.7;
  }

  ${({ footerImg }) =>
    footerImg &&
    css`
      display: inline-block;
      opacity: 0.6;
      margin: 2.3em 0;

      &:focus,
      &:hover {
        opacity: 1;
      }
    `}
`

export const Textarea = styled.textarea`
  display: block;
  min-width: 100%;
  max-width: 100%;
  min-height: 200px;
  font-family: ${textFont};
  font-size: ${mobileFontS};
  background: #e5e5e5;
  border: none;
  border-radius: 3px;
  width: 100%;
  margin: 0.5em 0 0;
  padding: 1em 1em;

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(43, 206, 214, 1);
  }
`
