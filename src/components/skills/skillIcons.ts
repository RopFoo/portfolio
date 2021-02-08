// Dev Icons
import jsIcon from "./assets/icons-dev/js.svg"
import gitIcon from "./assets/icons-dev/git.svg"
import reactIcon from "./assets/icons-dev/react.svg"
import vueIcon from "./assets/icons-dev/vue.svg"
import sassIcon from "./assets/icons-dev/sass.svg"
import ionicIcon from "./assets/icons-dev/ionic.svg"
import flutterIcon from "./assets/icons-dev/flutter.svg"
import dockerIcon from "./assets/icons-dev/docker.svg"

export interface SkillIconType {
  name: string
  alt: string
  icon: any
}

export const skillIconsDev: SkillIconType[] = [
  {
    name: "js | ts",
    icon: jsIcon,
    alt: "JavaScript and TypeScript icon",
  },
  {
    name: "react",
    icon: reactIcon,
    alt: "React JS icon",
  },
  {
    name: "vue",
    icon: vueIcon,
    alt: "Vue JS icon",
  },
  {
    name: "sass",
    icon: sassIcon,
    alt: "Sass icon",
  },
  {
    name: "ionic",
    icon: ionicIcon,
    alt: "Ionic icon",
  },
  {
    name: "flutter",
    icon: flutterIcon,
    alt: "Flutter icon",
  },
  {
    name: "docker",
    icon: dockerIcon,
    alt: "Docker icon",
  },
  {
    name: "git",
    icon: gitIcon,
    alt: "Git icon",
  },
]

export const skillIconsDesign: SkillIconType[] = [
  {
    name: "js | ts",
    icon: jsIcon,
    alt: "JavaScript and TypeScript icon",
  },
]
