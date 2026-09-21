import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { basename, dirname, resolve } from 'node:path';

const source = process.argv[2];

if (!source) {
  console.error('Usage: node tools/build-reveal.mjs lectures/<lecture>/lecture.md');
  process.exit(1);
}

const sourcePath = resolve(source);
const markdown = await readFile(sourcePath, 'utf8');
const outputPath = resolve(dirname(sourcePath), 'lecture.html');
const title = markdown.match(/^#\s+(.+)$/m)?.[1] ?? basename(dirname(sourcePath));
const embeddedMarkdown = markdown.replaceAll('</textarea', '<\\/textarea');

const html = `<!doctype html>
<html lang="pl">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>${title}</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/reveal.js@5.2.1/dist/reveal.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/reveal.js@5.2.1/dist/theme/white.css">
    <style>
      :root { --pt-blue: #003b70; --pt-cyan: #007c91; --pt-ink: #13212e; --pt-muted: #587083; }
      .reveal { color: var(--pt-ink); font-family: Arial, Helvetica, sans-serif; font-size: 34px; }
      .reveal .slides { text-align: left; }
      .reveal h1, .reveal h2, .reveal h3 { color: var(--pt-blue); font-family: Arial, Helvetica, sans-serif; font-weight: 700; letter-spacing: 0; text-transform: none; }
      .reveal h1 { font-size: 1.75em; margin-bottom: 0.35em; }
      .reveal h2 { font-size: 1.3em; margin-bottom: 0.55em; }
      .reveal p, .reveal li { line-height: 1.32; }
      .reveal ul { margin-top: 0.25em; }
      .reveal li + li { margin-top: 0.25em; }
      .reveal a { color: var(--pt-cyan); text-decoration: underline; }
      .reveal strong { color: var(--pt-blue); }
      .reveal img { display: block; max-height: 48vh; max-width: 78%; margin: 0.6em auto 0; object-fit: contain; border: 0; box-shadow: none; }
      .reveal video { display: block; width: min(76vw, 980px); max-height: 58vh; margin: 0.55em auto 0; }
      .reveal .title-slide { text-align: center; }
      .reveal .title-slide h1 { font-size: 1.9em; }
      .reveal .title-slide p { color: var(--pt-muted); }
      .reveal .section-slide { display: grid !important; place-content: center; text-align: center; }
      .reveal .section-slide h1, .reveal .section-slide h2 { font-size: 2em; }
      .reveal .columns { display: grid; grid-template-columns: 1fr 1fr; gap: 1.2em; align-items: start; }
      .reveal .small { font-size: 0.72em; }
      .reveal .credits { color: var(--pt-muted); font-size: 0.52em; margin-top: 0.35em; }
      .reveal .stack { display: grid; grid-template-columns: repeat(7, 1fr); gap: 0.22em; margin: 0.35em auto; max-width: 950px; }
      .reveal .stack > div { border: 2px solid var(--pt-blue); padding: 0.35em 0.18em; min-height: 4.3em; display: grid; place-content: center; text-align: center; font-size: 0.55em; }
      .reveal .stack .tcp { grid-column: span 3; background: #dceef2; }
      .reveal .stack .net { background: #e7edf6; }
      .reveal .stack .link { grid-column: span 2; background: #eff0df; }
      .reveal .packet { display: flex; margin: 0.7em auto; max-width: 850px; border: 2px solid var(--pt-blue); font-size: 0.7em; }
      .reveal .packet span { padding: 0.45em 0.75em; border-right: 2px solid var(--pt-blue); text-align: center; flex: 1; }
      .reveal .packet span:last-child { border-right: 0; flex: 2; }
      .reveal .slide-number { color: var(--pt-muted); left: 22px; right: auto; bottom: 18px; }
      .reveal .controls { right: 18px; bottom: 18px; }
      @media (max-width: 800px) { .reveal { font-size: 25px; } .reveal img { max-width: 94%; } .reveal .columns { grid-template-columns: 1fr; gap: 0; } }
    </style>
  </head>
  <body>
    <div class="reveal"><div class="slides">
      <section data-markdown><textarea data-template>
${embeddedMarkdown}
      </textarea></section>
    </div></div>
    <script src="https://cdn.jsdelivr.net/npm/reveal.js@5.2.1/dist/reveal.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/reveal.js@5.2.1/plugin/markdown/markdown.js"></script>
    <script>
      Reveal.initialize({ hash: true, slideNumber: 'c/t', controlsTutorial: false, transition: 'fade', transitionSpeed: 'fast', plugins: [RevealMarkdown] });
    </script>
  </body>
</html>`;

await mkdir(dirname(outputPath), { recursive: true });
await writeFile(outputPath, html);
console.log(`Built ${outputPath}`);
