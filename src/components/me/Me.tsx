import React from "react"
import "./Me.scss"

import SocialLink from "./SocialLink"

import meIMG from "./assets/images/me.jpg"
import githubSVG from "./assets/images/social/github.svg"
import linkedinSVG from "./assets/images/social/linkedin.svg"
import dribbbleSVG from "./assets/images/social/dribbble.svg"
import { motion } from "framer-motion"

const MeSection: React.FC = () => {
  return (
    <div className="me-section">
      <div className="me-section__info__wrapper">
        <div className="me-section__info">
          <div className="me-section__info__inner">
            <div className="me-section__info__me-image">
              <img src={meIMG} alt="" />
            </div>
            <div className="me-section__info__links-section">
              <SocialLink
                img={githubSVG}
                name="github"
                link="https://github.com/RopFoo"
              />
              <SocialLink
                img={linkedinSVG}
                name="linkedin"
                link="https://www.linkedin.com/in/robert-pasdziernik/"
              />
              <SocialLink
                img={dribbbleSVG}
                name="dribbble"
                link="https://dribbble.com/TheRop"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="me-section__text">
        <motion.h1
          animate={{
            opacity: [0, 1, 1],
            translateX: [-500, 100, 0],
          }}
          transition={{ duration: 1 }}
          className="header-margin"
        >
          /hey
        </motion.h1>
        <p>
          I'm Robert, a guy from Berlin studying visual computing and design.
          I'm into graphic design, web development, 3d art and motion design.
          This is my portfolio, a place where I show most of my work samples to
          share with the world! Or at least with you.
        </p>
      </div>
    </div>
  )
}

export default MeSection
