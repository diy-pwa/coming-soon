import getSupportedLanguage from './languages.js'; 

const sLang = getSupportedLanguage();
window.location.replace(`/${sLang}`);