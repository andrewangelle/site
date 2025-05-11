import { motion } from 'motion/react';
import { useRef } from 'react';
import { Links } from '~/components/LinksSection/LinksSection';
import { Name } from '~/components/Name';
import { NotFound } from '~/components/NotFound';
import { useAnimatedSubtitle } from '~/hooks/useAnimatedSubtitle';
import { useAnimatedTitle } from '~/hooks/useAnimatedTitle';
import { useIsLinksInView } from '~/hooks/useIsLinksInView';

export const Route = createFileRoute({
  notFoundComponent: NotFound,
  component() {
    /** refs */
    const nameSectionRef = useRef<HTMLElement>(null);
    const nameButtonRef = useRef<HTMLButtonElement>(null);
    const nameRef = useRef<HTMLDivElement>(null);
    const linksSectionRef = useRef<HTMLElement>(null);
    const githubLinkRef = useRef<HTMLAnchorElement>(null);

    /** state */
    const [linksRef] = useIsLinksInView();

    /** animations */
    const titleAnimations = useAnimatedTitle();
    const subTitleRef = useAnimatedSubtitle();

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

    return (
      <>
        <section ref={nameSectionRef} tabIndex={-1}>
          <Name
            nameButtonRef={nameButtonRef}
            nameRef={nameRef}
            subTitleRef={subTitleRef}
            moveLeft={titleAnimations.moveLeft}
            moveRight={titleAnimations.moveRight}
            scrollNameIntoView={scrollNameIntoView}
            scrollLinksIntoView={scrollLinksIntoView}
          />
        </section>

        <motion.section
          ref={linksSectionRef}
          style={{ opacity: titleAnimations.linksOpacity }}
        >
          <Links linksSectionRef={linksRef} githubLinkRef={githubLinkRef} />
        </motion.section>
      </>
    );
  },
});
