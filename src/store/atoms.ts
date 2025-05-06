import { atom } from 'jotai';

export const linksInViewAtom = atom(false);
export const activeLinkAtom = atom<string | null>(null);

export const SECTIONS = {
  NAME: 'NAME',
  LINKS: 'LINKS',
  RESUME: 'RESUME',
} as const;

export type Section = (typeof SECTIONS)[keyof typeof SECTIONS];

export const activeViewAtom = atom<Section>(SECTIONS.LINKS);
