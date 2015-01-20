$(document).ready(function() {
	// $('.trigger_down, .part--step_one').click(function(){
	// 		$('.trigger_down').fadeOut();
	// 		$('.part--step_one').addClass('out');
	// 		$('.part--step_cover').addClass('show');
	// 		$('.part--step_content').addClass('run');
	// 		$(this).addClass('open');
	// // });
	// function d(){  
 //     var sta="2015/01/21 00:00:00";
 //     var currentTime = new Date();
 //     var startDate = new Date(sta)
     
 //     var dif=startDate-currentTime;
 //     var s=1000;
 //     var m=1000*60;
 //     var h=1000*60*60;
 //     var d=1000*60*60*24;
     
 //     var days=Math.floor(dif/d);
 //     dif-=days*d;
 //     if (dif<=0)dif=0;
     
 //     var hours=Math.floor(dif/h);
 //     dif-=hours*h;
 //     if (dif<=0)dif=0;
     
 //     var minutes=Math.floor(dif/m);
 //     dif-=minutes*m;
 //     if (dif<=0)dif=0;
     
 //     var seconds=Math.floor(dif/s);
 //     document.querySelector('time').innerHTML="<figure><span class=\"day\">"+seconds+"</span><span>Second</span></figure><figure><span class=\"day\">"+minutes+"</span><span>Minute</span></figure><figure><span class=\"day\">"+hours+"</span><span>Hour</span></figure><figure><span class=\"day\">"+days+"</span><span>Day</span></figure>";
 //    }
 //    setInterval("d()",1000);
     // $('#demo1').flexImages({rowHeight: 140});
     $('.flex-images').flexImages({rowHeight: 360});
     var timer;
     function startCount(){timer = setInterval(count,1000);}
     function count(){var el = document.getElementById('code');var currentNumber =   parseFloat(removeCommas(el.innerHTML));el.innerHTML = addCommas(currentNumber+1);}
     function addCommas(nStr){nStr += '';x = nStr.split('.');x1 = x[0];x2 = x.length > 1 ? '.' + x[1] : '';var rgx = /(\d+)(\d{3})/;while (rgx.test(x1)) {x1 = x1.replace(rgx, '$1' + ',' + '$2');}return x1 + x2;}
     function removeCommas(aNum) {aNum=aNum.replace(/,/g,"");aNum=aNum.replace(/\s/g,"");return aNum;}
     // $('.flex-images').flexImages({rowHeight: 140});
     startCount();
});
