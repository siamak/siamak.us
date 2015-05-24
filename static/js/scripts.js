/*!
  ____    _                               _        __  __           _      _       _                    _ 
 / ___|  (_)   __ _   _ __ ___     __ _  | | __   |  \/  |   ___   | | __ | |__   | |_    __ _   _ __  (_)
 \___ \  | |  / _` | | '_ ` _ \   / _` | | |/ /   | |\/| |  / _ \  | |/ / | '_ \  | __|  / _` | | '__| | |
  ___) | | | | (_| | | | | | | | | (_| | |   <    | |  | | | (_) | |   <  | | | | | |_  | (_| | | |    | |
 |____/  |_|  \__,_| |_| |_| |_|  \__,_| |_|\_\   |_|  |_|  \___/  |_|\_\ |_| |_|  \__|  \__,_| |_|    |_|
 Under licensed [MIT](http://siamak.mit-license.org) - April 2015 [version: 1.2] .
*/

//- Variables
var el = document.querySelector('.wrapper--middle'),
	eb = document.querySelector('.__ribbons'),
	AnimScroll;

//- is Mobile ?!
var isMobile = {
	Android: function() {
		return navigator.userAgent.match(/Android/i);
	},
	BlackBerry: function() {
		return navigator.userAgent.match(/BlackBerry/i);
	},
	iOS: function() {
		return navigator.userAgent.match(/iPhone|iPad|iPod/i);
	},
	Opera: function() {
		return navigator.userAgent.match(/Opera Mini/i);
	},
	Windows: function() {
		return navigator.userAgent.match(/IEMobile/i);
	},
	any: function() {
		return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
	}
};

if(!isMobile.any()){
	scrollStarted();
}
else{ 
	document.body.className += " touch";
	stickyMobile();
}

//- PageActive
function setPageLoaded() {
	if(document.body.className.indexOf("Page-Active") < 0) document.body.className += " Page-Active";
}
setTimeout(setPageLoaded, 4500);


//- HiddenRibbons
/* function setOffRibbon() {
	eb.style.display = 'none';
}
setTimeout(setOffRibbon, 100000);

Please Down Edit!
*/


function DOMsParser(){
    var string = document.getElementsByClassName('parser');
    for (var i = 0; i < string.length; ++i) {
        var str = string[i].textContent,
        	place = document.createElement('p');
			place.innerHTML = str;

        string[i].innerHTML = '';
		string[i].appendChild(place);
    }
}
DOMsParser();

function stickyMobile(){
	window.addEventListener('orientationchange', function(){
		var height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight,
			heightProject = document.querySelector('.projects').clientHeight;
	});
	
	var height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight,
		heightProject = document.querySelector('.projects').clientHeight;
	
	window.addEventListener("scroll", function(){
		var ScrollTop = window.scrollY;
		if(ScrollTop > height){
			document.querySelector('.title__float').classList.add("here");
		}
		if(ScrollTop < height){
			document.querySelector('.title__float').classList.remove("here");
		}
		if(ScrollTop > (height + heightProject - (heightProject/ 6))){
			document.querySelector('.title__float').classList.remove("here");
		}
	});
}


/*
	– Using requestAnimationFrame (High Performance)
	Polyfill: http://www.paulirish.com/2011/requestanimationframe-for-smart-animating/
*/

(function() {
    var lastTime = 0;
    var vendors = ['webkit', 'moz'];
    for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
        window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
        window.cancelAnimationFrame =
          window[vendors[x]+'CancelAnimationFrame'] || window[vendors[x]+'CancelRequestAnimationFrame'];
    }

    if (!window.requestAnimationFrame)
        window.requestAnimationFrame = function(callback, element) {
            var currTime = new Date().getTime();
            var timeToCall = Math.max(0, 16 - (currTime - lastTime));
            var id = window.setTimeout(function() { callback(currTime + timeToCall); },
              timeToCall);
            lastTime = currTime + timeToCall;
            return id;
        };

    if (!window.cancelAnimationFrame)
        window.cancelAnimationFrame = function(id) {
            clearTimeout(id);
        };
}());


function scrollStarted(){

	window.addEventListener("resize", function(){
		var height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
	});

	window.addEventListener("scroll", function(){
		var currentScroll = window.scrollY,
			height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight,
			heightProject = document.querySelector('.projects').clientHeight;
		
		height = height - 50;

		if(currentScroll > height){
			document.querySelector('.title__float').classList.add("here");
		}

		if(currentScroll < height){
			document.querySelector('.title__float').classList.remove("here");
		}

		if(currentScroll > (height + heightProject - (heightProject/ 4))){
			document.querySelector('.title__float').classList.remove("here");
		}

		requestAnimationFrame(Scroller);
	});

}


function Scroller(){
	var currentScroll = window.scrollY,
		slowScroll = currentScroll / 12 + 'px';

	el.style.transform = "translateY("+slowScroll+")";
	el.style.opacity   = 1 - (currentScroll / 350);
	AnimScroll = requestAnimationFrame(Scroller);
}


function showRSS(username, type) {
    var el = document.getElementById("result");

    el.innerHTML = "Loading...";

    if (window.XMLHttpRequest) { xmlhttp=new XMLHttpRequest(); } else { xmlhttp=new ActiveXObject("Microsoft.XMLHTTP"); }

    xmlhttp.open("GET","http://codepen.io/"+username+"/"+type+"/feed/", true);
    xmlhttp.onreadystatechange=function() {
        if (xmlhttp.readyState==4 && xmlhttp.status==200) {

            if (window.DOMParser){
                parser = new DOMParser();
                doc = parser.parseFromString(xmlhttp.responseText,"text/xml");
            } else {
                doc = new ActiveXObject("Microsoft.XMLDOM");
                doc.async = false;
                doc.loadXML(xmlhttp.responseText);
            }

            var l = doc.getElementsByTagName("item").length;
            
            l = Math.floor((Math.random() * l));

            var root     = doc.getElementsByTagName("item")[l],
                PenTitle = root.childNodes[1].innerHTML,
                PenURL   = root.childNodes[3].innerHTML;

            el.innerHTML = "• "+PenTitle;
            el.setAttribute('href', PenURL);
        }
    }
    xmlhttp.send(null);
}

showRSS('siamak', 'public');