import { createFileRoute } from '@tanstack/react-router';
import chroma from 'chroma-js';
import { useRef } from 'react';
import indexCss from '~/styles/colors.css?url';

export interface ColorResultOptions {
  color: string;
  baseShade: number;
  shades: number[];
}

function generateColorPalette(
  options: ColorResultOptions,
): Record<number, string> {
  console.log(chroma(options.color).darken());
  return options.shades.reduce((acc: Record<string, string>, shade: number) => {
    acc[shade] = chroma(options.color)
      .darken((shade - options.baseShade) / 100 / 2.5)
      .hex()
      .toUpperCase();
    return acc;
  }, {});
}

export const Route = createFileRoute('/colors')({
  head: () => ({
    links: [{ rel: 'stylesheet', href: indexCss }],
  }),
  component: RouteComponent,
});

function RouteComponent() {
  const palette = generateColorPalette({
    color: '#113DCA',
    baseShade: 600,
    shades: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900],
  });

  const container = useRef<HTMLDivElement | null>(null);

  return (
    <div className="container" ref={container}>
      <h3 style={{ color: 'black' }}>{chroma('#113DCA').darken(0.1).hex()}</h3>
      {/* <DialogDemo ref={container} /> */}
      {Object.entries(palette).map(([key, value]) => {
        return (
          <div key={value} className="box-container">
            <div className="box" style={{ background: value }} />
            <h3>
              <strong>{key} :</strong> {value}
            </h3>
          </div>
        );
      })}
    </div>
  );
}
