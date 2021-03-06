import styled, { css } from 'styled-components'
import { HashLink, NavHashLink } from 'react-router-hash-link'
import { ToastContainer } from 'react-toastify'

// screen sizes
export const screenSize = {
  tablet: '768px',
  laptop: '1024px',
}

// font sizes and style
export const fontSize = {
  awards: {
    mobileTitle: '1.8rem',
    mobileText: '1.2rem',
    mobileText2: '1rem',
  },
  contact: {
    mobileTitle: '1.5rem',
    mobileTitle2: '1.75rem',
    mobileText: '1.1rem',
  },
  education: {
    mobileTitle: '1.8rem',
    mobileText: '1.2rem',
    mobileText2: '1rem',
  },
  footer: {
    mobileText: '1rem',
    mobileText2: '0.75rem',
  },
  home: {
    mobileTitle: '2.3rem',
    mobileText: '1.2rem',
  },
  navbar: {
    mobileTitle: '1.2rem',
  },
  portfolio: {
    mobileTitle: '1.7rem',
    mobileText: '1.1rem',
    mobileText2: '1rem',
  },
  section: {
    mobileTitle: '2.5rem',
  },
  sidebar: {
    mobileTitle: '1.8rem',
  },
  skills: {
    mobileTitle: '2rem',
    mobileTitle2: '1.25rem',
    mobileText: '1.1875rem',
  },
}
const textFont = 'Montserrat, sans-serif'
const titleFont = 'Lato, sans-serif'

// typography (alphabetical order)
export const H1 = styled.h1`
  text-transform: uppercase;
  letter-spacing: 5px;
  font-family: ${titleFont};
  font-size: ${fontSize.section.mobileTitle};
  line-height: 1;
  color: ${({ dark }) => (dark ? '#222831' : '#eeeeee')};
  margin: 0 0 1.3em;
`

export const H2 = styled.h2`
  font-family: ${titleFont};
  font-size: ${fontSize.home.mobileTitle};
  line-height: 1;
  color: ${({ dark }) => (dark ? '#222831' : '#eeeeee')};
  margin: 1.4em 0 0.6em;
`

export const H3 = styled.h3`
  font-family: ${titleFont};
  font-size: ${fontSize.skills.mobileTitle};
  line-height: 1;
  color: ${({ dark }) => (dark ? '#222831' : '#2BCED6')};
  margin: 0.5em 0 0;

  ${({ awards }) =>
    awards &&
    css`
      font-size: ${fontSize.awards.mobileTitle};
      margin: 0 0 0.3em;
    `}

  ${({ education }) =>
    education &&
    css`
      font-size: ${fontSize.education.mobileTitle};
      margin: 0 0 0.3em;
    `}

  ${({ portfolio }) =>
    portfolio &&
    css`
      text-align: left;
      font-size: ${fontSize.portfolio.mobileTitle};
      margin: 0.5em 0;

      @media (min-width: ${screenSize.laptop}) {
        margin: 0 0 0.5em;
      }
    `}
`

export const H4 = styled.h4`
  font-family: ${textFont};
  font-size: ${fontSize.skills.mobileTitle2};
  font-weight: 600;
  color: #2bced6;
  margin: 1.9em 0 0.5em;
`

export const P = styled.p`
  font-family: ${textFont};
  text-align: ${({ left }) => (left ? 'left' : 'center')};
  color: ${({ dark }) => (dark ? '#222831' : '#eeeeee')};
  margin: 0;

  ${({ awards }) =>
    awards &&
    css`
      font-size: ${fontSize.awards.mobileText};
      font-weight: 500;
    `}

  ${({ awardsXs }) =>
    awardsXs &&
    css`
      margin-top: 0.1em;
      font-size: ${fontSize.awards.mobileText2};
    `}

  ${({ education }) =>
    education &&
    css`
      font-size: ${fontSize.education.mobileText};
      font-weight: 500;
    `}

  ${({ educationXs }) =>
    educationXs &&
    css`
      margin-top: 0.1em;
      font-size: ${fontSize.education.mobileText2};
    `}
  
  ${({ footer }) =>
    footer &&
    css`
      font-size: ${fontSize.footer.mobileText};
      color: #8392a7;
    `}

  ${({ footerXs }) =>
    footerXs &&
    css`
      font-size: ${fontSize.footer.mobileText2};
      color: #8392a7;
    `}

  ${({ home }) =>
    home &&
    css`
      font-size: ${fontSize.home.mobileText};
    `}

  ${({ skills }) =>
    skills &&
    css`
      font-size: ${fontSize.skills.mobileText};
    `}

  ${({ portfolio }) =>
    portfolio &&
    css`
      line-height: 1.5;
      font-size: ${fontSize.portfolio.mobileText};

      @media (min-width: ${screenSize.laptop}) {
        margin: 0.5em 0 0.5em;
        margin-bottom: 0.5em;
      }
    `}
`

// styled components (alphabetical order)
export const A = styled.a`
  text-decoration: none;
  cursor: pointer;

  &:focus,
  &:hover {
    opacity: 0.6;
  }

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
  font-size: ${fontSize.navbar.mobileTitle};
  font-weight: bold;
  text-decoration: none;
  color: #eeeeee;
  background-color: #00adb5;
  border-radius: 50px;
  margin-right: 1em;
  padding: 0.35em 0.65em;

  &:focus,
  &:hover {
    color: #00adb5;
    background-color: #eeeeee;
  }
  
  ${({ portfolio }) =>
    portfolio &&
    css`
      font-size: ${fontSize.portfolio.mobileText};
      border-radius: 5px;
      margin: 0.5em 0 0;

      @media (min-width: ${screenSize.laptop}) {
        margin: 0;
      }

      & + & {
        margin-left: 0.5em;
      }
    `}

  ${({ row }) =>
    row &&
    css`
      display: flex;
      align-items: center;
    `}

  ${({ rectangle }) =>
    rectangle &&
    css`
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

  ${({ sidebar }) =>
    sidebar &&
    css`
      text-transform: uppercase;
      letter-spacing: 3px;
      font-family: ${titleFont};
      font-weight: normal;
      font-size: 1.6rem;
      background: none;
      border-radius: 0;
      border: 1px solid #eeeeee;
      margin: 0;
      padding: 0.45em 0;

      &:focus,
      &:hover {
        color: #222831;
        background: #eeeeee;
      }
    `}
`

export const Card = styled.div`
  ${({ itemPortfolio }) =>
    itemPortfolio &&
    css`
      padding: 0 0.75em 0.75em;

      @media (min-width: ${screenSize.laptop}) {
        flex: 1 1 0;
        padding: 1em 1em;

        display: flex;
        flex-direction: column;
      }
    `}

  ${({ portfolio }) =>
    portfolio &&
    css`
      background-color: #222831;
      -webkit-box-shadow: 5px 6px 5px 0px rgba(40, 46, 54, 1);
      -moz-box-shadow: 5px 6px 5px 0px rgba(40, 46, 54, 1);
      box-shadow: 5px 6px 5px 0px rgba(40, 46, 54, 1);

      & + & {
        margin-top: 3em;

        @media (min-width: ${screenSize.laptop}) {
          margin-top: 4em;
        }
      }

      @media (min-width: ${screenSize.laptop}) {
        display: flex;
        justify-content: space-between;
      }
    `}

  ${({ skills }) =>
    skills &&
    css`
      border: 2px solid #d4e3e3;
      border-radius: 15px;
      -webkit-box-shadow: 0px 3px 5px 2px rgba(213, 227, 226, 0.8);
      -moz-box-shadow: 0px 3px 5px 2px rgba(213, 227, 226, 0.8);
      box-shadow: 0px 3px 5px 2px rgba(213, 227, 226, 0.8);

      @media (min-width: ${screenSize.tablet}) {
        display: flex;
        justify-content: space-between;
      }
    `}

  ${({ skillsItem }) =>
    skillsItem &&
    css`
      border: none;
      border-radius: 0;
      padding: 2.5em 0.5em 2.75em;

      & + & {
        border-top: 1px solid #d4e3e3;
      }

      @media (min-width: ${screenSize.tablet}) {
        flex-basis: 33.3%;
        padding: 2.5em 1em;

        & + & {
          border-top: none;
          border-left: 2px solid #d4e3e3;
        }
      }

      @media (min-width: 800px) {
        padding: 2.5em 2em;
      }
    `}
`

export const Container = styled.div`
  width: ${({ computer }) => (computer ? '100%' : '90%')};
  max-width: 1100px;
  margin: 0 auto;
  text-align: ${({ center }) => (center ? 'center' : 'left')};

  ${({ awards }) =>
    awards &&
    css`
      border-bottom: 1px solid #eeeeee;
      padding: 0 0 1em;
      max-width: 900px;

      & + & {
        margin-top: 3em;
      }
    `}
  
  ${({ card }) =>
    card &&
    css`
      width: 90%;

      @media (min-width: ${screenSize.tablet}) {
        width: 100%;
      }
    `}

  ${({ education }) =>
    education &&
    css`
      border-bottom: 1px solid #222831;
      padding: 0 0 1em;
      max-width: 900px;

      & + & {
        margin-top: 3em;
      }
    `}

  ${({ footerItem }) =>
    footerItem &&
    css`
      width: 100%;
      border-top: 1px solid #47505d;
    `}

  ${({ homeText }) =>
    homeText &&
    css`
      max-width: 800px;
    `}

  ${({ img }) =>
    img &&
    css`
      width: 100%;

      @media (min-width: ${screenSize.laptop}) {
        flex-basis: 55%;
        align-self: center;
        margin: 0;
      }
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

export const FormError = styled.span`
  position: absolute;
  font-family: ${textFont};
  font-size: 0.8rem;
  font-weight: 300;
  color: red;
  margin-top: 0.3em;
`

export const Header = styled.header`
  width: 100%;
  background: rgba(34, 40, 49, 0.8);
  padding: 0.7em 0;

  position: fixed;
  top: 0;
  z-index: 100;

  @media (min-width: ${screenSize.laptop}) {
    background: rgba(34, 40, 49, 1);
    -webkit-box-shadow: 0px 1px 5px 0px rgba(40, 46, 54, 1);
    -moz-box-shadow: 0px 1px 5px 0px rgba(40, 46, 54, 1);
    box-shadow: 0px 1px 5px 0px rgba(40, 46, 54, 1);
  }
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

  ${({ portfolio }) =>
    portfolio &&
    css`
      vertical-align: top;
    `}
`

export const Input = styled.input`
  display: block;
  font-family: ${textFont};
  font-weight: 300;
  font-size: ${fontSize.contact.mobileText};
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
      font-size: ${fontSize.contact.mobileTitle2};
      font-weight: bold;
      background: none;
      color: #2bced6;
      border: 2px solid #2bced6;
      border-radius: 50px;
      margin: 1.5em 0 0;
      padding: 0.5em 0;

      &:disabled {
        cursor: auto;
        opacity: 0.3;

        &:focus,
        &:hover {
          color: #2bced6;
          background: none;
        }
      }

      &:hover,
      &:focus {
        color: #eeeeee;
        background: #2bced6;
        box-shadow: none;
      }
    `}
`

export const Label = styled.label`
  position: relative;
  font-family: ${titleFont};
  font-size: ${fontSize.contact.mobileTitle};
  font-weight: bold;
  color: #2bced6;
  display: block;

  @media (min-width: ${screenSize.tablet}) {
    flex-basis: 49%;
  }

  & + & {
    margin-top: 1.5em;

    @media (min-width: ${screenSize.tablet}) {
      margin-top: 0;
    }
  }

  ${({ message }) =>
    message &&
    css`
      margin-top: 1.5em;
    `}
`

export const Nav = styled.ul`
  display: none;
  margin: 0;
  padding: 0;

  @media (min-width: ${screenSize.laptop}) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`

export const NavItem = styled.li`
  display: none;
  list-style: none;

  @media (min-width: ${screenSize.laptop}) {
    display: list-item;
    margin-right: 1em;
  }
`

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  ${({ button }) =>
    button &&
    css`
      justify-content: center;
    `}

  ${({ footer }) =>
    footer &&
    css`
      justify-content: center;
      margin: 2em 0;
    `}

  ${({ form }) =>
    form &&
    css`
      display: block;

      @media (min-width: ${screenSize.tablet}) {
        display: flex;
        flex-wrap: nowrap;
        justify-content: space-between;
      }
    `}

  ${({ navbar }) =>
    navbar &&
    css`
      @media (min-width: ${screenSize.laptop}) {
        justify-content: space-between;
      }
    `}

  ${({ portfolioButton }) =>
    portfolioButton &&
    css`
      justify-content: flex-end;
      margin: 2em 0 0;

      @media (min-width: ${screenSize.laptop}) {
        margin-top: auto;
      }
    `}

  ${({ portfolioTag }) =>
    portfolioTag &&
    css`
      flex-wrap: wrap;
      justify-content: flex-start;
      margin: 1em 0;
    `}
`

export const ScrollAnchor = styled.div`
  position: absolute;
  top: -70.5px;
  left: 0;
`

export const Section = styled.section`
  position: relative;
  background-color: ${({ dark }) => (dark ? '#393E46' : '#eeeeee')};
  padding: ${({ home }) => (home ? '6em 0 0' : '4em 0 5em')};
`

export const SidebarButton = styled.button`
  cursor: pointer;
  background: none;
  border: none;
  padding: 0;

  &:hover,
  &:focus {
    opacity: 0.7;
  }

  &:focus {
    outline: none;
  }

  @media (min-width: ${screenSize.laptop}) {
    display: none;
  }
`

export const StyledFooter = styled.footer`
  background: #222831;
  padding: 0.1em 0 1em;
`

export const StyledHashLink = styled(HashLink)`
  cursor: pointer;
  text-decoration: none;
  color: #eeeeee;

  &:focus,
  &:hover {
    opacity: 0.7;
  }

  ${({ button }) =>
    button &&
    css`
      font-family: ${titleFont};
      font-size: ${fontSize.navbar.mobileTitle};
      font-weight: bold;
      line-height: 1;
      background-color: #00adb5;
      border-radius: 50px;
      margin-right: 1em;
      padding: 0.35em 0.65em;

      display: flex;
      align-items: center;

      &:focus,
      &:hover {
        color: #00adb5;
        background-color: #eeeeee;
        opacity: 1;
      }

      @media (min-width: ${screenSize.laptop}) {
        margin: 0 0 0 0.5em;
      }
    `}

  ${({ footerlogo }) =>
    footerlogo &&
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

export const StyledLink = styled.a`
  cursor: pointer;
  text-decoration: none;
  color: #2bced6;

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

export const StyledNavHashLink = styled(NavHashLink)`
  cursor: pointer;
  text-decoration: none;
  text-transform: uppercase;
  font-family: ${titleFont};
  font-size: ${fontSize.sidebar.mobileTitle};
  line-height: 1;
  color: #eeeeee;
  margin-bottom: 1.5em;

  &:focus,
  &:hover {
    color: #00adb5;
  }

  &.active {
    /* color: blue; */
  }

  ${({ bigscreen }) =>
    bigscreen &&
    css`
      font-size: ${fontSize.navbar.mobileTitle};
      margin: 0;
    `}
`

export const StyledToastContainer = styled(ToastContainer).attrs({
  toastClassName: 'toast',
})`
  .toast {
    background-color: #00adb5;
    color: #eeeeee;
  }
`

export const Tag = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin: 1em 0 0.8em;
  padding: 0;

  @media (min-width: ${screenSize.laptop}) {
    margin: 0.3em 0 0.8em;
  }
`

export const TagItem = styled.li`
  font-family: ${textFont};
  background-color: #14171d;
  color: #2bced6;
  opacity: 0.6;
  margin-right: 0.2em;
  margin-bottom: 0.2em;
  padding: 0.25em 0.5em;
`

export const Textarea = styled.textarea`
  display: block;
  min-width: 100%;
  max-width: 100%;
  min-height: 200px;
  font-family: ${textFont};
  font-weight: 300;
  font-size: ${fontSize.contact.mobileText};
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
