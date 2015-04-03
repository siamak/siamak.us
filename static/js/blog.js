/*!
  ____    _                               _        __  __           _      _       _                    _ 
 / ___|  (_)   __ _   _ __ ___     __ _  | | __   |  \/  |   ___   | | __ | |__   | |_    __ _   _ __  (_)
 \___ \  | |  / _` | | '_ ` _ \   / _` | | |/ /   | |\/| |  / _ \  | |/ / | '_ \  | __|  / _` | | '__| | |
  ___) | | | | (_| | | | | | | | | (_| | |   <    | |  | | | (_) | |   <  | | | | | |_  | (_| | | |    | |
 |____/  |_|  \__,_| |_| |_| |_|  \__,_| |_|\_\   |_|  |_|  \___/  |_|\_\ |_| |_|  \__|  \__,_| |_|    |_|
 Under licensed [MIT](http://siamak.mit-license.org) - April 2015 [version: 1.2] .
*/


var rnd = Math.floor(Math.random() * 10);
document.querySelector('.__quotes').childNodes[rnd].classList.add('show');

var socialGetter = (function() {
    function injectScript(url) {
        var script = document.createElement('script');
        script.async = true;
        script.src = url;
        document.body.appendChild(script);
    }

    return {
        getTwitterCount: function(url, callbackName) {
            injectScript('http://urls.api.twitter.com/1/urls/count.json?url=' + url + '&callback=' + callbackName);
        }
    };
})();

function twitterCallback(result) {
    if(document.getElementById('tweets')){
        document.getElementById('tweets').innerHTML = result.count;        
    }
}

socialGetter.getTwitterCount(document.URL, 'twitterCallback');


function addClass(d,c){
    if(!hasClass(d,c)){d.className+=" "+c}
}
function hasClass(b,a){
    return new RegExp(" "+a+" ").test(" "+b.className+" ")
}
function hasClass(d,c){
    return d.className.match(new RegExp("(\\s|^)"+c+"(\\s|$)"))
}

var pres = document.querySelectorAll('pre'),
    len  = pres.length;

for(i = 0; i < len; i++){
    if(!hasClass(pres[i],"raw")){
        addClass(pres[i],"prettyprint");
        addClass(pres[i],"linenums")}
    }
prettyPrint();

document.querySelector('html').className += '_isLoad';
