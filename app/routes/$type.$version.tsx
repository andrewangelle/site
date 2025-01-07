import { Await, createFileRoute, defer } from '@tanstack/react-router';
import { createServerFn } from '@tanstack/start';
import { Suspense } from 'react';
import { EmbeddedWidget } from '~/components/EmbeddedWidget';
// import glideCss from '~/packages/react-glide/4.1.0/package/dist/react-glide.css?url';

const fetchPipeline = createServerFn({ method: 'GET' }).handler(async () => {
  return {
    data: {
      importPath: '/packages/react-glide/4.1.0/package/dist/index.mjs',
    },
    error: undefined,
  };
});

export const Route = createFileRoute('/$type/$version')({
  head: () => ({
    links: [],
  }),
  loader: async ({ location }) => {
    return {
      pipeline: defer(fetchPipeline()),
    };
  },
  component: RouteComponent,
});

function RouteComponent() {
  const { pipeline } = Route.useLoaderData();

  return (
    <Suspense>
      <Await promise={pipeline}>
        {(result) => <EmbeddedWidget pipeline={result} />}
      </Await>
    </Suspense>
  );
}
