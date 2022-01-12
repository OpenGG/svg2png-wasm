import { createRenderer } from './types';
import { createCanvas, Image, GlobalFonts } from '@napi-rs/canvas';

import assert from 'assert/strict';
import { fontFamily, fontPath } from './font.js';

let image: Image;
export default createRenderer({
  init() {
    GlobalFonts.registerFromPath(fontPath);

    const font = GlobalFonts.families.find(
      ({ family }) => family === fontFamily,
    );

    assert.ok(font, 'Failed to resolve font family');

    image = new Image();
  },
  render(svg, svgBuffer) {
    image.src = svgBuffer;

    const w = image.naturalWidth;
    const h = image.naturalHeight;

    assert.notEqual(w + h, 0, 'Svg parse error');

    const canvas = createCanvas(w, h);
    const ctx = canvas.getContext('2d');

    ctx.drawImage(image, 0, 0);

    return canvas.encode('png');
  },
});
