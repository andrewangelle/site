import type { HTMLMotionProps } from 'motion/react';

export const strings = {
  name: 'Andrew Angelle',
  subtitle: 'software developer',
  github: 'GitHub',
  contact: 'Contact',
  linkedin: 'LinkedIn',
  resume: 'Resume',
  pdf: 'PDF',
  notFound: 'Page Not Found',
  errorBoundary: 'Something happened',
  backToLinks: 'Close',
  download: 'Download',
  view: 'View',
  hrefs: {
    github: 'http://www.github.com/andrewangelle',
    contact: 'mailto:andrewangelle@gmail.com?&subject=Development Inquiry',
    linkedin: 'https://www.linkedin.com/in/andrew-angelle-21299774/',
  },
  aria: {
    name: 'View Andrew Angelles contact links',
    github: "Navigate to Andrew Angelle's GitHub Page",
    linkedin: "Navigate to Andrew Angelle's LinkedIn Page",
    closeDownloads: 'Close the downloads section',
    contact: 'Email Andrew Angelle',
    notFound: 'Page Not Found. Go back to main page.',
    resume: {
      open: "View options for downloading Andrew Angelle's resume",
      view: "View Andrew Angelle's resume as a pdf",
      download: "Download Andrew Angelle's resume as a pdf",
    },
  },
};

export const ANCHOR_REL = 'noopener noreferrer';

export const colors = {
  red: '#8B0000',
  sky: '#f0f2f5',
};

export const activeLinkConfig = {
  scale: 1.25,
  transition: { duration: 0.5, ease: 'easeInOut' },
};

export type EnterExitAnimationProps = Pick<
  HTMLMotionProps<'h3' | 'div' | 'button'>,
  'initial' | 'animate' | 'exit' | 'variants'
>;

export const enterExitAnimationProps: EnterExitAnimationProps = {
  initial: 'hidden',
  animate: 'visible',
  exit: 'hidden',
  variants: {
    hidden: {
      scaleX: 0,
      opacity: 0,
    },
    visible: {
      scaleX: 1,
      opacity: 1,
    },
  },
};
