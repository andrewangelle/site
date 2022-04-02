
export type ContactIconData = {
  href: string;
  iconName: string;
};

export const contactIcons: ContactIconData[] = [
  { href: 'http://www.github.com/andrewangelle', iconName: 'faGithub' },
  { href: 'https://www.linkedin.com/in/andrew-angelle-21299774/', iconName: 'faLinkedin' },
  { href: 'mailto:andrewangelle@gmail.com?&subject=Development Services Inquiry', iconName: 'faEnvelopeSquare' }
];

export type PortfolioData = {
  title: string;
  description: string;
  githubLink: string;
  demoLink?: string;
  demoText?: string;
}

export const portfolioData: PortfolioData[] = [
  {
    title: 'React Glide',
    description: 'a multi purpose carousel module built in react',
    githubLink: 'http://www.github.com/andrewangelle/react-glide',
    demoLink: 'https://codesandbox.io/s/r7166733lm',
    demoText: 'Demo'
  },
  {
    title: 'React PayPal Button',
    description: 'A button component to implement PayPal\'s Express Checkout in React',
    githubLink: 'http://www.github.com/andrewangelle/react-paypal-button',
    demoLink: '',
    demoText: ''
  },
  {
    title: 'Websynth',
    description: 'A synthesizer built as a webapp using the Web Audio API',
    githubLink: 'https://github.com/andrewangelle/websynth',
    demoLink: '',
    demoText: '' 
  },
  {
    title: 'Stacks - a trello clone',
    description: 'A full stack task management web app built with React, Remix, Supabase',
    githubLink: 'https://github.com/andrewangelle/stacks',
    demoLink: 'https://stacks-trello-clone.netlify.app/',
    demoText: 'Demo' 
  }, 
];