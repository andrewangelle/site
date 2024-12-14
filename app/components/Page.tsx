import { motion, useAnimate, useScroll, useTransform } from 'motion/react';
import { useEffect, useRef } from 'react';
import { isMobile } from 'react-device-detect';
import { LinksSection } from '~/components/LinksSection';
import { colors, strings } from '~/utils/constants';
import { useIsLinksInView } from '~/utils/useIsLinksInView';

export function Page() {
  const nameButtonRef = useRef<HTMLButtonElement>(null);
  const nameSectionRef = useRef<HTMLElement>(null);
  const nameRef = useRef<HTMLDivElement>(null);
  const linksSectionRef = useRef<HTMLElement>(null);
  const githubLinkRef = useRef<HTMLAnchorElement>(null);
  const [subTitleRef, animateSubtitle] = useAnimate();
  const { scrollYProgress } = useScroll();
  const moveLeft = useTransform(scrollYProgress, getLeftOffset);
  const moveRight = useTransform(scrollYProgress, getRightOffset);
  const linksOpacity = useTransform(scrollYProgress, (latest) => latest);
  const [linksRef, isLinksInView] = useIsLinksInView();

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
    const positionOffset = isMobile ? 10 : 30;
    const result = Math.ceil(value * 1000 + positionOffset);
    return `-${result}px`;
  }

  function getRightOffset(value: number) {
    return `${Math.ceil(value * 1000)}px`;
  }

  useEffect(() => {
    const color = isLinksInView ? colors.sky : colors.red;
    animateSubtitle(subTitleRef.current, { color }, { ease: 'linear' });
  }, [isLinksInView, animateSubtitle, subTitleRef.current]);

  return (
    <>
      <section ref={nameSectionRef} tabIndex={-1}>
        <div className="name-container" tabIndex={-1}>
          <motion.button
            ref={nameButtonRef}
            className="inner"
            aria-label={strings.aria.name}
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1 },
            }}
            onFocus={scrollNameIntoView}
            onClick={scrollLinksIntoView}
          >
            <motion.h1 ref={nameRef} style={{ x: moveLeft }}>
              {strings.name}
            </motion.h1>

            <motion.h2 ref={subTitleRef} style={{ x: moveRight }}>
              {strings.subtitle}
            </motion.h2>
          </motion.button>
        </div>
      </section>

      <motion.section ref={linksSectionRef} style={{ opacity: linksOpacity }}>
        <div ref={linksRef} className="links-container">
          <LinksSection ref={githubLinkRef} />
        </div>
      </motion.section>
    </>
  );
}
