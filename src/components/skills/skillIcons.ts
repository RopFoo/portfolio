import jsIcon from "./assets/js.svg"
import gitIcon from "./assets/git.svg"
import reactIcon from "./assets/react.svg"
import vueIcon from "./assets/vue.svg"
import sassIcon from "./assets/sass.svg"
import ionicIcon from "./assets/ionic.svg"
import flutterIcon from "./assets/flutter.svg"
import dockerIcon from "./assets/docker.svg"

export interface SkillIconType {
  name: string
  alt: string
  icon: any
}

export const skillIcons: SkillIconType[] = [
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
