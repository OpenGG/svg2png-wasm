import { createRenderer } from './types';

import { createCanvas, Image } from '@napi-rs/canvas';

import assert from 'assert/strict';

let image: Image;
export default createRenderer({
  init() {
    image = new Image();
  },
  render(svg: string, svgBuff: Buffer) {
    image.src = svgBuff;

    const w = image.naturalWidth;
    const h = image.naturalHeight;

    assert.notEqual(w + h, 0, 'Svg parse error');

    const canvas = createCanvas(w, h);
    const ctx = canvas.getContext('2d');

    ctx.drawImage(image, 0, 0);

    return canvas.encode('png');
  },
});
