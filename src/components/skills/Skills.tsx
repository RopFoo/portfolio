import React, { useEffect, useState } from "react"
import { skillIconsDev, skillIconsDesign } from "./skillIcons"
import "./Skills.scss"
import SkillsToggle from "./SkillsToggle"

const SkillsSection: React.FC = () => {
  const [showDevSkills, setShowDevSkills] = useState(true)
  const [devSkillsTrigger, setDevSkillsTrigger] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setDevSkillsTrigger(showDevSkills)
    }, 500)
  }, [showDevSkills])

  return (
    <div className="skills-section">
      <div className="skills-section__header">
        <h1>/skills</h1>
        <SkillsToggle
          firstActive={showDevSkills}
          setFirstActive={setShowDevSkills}
        />
      </div>
      <div
        className={`${
          !showDevSkills
            ? "skills-section__grid--move-left"
            : "skills-section__grid--move-right"
        } skills-section__grid`}
      >
        {devSkillsTrigger
          ? skillIconsDev.map(({ name, icon, alt }) => {
              return (
                <div className="skills-section__element" key={name}>
                  <img src={icon} alt={alt} />
                  <p>{name}</p>
                </div>
              )
            })
          : skillIconsDesign.map(({ name, icon, alt }) => {
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
