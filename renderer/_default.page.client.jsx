export { render };

import React from 'react';
import { hydrateRoot } from 'react-dom/client';
import PageLayout from '../components/PageLayout.jsx';

async function render(pageContext) {
  const { Page, pageProps } = pageContext;
  hydrateRoot(
    document.getElementsByTagName('body')[0],
    <PageLayout>
      <Page {...pageProps} />
    </PageLayout>
  );
}
