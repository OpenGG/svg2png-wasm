import { createRenderer } from './types';
import { render } from '@resvg/resvg-js';
import { fontPath } from './font.js';

export default createRenderer({
  render: (svg) =>
    render(svg, {
      font: {
        loadSystemFonts: false,
        fontFiles: [fontPath],
      },
    }),
});
