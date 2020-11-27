import React from "react"
import "./Me.scss"

import SocialLink from "./SocialLink"

import meIMG from "./assets/images/me.jpg"
import githubSVG from "./assets/images/social/github.svg"
import linkedinSVG from "./assets/images/social/linkedin.svg"
import dribbbleSVG from "./assets/images/social/dribbble.svg"

const MeSection: React.FC = () => {
  return (
    <div className="me-section">
      <div className="me-section__info__wrapper">
        <div className="me-section__info">
          <img src={meIMG} alt="" />
          <div className="me-section__info__links-section">
            <SocialLink
              img={githubSVG}
              name="github"
              link="https://github.com/RopFoo"
            />
            <SocialLink
              img={linkedinSVG}
              name="linkedin"
              link="https://github.com/RopFoo"
            />
            <SocialLink
              img={dribbbleSVG}
              name="dribbble"
              link="https://github.com/RopFoo"
            />
          </div>
        </div>
      </div>
      <div className="me-section__text">
        <h1>/hey</h1>
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
