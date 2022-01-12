import { readFile } from 'fs/promises';
import { initialize, svg2png } from 'svg2png-wasm';
import { fontBuffer } from './font.js';
import { createRenderer } from './types';

let inited = false;

export default createRenderer({
  init: async () => {
    if (inited) {
      return;
    }
    inited = true;

    const buffer = await readFile('../svg2png_wasm_bg.wasm');

    await initialize(buffer);
  },
  render: (svg) =>
    svg2png(svg, {
      fonts: [fontBuffer],
    }),
});
