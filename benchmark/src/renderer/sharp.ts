import { createRenderer } from './types';
import sharp from 'sharp';

export default createRenderer({
  render: (svg: string, svgBuff: Buffer) => sharp(svgBuff).png().toBuffer(),
});
