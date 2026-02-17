import {
  SiPython,
  SiJavascript,
  SiTypescript,
  SiSharp,
  SiReact,
  SiNodedotjs,
  SiDotnet,
  SiHtml5,
  SiCss3,
  SiPostgresql,
  SiPandas,
  SiAmazonwebservices,
  SiDocker,
  SiGithub,
} from 'react-icons/si'
import { HiCircleStack, HiCloud, HiServerStack } from 'react-icons/hi2'

const skills = [
  {
    category: 'Languages & Frameworks',
    items: [
      { name: 'Python', icon: SiPython },
      { name: 'JavaScript', icon: SiJavascript },
      { name: 'TypeScript', icon: SiTypescript },
      { name: 'C#', icon: SiSharp },
      { name: 'React', icon: SiReact },
      { name: 'Node.js', icon: SiNodedotjs },
      { name: 'ASP.NET', icon: SiDotnet },
      { name: 'HTML', icon: SiHtml5 },
      { name: 'CSS', icon: SiCss3 },
    ],
  },
  {
    category: 'Backend, Data & APIs',
    items: [
      { name: 'SQL', icon: HiCircleStack },
      { name: 'PostgreSQL', icon: SiPostgresql },
      { name: 'REST APIs', icon: HiCloud },
      { name: 'Pandas', icon: SiPandas },
    ],
  },
  {
    category: 'Cloud & DevOps',
    items: [
      { name: 'AWS', icon: SiAmazonwebservices },
      { name: 'Azure', icon: HiServerStack },
      { name: 'Docker', icon: SiDocker },
      { name: 'GitHub', icon: SiGithub },
    ],
  },
]

export default skills