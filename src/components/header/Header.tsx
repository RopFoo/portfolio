import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import owlLogo from "./assets/owl_logo_solo.svg"

// Style
import "./Header.scss"

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <img src={owlLogo} alt="" />
      </div>
      <div className="header__nav">
        <p>me</p>
        <p>skills</p>
        <p>projects</p>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
