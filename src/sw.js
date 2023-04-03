import { StaleWhileRevalidate } from 'workbox-strategies';
import { CacheableResponsePlugin } from 'workbox-cacheable-response';
import { i18nHandler } from 'service-worker-i18n-redirect';
import { preferences } from 'service-worker-i18n-redirect/preferences';
import { registerRoute } from 'workbox-routing';

// Create a caching strategy
const htmlCachingStrategy = new StaleWhileRevalidate({
  cacheName: 'pages-cache',
  plugins: [
    new CacheableResponsePlugin({
      statuses: [200],
    }),
  ],
});

// Array of supported localizations
const languages = ['en', 'fr'];

// Use it for navigations
registerRoute(
  async ({ request }) => {
    let isNavigate = false;
    let oUrl = new URL(request.url);
    if(oUrl.pathname == '/'){
      isNavigate = true;
    }
    return isNavigate;
  },
  async () => {
    const sAccept = navigator.language;
    let sLang = null;
    for(let n= 0; n < languages.length; n++){
        const re = new RegExp(`^${languages[n]}`);
        if(sAccept.match(re)){
            // there is a language that is in navigator.language
            sLang = languages[n];
            break;
        }
    }
    if(!sLang){
        sLang =  languages[0];
    }
    return Response.redirect(`/${sLang}`, 302);
}
);
