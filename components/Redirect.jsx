import getSupportedLanguage from '../src/languages.js';

export default ()=>{
    const sLang = getSupportedLanguage();
    window.location.replace(`/${sLang}`);
    return <p>moved permanently</p>
}