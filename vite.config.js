import react from '@vitejs/plugin-react';
import mdx from '@mdx-js/rollup';
import ssr from 'vite-plugin-ssr/plugin';
import {rollup} from 'rollup';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';

const CompileServiceWorker = () => ({
  name: 'compile-service-worker',
  async writeBundle(_options, _outputBundle) {
    const inputOptions = {
      input: 'src/sw.js',
      plugins: [
        replace({
          'process.env.NODE_ENV': JSON.stringify('production')
        }),
        nodeResolve()
      ]
    }
    const outputOptions = {
      file: 'dist/client/sw.js',
      format: 'es',
    }
    const bundle = await rollup(inputOptions)
    await bundle.write(outputOptions)
    await bundle.close()
  }
})

const CompileMain = () => ({
  name: 'compile-main',
  async writeBundle(_options, _outputBundle) {
    const inputOptions = {
      input: 'src/main.js',
      plugins: [
        replace({
          'process.env.NODE_ENV': JSON.stringify('production')
        }),
        nodeResolve()
      ]
    }
    const outputOptions = {
      file: 'dist/client/main.js',
      format: 'es',
    }
    const bundle = await rollup(inputOptions)
    await bundle.write(outputOptions)
    await bundle.close()
  }
})

export default {
  plugins: [
    CompileServiceWorker(),
    CompileMain(),
    react(),
    mdx(),
    ssr({
      prerender: true,
      includeAssetsImportedByServer: true,
    }),
  ]
};
