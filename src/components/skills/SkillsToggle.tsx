import React from "react"
import "./Skills.scss"

interface Props {
  firstActive: boolean
  setFirstActive: (set: boolean) => void
}

const SkillsToggle: React.FC<Props> = ({ firstActive, setFirstActive }) => {
  return (
    <div className="skills-section__header__toggle">
      <button
        className={
          firstActive
            ? "skills-section__header__toggle--on"
            : "skills-section__header__toggle--off"
        }
        onClick={() => setFirstActive(true)}
      >
        dev
      </button>
      <button
        className={
          firstActive
            ? "skills-section__header__toggle--off"
            : "skills-section__header__toggle--on"
        }
        onClick={() => setFirstActive(false)}
      >
        design
      </button>
    </div>
  )
}

export default SkillsToggle
