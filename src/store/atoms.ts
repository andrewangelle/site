import { atom } from 'jotai';

export const SECTIONS = {
  NAME: 'NAME',
  LINKS: 'LINKS',
  RESUME: 'RESUME',
} as const;

export type Section = (typeof SECTIONS)[keyof typeof SECTIONS];

export const linksInViewAtom = atom(false);
export const activeLinkAtom = atom<string | null>(null);
export const activeViewAtom = atom<Section>(SECTIONS.NAME);
