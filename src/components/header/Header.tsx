import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import owlLogo from "./assets/owl_logo.svg"

// Style
import "./Header.scss"

const Header = ({ siteTitle }) => {
  return (
    <header className="header__top">
      <div className="header__top__logo">
        <img src={owlLogo} alt="" />
      </div>
      <div className="header__top__nav">
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
