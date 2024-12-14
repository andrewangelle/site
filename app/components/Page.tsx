import { useEffect, useRef } from 'react';
import { motion, useAnimate, useScroll, useTransform } from 'motion/react';
import { isMobile } from 'react-device-detect';
import { Links } from '~/components/Links'
import { useIsLinksInView } from '~/utils/useIsLinksInView';
import { colors, strings } from '~/utils/constants';

export function Page() {
  const nameButtonRef = useRef<HTMLButtonElement>(null)
  const nameSectionRef = useRef<HTMLElement>(null);
  const nameRef = useRef<HTMLDivElement>(null);
  const linksSectionRef = useRef<HTMLElement>(null);
  const githubLinkRef = useRef<HTMLAnchorElement>(null);
  const [subTitleRef, animateSubtitle] = useAnimate()
  const { scrollYProgress } = useScroll();
  const moveLeft = useTransform(scrollYProgress, (v) => `-${Math.ceil((v * 1000) + (isMobile ? 10 : 30))}px`);
  const moveRight = useTransform(scrollYProgress, (v) => `${Math.ceil(v * 1000)}px`);
  const linksOpacity = useTransform(scrollYProgress, (latest) => latest);
  const [linksRef, isLinksInView] = useIsLinksInView()

  function scrollLinksIntoView() {
    linksSectionRef?.current?.scrollIntoView({ behavior: 'smooth' });
    nameButtonRef?.current?.blur();
  }

  function scrollNameIntoView() {
    githubLinkRef?.current?.blur();
    nameSectionRef?.current?.scrollIntoView({ behavior: 'smooth' })
    nameButtonRef?.current?.focus();
  }

  useEffect(() => {
    const color = isLinksInView ? colors.sky : colors.red;
    animateSubtitle(subTitleRef.current, { color }, { ease: "linear" });
  }, [isLinksInView]);

  return (
    <>
      <section 
        ref={nameSectionRef} 
        tabIndex={-1}
      >
        <div 
          className="name-container" 
          tabIndex={-1}
        >
          <motion.button 
            ref={nameButtonRef}
            className='inner'
            aria-label={strings.aria.name}
            onFocus={scrollNameIntoView}
            onClick={scrollLinksIntoView} 
          >
            <motion.h1
              ref={nameRef}
              style={{ 
                x: moveLeft,
              }}
            >
              {strings.name}
            </motion.h1>

            <motion.h2 
              ref={subTitleRef}
              style={{ x: moveRight }}
            >
              {strings.subtitle}
            </motion.h2>
          </motion.button>
        </div>
      </section>

      <motion.section
        ref={linksSectionRef}
        style={{ opacity: linksOpacity }}
      >
        <div 
          ref={linksRef} 
          className='links-container'
        >
          <Links ref={githubLinkRef} />
        </div>
      </motion.section>
    </>
  )
}
