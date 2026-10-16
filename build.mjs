import { build } from 'esbuild';
import { copyFile } from 'node:fs/promises';
await build({
  entryPoints: ['src/completion.jsx'],
  outfile: 'dist/completion.js',
  bundle: true,
  minify: true,
  format: 'iife',
  jsx: 'automatic',
  target: ['es2020'],
  define: { 'process.env.NODE_ENV': '"production"' },
  legalComments: 'linked'
});
await copyFile('src/components/REACT-BITS-LICENSE.md', 'dist/REACT-BITS-LICENSE.md');
console.log('Built React Bits completion effect.');
