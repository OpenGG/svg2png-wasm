import envinfo from 'envinfo';
import fetch from 'node-fetch';
import { remove, ensureDir, outputFile } from 'fs-extra';
import { exit } from 'process';
import { init, benchmark } from './benchmark';
import Renderer from './renderer';
import { readFile } from 'fs/promises';

const svgUrlMap = {
  icon: '../logo.svg',
  tiger: './input/tiger.svg',
  text: './input/text.svg',
  animeGirl: './input/animeGirl.svg',
};

const imageDir = 'results';

const load = async (url: string) => {
  if (url.startsWith('http')) {
    const res = await fetch(url);
    const ab = await res.arrayBuffer();
    return Buffer.from(ab);
  }

  return readFile(url);
};

const createMarkdown = (reports: string[], env: string) => `
# svg2png-wasm benchmark

\`\`\`yaml
${env.replace(/^[\r\n]+/, '').replace(/[\r\n]+$/, '')}
\`\`\`

${reports.join('\n')}
`;

const createReport = async (
  title: string,
  svgUrl: string,
  imageDir: string,
): Promise<string> => {
  const ab = await load(svgUrl);
  const buff = Buffer.from(ab);
  const svg = buff.toString('utf8');

  // first run: init renderers, draw png and save
  const outputs = await init(title, svg, buff);

  await Promise.all(
    Object.values(outputs).map(({ filename, buffer }) =>
      outputFile(`${imageDir}/${filename}`, buffer),
    ),
  );

  // bench suite
  const summary = await benchmark(title, svg, buff);

  return `
## ${title}

Source SVG: [${title}](${svgUrl})

|Renderer|Speed|Output|
|:-------|----:|:----:|
${summary.results
  .map(({ name, ops, margin }) => {
    const emphasis = name === summary.fastest.name ? '**' : '';
    const entries = [
      name,
      `${emphasis}${ops} ops/s, ±${margin}%${emphasis}`,
      `![${name} output](${imageDir}/${outputs[name].filename})`,
    ];
    return `|${entries.join('|')}|`;
  })
  .join('\n')}

_${summary.date.toString()}_
`;
};

const main = async () => {
  const reports: string[] = [];
  const entries = Object.entries(svgUrlMap);
  // Benchmarks should not parallelize.

  await remove(imageDir);
  await ensureDir(imageDir);
  for (const [title, svgUrl] of entries) {
    const r = await createReport(title, svgUrl, imageDir);
    reports.push(r);
  }
  const env = await envinfo.run({
    System: ['OS', 'CPU', 'Memory'],
    Binaries: ['Node', 'npm'],
    npmPackages: Object.keys(Renderer),
  });
  const markdown = createMarkdown(reports, env);
  await outputFile('README.md', markdown);
};

main()
  .then(() => exit(0))
  .catch((e) => {
    console.error(e);
    exit(1);
  });
