import { useEffect, useRef } from 'react';
import { useAtom } from 'jotai/react';
import { motion, useAnimate, useInView, useScroll, useTransform } from 'motion/react';
import { isMobile } from 'react-device-detect';
import { colors, strings } from '~/utils/constants';
import { Links } from '~/components/Links'
import { linksInViewAtom } from '~/store/atoms';
import { usePrevious } from '~/utils/usePrevious';

export function Page() {
  const nameButtonRef = useRef<HTMLButtonElement>(null)
  const nameSectionRef = useRef<HTMLElement>(null);
  const nameRef = useRef<HTMLDivElement>(null);
  const linksSectionRef = useRef<HTMLElement>(null);
  const linksRef = useRef<HTMLDivElement>(null);
  const githubLinkRef = useRef<HTMLAnchorElement>(null);
  const [subTitleRef, animateSubtitle] = useAnimate()
  const { scrollYProgress } = useScroll();
  const moveLeft = useTransform(scrollYProgress, (v) => `-${Math.ceil(v * 1000)}px`);
  const moveRight = useTransform(scrollYProgress, (v) => `${Math.ceil(v * 1000)}px`);
  const linksOpacity = useTransform(scrollYProgress, (latest) => latest);
  const isLinksInView = useInView(linksRef);
  const prevLinksInView = usePrevious(isLinksInView)
  const [, setInView] = useAtom(linksInViewAtom)

  function scrollLinksIntoView() {
    nameButtonRef?.current?.blur();
    linksSectionRef?.current?.scrollIntoView({ behavior: 'smooth' });
    githubLinkRef.current?.focus()
  }

  function scrollNameIntoView() {
    githubLinkRef?.current?.blur();
    nameSectionRef?.current?.scrollIntoView({ behavior: 'smooth' })
    nameButtonRef?.current?.focus();
  }

  useEffect(() => {
    if(isLinksInView !== prevLinksInView) {
      setInView(isLinksInView)
    }

    const color = isLinksInView ? colors.sky : colors.red;
    animateSubtitle(subTitleRef.current, { color }, { ease: "linear" });

  }, [isLinksInView, prevLinksInView]);

  return (
    <>
      <section 
        ref={nameSectionRef} 
        aria-hidden={isLinksInView} 
        tabIndex={-1}
      >
        <div 
          className="name-container" 
          tabIndex={-1}
        >
          <motion.button 
            ref={nameButtonRef}
            aria-label={strings.aria.name}
            onFocus={scrollNameIntoView}
            onClick={scrollLinksIntoView} 
            className='inner'
          >
            <motion.h1
              ref={nameRef}
              style={{ 
                x: moveLeft,
                right: isMobile ? '10px' : '30px'
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
        aria-hidden={!isLinksInView}
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


