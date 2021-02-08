import React, { useEffect, useState } from "react"
import Carousel from "../../modules/Carousel/Carousel"
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
      <Carousel navOptions={["dev", "design"]} />
    </div>
  )
}

export default SkillsSection
