import PropTypes from 'prop-types'
import React from 'react'
import { stack as StackSidebar } from 'react-burger-menu'

import { Button, StyledNavHashLink } from '../styles/contentStyle'
import { CrossIcon, DownloadIcon } from '../styles/icon'

const Sidebar = ({ handleOnClose, isSidebarOpen }) => {
  const styles = {
    bmCrossButton: {
      color: '#eeeeee',
      height: '50px',
      width: '50px',
      '&:hover': {
        color: '#00adb5',
      },
    },
    bmCross: {
      width: '50px',
      height: '50px',
      '&:hover': {
        color: '#00adb5',
      },
    },
    bmMenuWrap: {
      position: 'fixed',
      height: '100%',
    },
    bmMenu: {
      background: '#222831',
      fontFamily: 'Eurostile',
      fontSize: '1.8rem',
      padding: '2.5em 0 0',
      textAlign: 'center',
      textTransform: 'uppercase',
    },
    bmMorphShape: {
      fill: '#373a47',
    },
    bmItemList: {
      color: '#eeeeee',
      padding: '0.8em',
    },
    bmItem: {
      display: 'block',
    },
    bmOverlay: {
      background: 'rgba(0, 0, 0, 0.6)',
    },
  }
  return (
    <StackSidebar
      right
      customBurgerIcon={false}
      customCrossIcon={<CrossIcon />}
      disableAutoFocus
      isOpen={isSidebarOpen}
      onClose={handleOnClose}
      width={250}
      styles={styles}
    >
      <StyledNavHashLink smooth to='/#home' activeClassName='active' onClick={handleOnClose}>
        Home
      </StyledNavHashLink>
      <StyledNavHashLink smooth to='/#skills' activeClassName='active' onClick={handleOnClose}>
        Skills
      </StyledNavHashLink>
      <StyledNavHashLink smooth to='/#portfolio' activeClassName='active' onClick={handleOnClose}>
        Portfolio
      </StyledNavHashLink>
      <StyledNavHashLink smooth to='/#education' activeClassName='active' onClick={handleOnClose}>
        Education
      </StyledNavHashLink>
      <StyledNavHashLink smooth to='/#awards' activeClassName='active' onClick={handleOnClose}>
        Awards
      </StyledNavHashLink>
      <StyledNavHashLink smooth to='/#contact' activeClassName='active' onClick={handleOnClose}>
        Contact Me
      </StyledNavHashLink>
      <Button sidebar href='/'>
        <DownloadIcon />
        resume
      </Button>
    </StackSidebar>
  )
}

Sidebar.propTypes = {
  handleOnClose: PropTypes.func.isRequired,
  isSidebarOpen: PropTypes.bool.isRequired,
}

export default Sidebar
