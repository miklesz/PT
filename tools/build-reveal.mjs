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
      .reveal .video-embed { display: block; width: min(76vw, 980px); aspect-ratio: 16 / 9; margin: 0.55em auto 0; border: 0; }
      .reveal .video-link { display: grid; place-items: center; width: min(76vw, 980px); aspect-ratio: 16 / 9; margin: 0.55em auto 0; overflow: hidden; position: relative; background: #111; text-decoration: none; }
      .reveal .video-link img { width: 100%; max-width: none; max-height: none; height: 100%; margin: 0; object-fit: cover; }
      .reveal .video-link span { position: absolute; bottom: 1em; padding: 0.42em 0.8em; color: #fff; background: var(--pt-blue); font-size: 0.62em; font-weight: 700; }
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
      .reveal .coax-layout { display: grid; grid-template-columns: minmax(260px, 0.8fr) 1.2fr; gap: 1.1em; align-items: center; }
      .reveal .coax-cross-section { position: relative; width: 250px; aspect-ratio: 1; margin: 0 auto 0.35em; border-radius: 50%; background: #27333b; }
      .reveal .coax-cross-section div { position: absolute; border-radius: 50%; display: grid; place-content: center; }
      .reveal .coax-insulation { inset: 12%; background: #e8e4c7; }
      .reveal .coax-shield { inset: 25%; background: repeating-radial-gradient(circle, #7b8790 0 3px, #c6ccd0 4px 6px); }
      .reveal .coax-core { inset: 40%; background: #bd6b2d; }
      .reveal .coax-legend { display: grid; grid-template-columns: 1fr 1fr; gap: 0.28em 0.6em; font-size: 0.55em; }
      .reveal .coax-legend span::before { content: ''; display: inline-block; width: 0.8em; height: 0.8em; margin-right: 0.35em; vertical-align: -0.05em; border-radius: 50%; }
      .reveal .coax-legend .outer::before { background: #27333b; }
      .reveal .coax-legend .shield::before { background: #8c979d; }
      .reveal .coax-legend .insulation::before { background: #e8e4c7; }
      .reveal .coax-legend .core::before { background: #bd6b2d; }
      .reveal .fiber-layout { display: grid; grid-template-columns: minmax(260px, 0.8fr) 1.2fr; gap: 1.1em; align-items: center; }
      .reveal .fiber-cross-section { position: relative; width: 250px; aspect-ratio: 1; margin: 0 auto 0.35em; border-radius: 50%; background: #293b46; }
      .reveal .fiber-cross-section div { position: absolute; border-radius: 50%; display: grid; place-content: center; }
      .reveal .fiber-cladding { inset: 13%; background: #c6e4e7; }
      .reveal .fiber-core { inset: 37%; background: #f2be58; }
      .reveal .fiber-legend { display: grid; grid-template-columns: repeat(3, 1fr); gap: 0.3em; font-size: 0.55em; text-align: center; }
      .reveal .fiber-legend span::before { content: ''; display: inline-block; width: 0.8em; height: 0.8em; margin-right: 0.3em; vertical-align: -0.05em; border-radius: 50%; }
      .reveal .fiber-legend .coating::before { background: #293b46; }
      .reveal .fiber-legend .cladding::before { background: #c6e4e7; }
      .reveal .fiber-legend .core::before { background: #f2be58; }
      .reveal .network-scale { display: grid; grid-template-columns: repeat(4, 1fr); gap: 0.45em; align-items: end; max-width: 980px; min-height: 270px; margin: 0.75em auto 0; padding: 0 0.25em 0.45em; border-bottom: 3px solid var(--pt-blue); }
      .reveal .network-scale > div { display: grid; place-content: center; text-align: center; padding: 0.35em; color: #fff; font-size: 0.64em; line-height: 1.15; }
      .reveal .network-scale strong { color: inherit; font-size: 1.25em; }
      .reveal .network-scale .pan { min-height: 3.4em; background: #007c91; }
      .reveal .network-scale .lan { min-height: 5.1em; background: #0071a8; }
      .reveal .network-scale .man { min-height: 6.8em; background: #4f7f3d; }
      .reveal .network-scale .wan { min-height: 8.6em; background: #b35c2e; }
      .reveal .comparison-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 0.65em 1em; margin: 0.55em auto; max-width: 1050px; }
      .reveal .comparison-grid > div { border-left: 6px solid var(--pt-cyan); padding: 0.25em 0.55em; font-size: 0.72em; }
      .reveal .comparison-grid strong { display: block; margin-bottom: 0.12em; }
      .reveal .timeline { display: grid; grid-template-columns: repeat(4, 1fr); gap: 0.5em; align-items: end; margin: 1em auto 0; max-width: 1050px; border-bottom: 3px solid var(--pt-blue); }
      .reveal .timeline > div { min-height: 8em; padding: 0.55em 0.35em; display: grid; align-content: center; background: #e7edf6; text-align: center; font-size: 0.65em; border-top: 6px solid var(--pt-cyan); }
      .reveal .timeline > div:nth-child(2) { min-height: 9.2em; background: #dceef2; }
      .reveal .timeline > div:nth-child(3) { min-height: 10.4em; background: #eff0df; }
      .reveal .timeline > div:nth-child(4) { min-height: 11.6em; background: #f4e6d5; }
      .reveal .wifi-speed-chart { display: grid; grid-template-columns: repeat(8, 1fr); gap: 0.45em; align-items: end; max-width: 1080px; height: 10em; margin: 0.3em auto 0; padding: 0 0.1em; border-bottom: 3px solid var(--pt-blue); }
      .reveal .wifi-speed-chart > div { display: flex; flex-direction: column; justify-content: end; align-items: stretch; height: 100%; text-align: center; }
      .reveal .wifi-speed-chart .rate { min-height: 1.45em; display: grid; place-content: end center; color: var(--pt-blue); font-size: 0.46em; font-weight: 700; }
      .reveal .wifi-speed-chart .bar { height: var(--bar-height); min-height: 0.35em; background: #007c91; border-top: 5px solid #003b70; }
      .reveal .wifi-speed-chart > div:nth-child(2n) .bar { background: #0071a8; }
      .reveal .wifi-speed-chart > div:nth-child(3n) .bar { background: #4f7f3d; }
      .reveal .wifi-speed-chart > div:nth-child(4n) .bar { background: #b35c2e; }
      .reveal .wifi-speed-chart strong { margin-top: 0.35em; font-size: 0.45em; }
      .reveal .wifi-speed-chart .year { color: var(--pt-muted); font-size: 0.4em; }
      .reveal .wifi-standard-table { display: grid; grid-template-columns: 1.1fr 0.82fr 0.95fr 1.2fr 0.8fr; max-width: 1080px; margin: 0.4em auto 0; font-size: 0.47em; line-height: 1.15; border-top: 2px solid var(--pt-blue); border-left: 2px solid var(--pt-blue); }
      .reveal .wifi-standard-table > div { display: grid; align-items: center; padding: 0.28em 0.36em; background: #f7fafc; border-right: 1px solid #aebbc5; border-bottom: 1px solid #aebbc5; }
      .reveal .wifi-standard-table .head { background: var(--pt-blue); color: #fff; font-weight: 700; }
      .reveal .wifi-standard-table .rate { justify-content: end; text-align: right; }
      .reveal .protocol-map { display: grid; grid-template-columns: 1.2fr 1fr; gap: 0.4em 0.7em; max-width: 900px; margin: 0.6em auto; }
      .reveal .protocol-map > div { padding: 0.4em 0.55em; background: #e7edf6; font-size: 0.72em; }
      .reveal .protocol-map .head { background: var(--pt-blue); color: #fff; font-weight: 700; }
      .reveal .media-gallery { display: grid; grid-template-columns: repeat(3, 1fr); gap: 0.7em; align-items: center; }
      .reveal .media-gallery img { width: 100%; max-width: 100%; max-height: 48vh; margin: 0; }
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
