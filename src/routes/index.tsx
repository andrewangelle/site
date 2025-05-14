import { motion } from 'motion/react';
import { Links } from '~/components/Links';
import { Name } from '~/components/Name';
import { NotFound } from '~/components/NotFound';
import { useAnimatedSubtitle } from '~/hooks/useAnimatedSubtitle';
import { useAnimatedTitle } from '~/hooks/useAnimatedTitle';
import { useElementRefs } from '~/hooks/useElementRefs';
import { useIsLinksInView } from '~/hooks/useIsLinksInView';

export const Route = createFileRoute({
  notFoundComponent: NotFound,
  component() {
    const refs = useElementRefs();
    const [linksVisibilityRef] = useIsLinksInView();
    const titleAnimations = useAnimatedTitle();
    const subTitleRef = useAnimatedSubtitle();

    return (
      <main>
        <section ref={refs.name.section} tabIndex={-1}>
          <Name
            nameButtonRef={refs.name.button}
            nameRef={refs.name.text}
            subTitleRef={subTitleRef}
            moveLeft={titleAnimations.moveLeft}
            moveRight={titleAnimations.moveRight}
            scrollNameIntoView={refs.name.scrollIntoView}
            scrollLinksIntoView={refs.links.scrollIntoView}
          />
        </section>

        <motion.section
          ref={refs.links.section}
          style={{ opacity: titleAnimations.linksOpacity }}
        >
          <Links
            visibilityRef={linksVisibilityRef}
            githubLinkRef={refs.links.githubLink}
          />
        </motion.section>
      </main>
    );
  },
});
