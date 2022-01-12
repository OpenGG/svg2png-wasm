import { add, complete, configure, cycle, suite } from 'benny';
import type { Summary } from 'benny/lib/internal/common-types';
import Renderers from './renderer';
const rendererEntries = Object.entries(Renderers);

const sanitize = (name: string) => name.replace(/[^-_a-zA-Z0-9]/g, '_');

type OutputValue = {
  filename: string;
  buffer: Uint8Array;
};

type Outputs = Record<string, OutputValue>;

export const init = async ({
  title,
  svg,
  svgBuffer,
}: {
  title: string;
  svg: string;
  svgBuffer: Buffer;
}): Promise<Outputs> => {
  const res = await Promise.all(
    rendererEntries.map(async ([rendererName, renderer]) => {
      if (renderer.init) {
        await renderer.init();
      }

      const buffer = await renderer.render(svg, svgBuffer);

      const filename = `${sanitize(title)}-${sanitize(rendererName)}.png`;

      return [rendererName, { filename, buffer }] as const;
    }),
  );
  return Object.fromEntries<OutputValue>(res);
};

export const benchmark = ({
  title,
  svg,
  svgBuffer,
}: {
  title: string;
  svg: string;
  svgBuffer: Buffer;
}): Promise<Summary> =>
  suite(
    `Convert SVG to PNG: ${title}`,
    ...rendererEntries.map(([rendererName, renderer]) =>
      add(rendererName, () => renderer.render(svg, svgBuffer)),
    ),
    cycle(),
    complete(),
    configure({
      minDisplayPrecision: 2,
    }),
  );
