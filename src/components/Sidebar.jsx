import PropTypes from 'prop-types'
import React from 'react'
import { stack as StackSidebar } from 'react-burger-menu'

import { CrossIcon } from '../styles/icon'

const Sidebar = ({ handleOnClose, isSidebarOpen }) => {
  const styles = {
    bmCrossButton: {
      height: '50px',
      width: '50px',
    },
    bmCross: {
      color: '#eeeeee',
      width: '50px',
      height: '50px',
    },
    bmMenuWrap: {
      position: 'fixed',
      height: '100%',
    },
    bmMenu: {
      background: '#222831',
      padding: '2.5em 1.5em 0',
      fontSize: '1.15em',
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
      background: 'rgba(0, 0, 0, 0.3)',
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
      styles={styles}
      width={250}
    >
      <p>Home</p>
      <p>Skills</p>
      <p>Portfolio</p>
      <p>Education</p>
      <p>Awards</p>
      <p>Contact Me</p>
    </StackSidebar>
  )
}

Sidebar.propTypes = {
  handleOnClose: PropTypes.func.isRequired,
  isSidebarOpen: PropTypes.bool.isRequired,
}

export default Sidebar
