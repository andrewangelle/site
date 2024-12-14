import { useAnimate, motion } from "motion/react";
import { useState, useEffect, RefObject } from "react";
import { isMobile } from 'react-device-detect'
import { strings, activeLinkConfig } from "~/utils/constants";
import { usePrevious } from "~/utils/usePrevious";
import { FaGithub, FaLinkedin, FaEnvelopeSquare } from "react-icons/fa";

export function Links({
  ref
}: {
  ref: RefObject<HTMLAnchorElement | null>
}) {
  if(isMobile) {
    return <MobileLinks ref={ref} />
  }

  return <DesktopLinks ref={ref} />
}

function DesktopLinks({
  ref
}: {
  ref: RefObject<HTMLAnchorElement | null>
}) {
  const [activeText, setActiveText] = useState<string | null>(null);
  const [activeTextRef, animate] = useAnimate()
  const previousActiveText = usePrevious(activeText)

  useEffect(() => {
    if(activeText && previousActiveText !== activeText) {
      animate(activeTextRef.current, { opacity: 1 }, { ease: 'easeIn', duration: 0.75 })
    }

    if(!activeText && previousActiveText) {
      animate(activeTextRef.current, { opacity: 0 }, { ease: 'easeOut', duration: 0.5  })
    }
  }, [previousActiveText, activeText]);

  return (
    <>
      <motion.h3
        ref={activeTextRef}
        initial={{ opacity: 0 }}
      >
        {activeText}
      </motion.h3>

      <div className='links'>
        <motion.a
          ref={ref}
          aria-label={strings.aria.github} 
          href={strings.hrefs.github}
          target="_blank"
          style={{ color: 'inherit' }}
          whileFocus={activeLinkConfig}
          whileHover={activeLinkConfig}
          onHoverStart={() => setActiveText(strings.github)}
          onHoverEnd={() => setActiveText(null)}
          onFocus={() => setActiveText(strings.github)}
          onBlur={() => setActiveText(null)}
        >
          <FaGithub 
            role='presentation' 
            size={60} 
          />
        </motion.a> 

        <motion.a
          aria-label={strings.aria.linkedin}
          href={strings.hrefs.linkedin}
          target="_blank"
          style={{ color: 'inherit' }}
          whileFocus={activeLinkConfig}
          whileHover={activeLinkConfig}
          onHoverStart={() => setActiveText(strings.linkedin)}
          onHoverEnd={() => setActiveText(null)}
          onFocus={() => setActiveText(strings.linkedin)}
          onBlur={() => setActiveText(null)}
        >
          <FaLinkedin 
            role='presentation' 
            size={60}
          />
        </motion.a> 

        <motion.a
          aria-label={strings.aria.contact}
          href={strings.hrefs.contact}
          target="_blank"
          style={{ color: 'inherit' }}
          whileFocus={activeLinkConfig}
          whileHover={activeLinkConfig} 
          onHoverStart={() => setActiveText(strings.contact)}
          onHoverEnd={() => setActiveText(null)}
          onFocus={() => setActiveText(strings.contact)}
          onBlur={() => setActiveText(null)}
        >
          <FaEnvelopeSquare 
            role='presentation' 
            size={60} 
          />
        </motion.a> 
      </div>
    </>
  )
}

function MobileLinks({
  ref
}: {
  ref: RefObject<HTMLAnchorElement | null>
}) {
  return (
    <div className='links'>
      <div className='mobile-link'>
        <h3 role='presentation'>
          {strings.github}
        </h3>

        <a
          ref={ref}
          aria-label={strings.aria.github} 
          href={strings.hrefs.github}
          target="_blank"
          style={{ color: 'inherit' }}
        >
          <FaGithub
            role='presentation' 
            size={60} 
          />
        </a> 
      </div>

      <div className='mobile-link'>
        <h3 role='presentation'>
          {strings.linkedin}
        </h3>

        <a
          aria-label={strings.aria.linkedin}
          href={strings.hrefs.linkedin}
          target="_blank"
          style={{ color: 'inherit' }}
        >
          <FaLinkedin
            role='presentation' 
            size={60}
          />
        </a> 
      </div>

      <div className='mobile-link'>
        <h3 role='presentation'>
          {strings.contact}
        </h3>

        <a
          aria-label={strings.aria.contact}
          href={strings.hrefs.contact}
          target="_blank"
          style={{ color: 'inherit' }}
        >
          <FaEnvelopeSquare 
            role='presentation' 
            size={60}
          />
        </a> 
      </div>
    </div>
  )
}

