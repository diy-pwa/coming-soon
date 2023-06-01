export { render };

import React from 'react';
import { hydrateRoot, createRoot } from 'react-dom/client';
import PageLayout from '../components/PageLayout.jsx';

async function render(pageContext) {
  const { Page, pageProps } = pageContext;
  const domNode = document.getElementById("io_github_diy-pwa_root");
  if(domNode){
    const root = createRoot(domNode);
    root.render(
      <PageLayout>
      <Page {...pageProps} />
    </PageLayout>

    );
  }else{
    hydrateRoot(
      document.getElementsByTagName('body')[0],
      <PageLayout>
        <Page {...pageProps} />
      </PageLayout>
    );
  
  }
}
