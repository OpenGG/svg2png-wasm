export type Render = (
  svg: string,
  svgBuff: Buffer,
) => Uint8Array | Promise<Uint8Array>;

export type Renderer = {
  init?: () => void | Promise<void>;
  render: Render;
};

export const createRenderer = (r: Renderer) => r;
