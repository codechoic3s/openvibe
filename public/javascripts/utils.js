function cookieSet(name, value){
    document.cookie = `${name}=${value}; expires=Fri, 31 Dec 9999 23:59:59 GMT`;
}

function cookieGet(name){
    if(document.cookie.includes(name)){
        return document.cookie.replace(/(?:(?:^|.*;\s*)player-value\s*\=\s*([^;]*).*$)|^.*$/, "$1");
    }
    else return null
}