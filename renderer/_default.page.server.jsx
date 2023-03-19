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
        <meta name="description" content="${documentProps.description}" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>
        <div id="page-view">${stream}</div>
      </body>
    </html>`;
}