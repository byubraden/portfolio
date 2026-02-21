import cineniché from '../assets/cineniche.jpeg'
import turtleShelter from '../assets/turtleshelterproject.jpeg'
import analyticsCompetition from '../assets/analyticscompetition.jpeg'
import arKit from '../assets/screen-shot-2018-06-03-at-8-42-28-pm.png.webp'

const projects = [
  {
    title: 'Movie Recommender',
    year: '2025',
    description:
      'Full-stack movie site with ML-powered recommendations based on user ratings. Built with a React front end and .NET API backed by an Azure SQL database.',
    tech: ['React', '.NET', 'ML', 'Azure SQL'],
    github: null,
    live: null,
    image: cineniché,
    imagePosition: 'object-top',
  },
  {
    title: 'Nonprofit Web App',
    year: '2024',
    description:
      'Dynamic web application built for a local nonprofit, focusing on seamless UI/UX and efficient database operations with PostgreSQL.',
    tech: ['HTML', 'CSS', 'PostgreSQL', 'EJS', 'Node.js'],
    github: null,
    live: null,
    image: turtleShelter,
    imagePosition: 'object-top',
  },
  {
    title: 'Super Bowl Ad Analysis',
    year: '2025',
    description:
      'Data analytics project analyzing real-world Twitter engagement data for a University of Utah case competition, identifying key ad performance trends.',
    tech: ['Python', 'Tableau', 'Data Analytics'],
    github: null,
    live: null,
    image: analyticsCompetition,
  },
  {
    title: 'Augmented Reality Math Game',
    year: '2018',
    description:
      'Interactive AR-based math game for iOS designed to enhance student learning experiences using Apple\u2019s ARKit framework.',
    tech: ['Swift', 'Xcode', 'ARKit', 'iOS'],
    github: null,
    live: null,
    image: arKit,
  },
]

export default projects