import { useAnimate, motion } from "motion/react";
import { useState, useEffect } from "react";
import { isMobile } from 'react-device-detect'
import { strings, activeLinkConfig } from "~/utils/constants";
import { usePrevious } from "~/utils/usePrevious";
import { FaGithub, FaLinkedin, FaEnvelopeSquare } from "react-icons/fa";

export function Links() {
  if(isMobile) {
    return <MobileLinks />
  }

  return <DesktopLinks />
}

function DesktopLinks() {
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
          onHoverStart={() => setActiveText(strings.github)}
          onHoverEnd={() => setActiveText(null)}
          onFocus={() => setActiveText(strings.github)}
          onBlur={() => setActiveText(null)}
          whileFocus={activeLinkConfig}
          whileHover={activeLinkConfig}    
          href={strings.hrefs.github}
          target="_blank"
          style={{ color: 'inherit' }}
        >
          <FaGithub size={60}/>
        </motion.a> 

        <motion.a
          onHoverStart={() => setActiveText(strings.linkedin)}
          onHoverEnd={() => setActiveText(null)}
          onFocus={() => setActiveText(strings.linkedin)}
          onBlur={() => setActiveText(null)}
          whileFocus={activeLinkConfig}
          whileHover={activeLinkConfig} 
          href={strings.hrefs.linkedin}
          target="_blank"
          style={{ color: 'inherit' }}
        >
          <FaLinkedin size={60}/>
        </motion.a> 

        <motion.a
          onHoverStart={() => setActiveText(strings.contact)}
          onHoverEnd={() => setActiveText(null)}
          onFocus={() => setActiveText(strings.contact)}
          onBlur={() => setActiveText(null)}
          whileFocus={activeLinkConfig}
          whileHover={activeLinkConfig} 
          href={strings.hrefs.contact}
          target="_blank"
          style={{ color: 'inherit' }}
        >
          <FaEnvelopeSquare size={60} />
        </motion.a> 
      </div>
    </>
  )
}

function MobileLinks() {
  return (
    <div className='links'>
      <div className='mobile-link'>
        <h3>
          {strings.github}
        </h3>
        <a
          href={strings.hrefs.github}
          target="_blank"
          style={{ color: 'inherit' }}
        >
          <FaGithub size={60}/>
        </a> 
      </div>

      <div className='mobile-link'>
        <h3>
          {strings.linkedin}
        </h3>
        <a
          href={strings.hrefs.linkedin}
          target="_blank"
          style={{ color: 'inherit' }}
        >
          <FaLinkedin size={60}/>
        </a> 
      </div>

      <div className='mobile-link'>
        <h3>
          {strings.contact}
        </h3>
        <a
          href={strings.hrefs.contact}
          target="_blank"
          style={{ color: 'inherit' }}
        >
          <FaEnvelopeSquare size={60}/>
        </a> 
      </div>
    </div>
  )
}

