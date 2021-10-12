// @ts-check
import { existsSync, mkdirSync, readFileSync, rmSync, writeFileSync } from 'fs';
import glob from 'glob';
import { dirname, join } from 'path';
import { exit } from 'process';
import { fileURLToPath } from 'url';
import { createSvg2png, initialize } from '../../dist/index.mjs';

/**
 * Remove(if exists) and Make dir
 * @param {string} dir - dirname
 */
const refreshDir = (dir) => {
  if (existsSync(dir)) rmSync(dir, { recursive: true, force: true });
  mkdirSync(dir);
};

const main = async () => {
  // @ts-ignore
  const __dirname = dirname(fileURLToPath(import.meta.url));
  const fontPaths = glob.sync(join(__dirname, 'data/**/*.@(ttf|otf)'));
  const svgs = glob.sync(join(__dirname, 'data/**/*.svg'));

  await initialize(readFileSync('./svg2png_wasm_bg.wasm'));

  /** @type {import('../../dist').DefaultFontFamily} */
  const defaultFontFamily = {
    sansSerifFamily: 'Roboto',
  };

  const fonts = fontPaths.map((path) => {
    console.log('[font]', path);
    return new Uint8Array(readFileSync(path));
  });

  const svg2png = createSvg2png({
    fonts,
    defaultFontFamily,
  });

  refreshDir(join(__dirname, 'actual'));
  refreshDir(join(__dirname, 'diff'));

  await Promise.all(
    svgs.map(async (svgPath) => {
      console.log('[SVG]', svgPath);
      const png = await svg2png(readFileSync(svgPath, 'utf8'));
      if (png == null) throw new Error('Invalid data');
      writeFileSync(
        svgPath.replace(/\/data\//g, '/actual/').replace(/\.svg$/i, '.png'),
        png,
      );
    }),
  );
};

main()
  .then(() => exit(0))
  .catch((e) => {
    console.error(e);
    exit(1);
  });
