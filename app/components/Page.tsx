import { useEffect, useRef } from 'react';
import { motion, useAnimate, useInView, useScroll, useTransform } from 'motion/react';
import { colors, strings } from '~/utils/constants';
import { Links } from '~/components/Links'

export function Page() {
  const nameSectionRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLDivElement>(null);
  const linksSectionRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<HTMLDivElement>(null);
  const [backgroundRef, animateBackground] = useAnimate()
  const [subTitleRef, animateSubtitle] = useAnimate()
  const { scrollYProgress } = useScroll();
  const moveLeft = useTransform(scrollYProgress, getOffset('left'));
  const moveRight = useTransform(scrollYProgress, getOffset('right'));
  const opacity = useTransform(scrollYProgress, (latest) => latest);
  const isLinksInView = useInView(linksRef);

  function scrollLinksIntoView() {
    linksSectionRef?.current?.scrollIntoView({ behavior: 'smooth' });
  }

  function scrollNameIntoView() {
    nameSectionRef?.current?.scrollIntoView({ behavior: 'smooth' })
  }

  function getOffset(
    direction: 'left' | 'right'
  ) {
    return (latest: number) => {
      const operator = direction === 'left' ? '-' : '';
      const value = Math.ceil(latest * 1000);
      return `${operator}${value}px`;
    }
  }  

  useEffect(() => {
    const backgroundColor = isLinksInView ? colors.red : colors.sky;
    animateBackground(backgroundRef.current, { backgroundColor }, { ease: "linear" });

    const color = isLinksInView ? colors.sky : colors.red;
    animateSubtitle(subTitleRef.current, { color }, { ease: "linear" });

  }, [isLinksInView]);

  return (
    <motion.div ref={backgroundRef}>
      <div ref={nameSectionRef} className="section">
        <div 
          className="name-container" 
        >
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
    </motion.div>
  )
}


