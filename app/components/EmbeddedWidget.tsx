import { type ComponentType, Suspense, lazy } from 'react';

export function EmbeddedWidget({
  pipeline,
}: {
  pipeline: {
    data: { importPath: string };
    error: undefined;
  };
}) {
  const glideProps = {
    height: 600,
    width: 600,
    autoPlay: true,
    autoPlaySpeed: 5000,
    infinite: true,
    dots: false,
  };

  const LazyLoaded = lazy<ComponentType<typeof glideProps>>(async () => {
    const widget = await import(
      /* @vite-ignore */ `../${pipeline.data.importPath}`
    );
    const widgetName = 'Glide';
    return {
      default: widget[widgetName],
    };
  });

  return (
    <Suspense fallback={<div>Loading ...</div>}>
      <LazyLoaded {...glideProps}>
        <img alt="photo1" src="https://picsum.photos/id/312/600/600" />
        <img alt="photo2" src="https://picsum.photos/id/313/600/600" />
        <img alt="photo3" src="https://picsum.photos/id/314/600/600" />
      </LazyLoaded>
    </Suspense>
  );
}
