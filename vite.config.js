import react from '@vitejs/plugin-react';
import mdx from '@mdx-js/rollup';
import ssr from 'vite-plugin-ssr/plugin';

export default {
  plugins: [
    react(),
    mdx(),
    ssr({
      prerender: true,
      includeAssetsImportedByServer: true,
    }),
  ]
};
