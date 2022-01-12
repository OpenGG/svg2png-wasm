import fs from 'fs-extra';

export const fontPath = new URL(
  '../../input/NotoSerifSC-subset.ttf',
  import.meta.url,
).pathname;

export const fontFamily = 'Noto Serif SC';

export const fontBuffer = fs.readFileSync(fontPath);
