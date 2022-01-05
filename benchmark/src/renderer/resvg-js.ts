import { createRenderer } from './types';
import { render } from '@resvg/resvg-js';

export default createRenderer({
  render: (svg: string) =>
    render(svg, {
      font: {
        loadSystemFonts: false,
      },
    }),
});
