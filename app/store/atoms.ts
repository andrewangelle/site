import { atom } from 'jotai';

export const linksInViewAtom = atom(false);
export const activeTextAtom = atom<string | null>(null);
export const isDownloadsSelectedAtom = atom(false);
