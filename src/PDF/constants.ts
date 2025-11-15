export const PDF_CONSTANTS = {
  DOC_TITLE: 'AndrewAngelleSoftwareEngineerResume',
  HEADINGS: {
    EXPERIENCE: 'EXPERIENCE',
    NAME: 'andrew angelle',
    TITLE: 'software engineer',
    SKILLS: 'SKILLS',
    EDUCATION: 'EDUCATION',
  },
  CONTACT: {
    EMAIL: {
      title: 'andrewangelle@gmail.com',
      href: 'mailto:andrewangelle@gmail.com',
    },
    GITHUB: {
      title: 'github.com/andrewangelle',
      href: 'https://github.com/andrewangelle',
    },
    SITE: {
      title: 'andrewangelle.com',
      href: 'https://andrewangelle.com',
    },
  },
  JOBS: [
    {
      name: 'Experian',
      location: 'Remote',
      title: 'Staff Software Engineer',
      date: 'September 2019 - present',
      description: [
        "Led 2 teams (10 engineers) to deliver the company's first B2D offering of front end developer tools and UI library",
        'Led 1 team of 5 engineers in building an internal UI library to support a multi tenant B2B product.',
        'Established front end engineering standards adopted across the engineering organization, including adoption of automated visual regression testing, integration focused component testing, and strict linting/typechecking DX to decrease production bugs.',
        'Designed and architected API mocking patterns for component development, unblocking UI teams from backend dependencies, and reducing time to market by multiple sprints.',
        // 'Drove engagement in adopting modern frontend tooling, tech stacks, and architecture. These included adoption of React, TypeScript, Server side rendered micro frontends allowing for more ease of delivering UI\'s capable of handling more complex design and business needs.',
      ],
    },
    {
      name: 'Rackspace',
      location: 'Austin, Tx',
      title: 'Software Engineer',
      date: 'April 2018 - February 2019',
      description: [
        'Worked on the front end team tasked with building a greenfield ticketing web app for public and internal use. Technologies used included Typescript, React, Redux.',
      ],
    },
    {
      name: 'Victory CTO',
      location: 'Remote',
      title: 'Software Engineer',
      date: 'September 2017 - December 2017',
      description: [
        'Worked on a small agile team tasked with a ground-up rebuild of naturallycurly.com. Technologies used included HTML, SASS, ES6 on the front end, and PHP/Laravel back end.',
      ],
    },
  ],
  EDUCATION: [
    {
      name: 'University of Southern Mississippi',
      location: 'Hattiesburg, MS',
      title: 'Masters of Music',
    },
    {
      name: 'University of Louisiana at Lafayette',
      location: 'Lafayette, LA',
      title: 'Bachelors of Arts',
    },
  ],
  SKILLS: [
    'TypeScript',
    'React',
    'HTML',
    'CSS',
    'NodeJS',
    'REST',
    'Jest',
    'Webpack',
    'Vite',
    'Vitest',
  ],
};
