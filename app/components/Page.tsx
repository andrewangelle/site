import { useEffect, useRef } from 'react';
import { useAtom } from 'jotai/react';
import { motion, useAnimate, useInView, useScroll, useTransform } from 'motion/react';
import { colors, strings } from '~/utils/constants';
import { Links } from '~/components/Links'
import { linksInViewAtom } from '~/store/atoms';
import { usePrevious } from '~/utils/usePrevious';

export function Page() {
  const nameSectionRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLDivElement>(null);
  const linksSectionRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<HTMLDivElement>(null);
  const [subTitleRef, animateSubtitle] = useAnimate()
  const { scrollYProgress } = useScroll();
  const moveLeft = useTransform(scrollYProgress, (v) => `-${Math.ceil(v * 1000) + 30}px`);
  const moveRight = useTransform(scrollYProgress, (v) => `${Math.ceil(v * 1000)}px`);
  const opacity = useTransform(scrollYProgress, (latest) => latest);
  const isLinksInView = useInView(linksRef);
  const prevLinksInView = usePrevious(isLinksInView)
  const [, setInView] = useAtom(linksInViewAtom)

  function scrollLinksIntoView() {
    linksSectionRef?.current?.scrollIntoView({ behavior: 'smooth' });
  }

  function scrollNameIntoView() {
    nameSectionRef?.current?.scrollIntoView({ behavior: 'smooth' })
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
      <div ref={nameSectionRef} className="section">
        <div className="name-container">
          <motion.button 
            onFocus={scrollNameIntoView}
            onClick={scrollLinksIntoView} 
            tabIndex={0}
            className='inner'
          >
            <motion.h1
              ref={nameRef}
              className='title' 
              style={{ x: moveLeft }}
            >
              {strings.name}
            </motion.h1>

            <motion.h2 
              ref={subTitleRef}
              className='sub-title'
              style={{ x: moveRight }}
            >
              {strings.subtitle}
            </motion.h2>
          </motion.button>
        </div>
      </div>

      <motion.div 
        ref={linksSectionRef}
        className="section" 
        style={{ opacity }}
      >
        <div 
          ref={linksRef} 
          className='links-container'
        >
          <Links />
        </div>
      </motion.div>
    </>
  )
}


