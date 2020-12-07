import React from "react"

import "./Skills.scss"

import jsIcon from "./assets/js.svg"
import gitIcon from "./assets/git.svg"
import reactIcon from "./assets/react.svg"
import vueIcon from "./assets/vue.svg"
import sassIcon from "./assets/sass.svg"
import ionicIcon from "./assets/ionic.svg"
import dockerIcon from "./assets/docker.svg"

const SkillsSection: React.FC = () => {
  return (
    <div className="skills-section">
      <h1>/skills</h1>
      <div className="skills-section__grid">
        <div className="skills-section__element">
          <img src={jsIcon} alt="JavaScript and TypeScript icon" />
          <p>js | ts</p>
        </div>
        <div className="skills-section__element">
          <img src={reactIcon} alt="React icon" />
          <p>react</p>
        </div>
        <div className="skills-section__element">
          <img src={vueIcon} alt="Vue icon" />
          <p>vue</p>
        </div>
        <div className="skills-section__element">
          <img src={sassIcon} alt="Sass icon" />
          <p>sass</p>
        </div>
        <div className="skills-section__element">
          <img src={ionicIcon} alt="Ionic icon" />
          <p>ionic</p>
        </div>
        <div className="skills-section__element">
          <img src={dockerIcon} alt="Docker icon" />
          <p>docker</p>
        </div>
        <div className="skills-section__element">
          <img src={gitIcon} alt="Git icon" />
          <p>git</p>
        </div>
      </div>
    </div>
  )
}

export default SkillsSection
