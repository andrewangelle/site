import { createFileRoute } from '@tanstack/react-router';
import { motion } from 'motion/react';
import { useEffect } from 'react';
import { Links } from '~/components/Links';
import { Name } from '~/components/Name';
import { NotFound } from '~/components/NotFound';
import { useAnimatedName } from '~/hooks/useAnimatedName';
import { useAnimatedTitle } from '~/hooks/useAnimatedTitle';
import { useElementRefs } from '~/hooks/useElementRefs';
import { useIsLinksInView } from '~/hooks/useIsLinksInView';
import { sendPageViewMetric } from '~/services/pageViews';
import { getFingerprint, visitorsMiddleware } from '~/services/visitors';

export const Route = createFileRoute('/')({
  notFoundComponent: NotFound,
  server: {
    middleware: [visitorsMiddleware],
  },
  async loader() {
    return {
      fingerprint: await getFingerprint(),
    };
  },
  component() {
    const loader = Route.useLoaderData();
    const refs = useElementRefs();
    const [linksVisibilityRef] = useIsLinksInView();
    const nameAnimations = useAnimatedName();
    const titleRef = useAnimatedTitle();

    useEffect(() => {
      sendPageViewMetric(loader);
    }, []);

    return (
      <main>
        <section ref={refs.name.section} tabIndex={-1}>
          <Name
            nameButtonRef={refs.name.button}
            nameRef={refs.name.text}
            titleRef={titleRef}
            moveLeft={nameAnimations.moveLeft}
            moveRight={nameAnimations.moveRight}
            scrollNameIntoView={refs.name.scrollIntoView}
            scrollLinksIntoView={refs.links.scrollIntoView}
          />
        </section>

        <motion.section
          ref={refs.links.section}
          style={{ opacity: nameAnimations.linksOpacity }}
        >
          <Links
            visibilityRef={linksVisibilityRef}
            githubLinkRef={refs.links.githubLink}
            linkedinLinkRef={refs.links.linkedinLink}
            contactLinkRef={refs.links.contactLink}
            viewResumeSectionRef={refs.links.viewResumeSection}
          />
        </motion.section>
      </main>
    );
  },
});
