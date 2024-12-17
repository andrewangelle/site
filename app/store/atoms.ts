import { atom } from 'jotai';

export const linksInViewAtom = atom(false);
export const activeLinkAtom = atom<string | null>(null);
export const isDownloadsSelectedAtom = atom(false);
