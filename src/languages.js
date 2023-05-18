// Array of supported localizations
const languages = ['en', 'fr'];

export default ()=>{
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
    return sLang;
}