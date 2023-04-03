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
    if(request.mode === 'navigate'){
        isNavigate = true;
        const language = await preferences.get('lang');
        if (language === undefined) {
            let isLang = false;
            for(let n = 0; n < languages.length; n++){
                const re = new RegExp(`/${languages[n]}`);
                if(request.url.match(re)){
                    // there is a language in url
                    preferences.set('lang', languages[n]);
                    isLang = true;
                    break;
                }
            }
            if(!isLang){
                const sAccept = navigator.language;
                for(let n= 0; n < languages.length; n++){
                    const re = new RegExp(`^${languages[n]}`);
                    if(sAccept.match(re)){
                        // there is a language that is in navigator.language
                        preferences.set('lang', languages[n]);
                        isLang = true;
                    }
                }
            }
            if(!isLang){
                preferences.set('lang', languages[0]);
            }
        }    
    }
    return isNavigate;
},
  i18nHandler(languages, preferences, htmlCachingStrategy),
);
