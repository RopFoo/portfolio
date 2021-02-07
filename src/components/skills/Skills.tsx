import React from "react"
import { skillIcons } from "./skillIcons"
import "./Skills.scss"

const SkillsSection: React.FC = () => {
  return (
    <div className="skills-section">
      <h1>/skills</h1>
      <div className="skills-section__grid">
        {skillIcons.map(({ name, icon, alt }) => {
          return (
            <div className="skills-section__element" key={name}>
              <img src={icon} alt={alt} />
              <p>{name}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default SkillsSection
