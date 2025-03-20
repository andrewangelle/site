import { useAtomValue } from 'jotai/react';
import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { isDesktop } from 'react-device-detect';
import { ActiveLink } from '~/components/LinksSection/ActiveLink';
import { LinksSection } from '~/components/LinksSection/LinksSection';
import { Name } from '~/components/Name';
import { ResumeSection } from '~/components/ResumeSection/ResumeSection';
import { useAnimatedSubtitle } from '~/hooks/useAnimatedSubtitle';
import { useIsLinksInView } from '~/hooks/useIsLinksInView';
import { SECTIONS, activeViewAtom } from '~/store/atoms';

export function Page() {
  /** refs */
  const nameSectionRef = useRef<HTMLElement>(null);
  const nameButtonRef = useRef<HTMLButtonElement>(null);
  const nameRef = useRef<HTMLDivElement>(null);
  const linksSectionRef = useRef<HTMLElement>(null);
  const githubLinkRef = useRef<HTMLAnchorElement>(null);

  /** state */
  const [linksRef] = useIsLinksInView();
  const activeView = useAtomValue(activeViewAtom);

  /** animations */
  const { scrollYProgress } = useScroll();
  const subTitleRef = useAnimatedSubtitle();
  const moveLeft = useTransform(scrollYProgress, getLeftOffset);
  const moveRight = useTransform(scrollYProgress, getRightOffset);
  const linksOpacity = useTransform(scrollYProgress, (latest) => latest);

  /** handlers */
  function scrollLinksIntoView() {
    linksSectionRef?.current?.scrollIntoView({ behavior: 'smooth' });
    nameButtonRef?.current?.blur();
  }

  function scrollNameIntoView() {
    githubLinkRef?.current?.blur();
    nameSectionRef?.current?.scrollIntoView({ behavior: 'smooth' });
    nameButtonRef?.current?.focus();
  }

  function getLeftOffset(value: number) {
    const result = Math.ceil(value * 1000);
    const offset = result < 1000 ? result : 1000;
    return `${Math.abs(result + offset) * -1}px`;
  }

  function getRightOffset(value: number) {
    return `${Math.ceil(value * 1000)}px`;
  }

  return (
    <>
      <section ref={nameSectionRef} tabIndex={-1}>
        <Name
          nameButtonRef={nameButtonRef}
          nameRef={nameRef}
          subTitleRef={subTitleRef}
          moveLeft={moveLeft}
          moveRight={moveRight}
          scrollNameIntoView={scrollNameIntoView}
          scrollLinksIntoView={scrollLinksIntoView}
        />
      </section>

      <motion.section ref={linksSectionRef} style={{ opacity: linksOpacity }}>
        <div ref={linksRef} className="links-container">
          {activeView === SECTIONS.LINKS && (
            <>
              {isDesktop && <ActiveLink />}
              <LinksSection ref={githubLinkRef} />
            </>
          )}
          {activeView === SECTIONS.RESUME && <ResumeSection />}
        </div>
      </motion.section>
    </>
  );
}
