import { motion } from "framer-motion"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { useScrollDirection } from "../../hooks/useScrollDirection"

import owlLogo from "./assets/owl_logo_solo.svg"

// Style
import "./Header.scss"

const Header = () => {
  const { isScrollUp } = useScrollDirection()

  const variants = {
    shown: { y: 0 },
    hidden: { y: -100 },
  }

  return (
    <motion.header
      animate={isScrollUp ? "shown" : "hidden"}
      variants={variants}
      transition={{ duration: 0.5, delay: 0.15 }}
      className="header"
    >
      <div className="header__wrapper">
        <div className="header__logo">
          <img src={owlLogo} alt="" />
        </div>
        <div className="header__nav">
          <p>me</p>
          <p>skills</p>
          <p>projects</p>
        </div>
      </div>
    </motion.header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
