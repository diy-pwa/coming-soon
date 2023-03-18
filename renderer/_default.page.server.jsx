import React from 'react';
import { renderToStream } from 'react-streaming/server';
import { escapeInject } from 'vite-plugin-ssr';
import { PageLayout } from '../components/PageLayout';

export { render };
export { passToClient };

// See https://vite-plugin-ssr.com/data-fetching
const passToClient = ['pageProps'];

async function render(pageContext) {
  const { Page, pageProps, userAgent } = pageContext;
  const { documentProps } = pageContext.exports;
  const stream = await renderToStream(
    <PageLayout>
      <Page {...pageProps} />
    </PageLayout>,
    { userAgent }
  );

  return escapeInject`<!DOCTYPE html>
    <html>
      <head>
        <title>${documentProps.title}</title>
      </head>
      <body>
        <div id="page-view">${stream}</div>
      </body>
    </html>`;
}