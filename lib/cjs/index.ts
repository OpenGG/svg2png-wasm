import { createConverter } from '../../pkg-node';

export type ConvertOptions = {
  scale?: number;
  width?: number;
  height?: number;
  fonts?: Uint8Array[];
};

export const svg2png = async (svg: string, opts?: ConvertOptions) => {
  const converter = createConverter();
  opts?.fonts?.forEach((f) => converter.registerFont(f));
  const result = converter.convert(svg, opts?.scale, opts?.width, opts?.height);
  converter.free();
  return result;
};