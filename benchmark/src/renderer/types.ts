export type Render = (
  svg: string,
  svgBuffer: Buffer,
) => Uint8Array | Promise<Uint8Array>;

type Init = () => void | Promise<void>;

export type Renderer = {
  init?: Init;
  render: Render;
};

export const createRenderer = (r: Renderer) => r;
