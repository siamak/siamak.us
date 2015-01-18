$(document).ready(function() {
	$('body').click(function(){
		if(!$(this).hasClass('open')){
			$('.trigger_down').fadeOut();
			$('.part--step_one').addClass('out');
			$('.part--step_cover').addClass('show');
			$('.part--step_content').addClass('run');
			$(this).addClass('open');
		}
	});
});
	function d(){  
     var sta="2015/01/21 00:00:00";
     var currentTime = new Date();
     var startDate = new Date(sta)
     
     var dif=startDate-currentTime;
     var s=1000;
     var m=1000*60;
     var h=1000*60*60;
     var d=1000*60*60*24;
     
     var days=Math.floor(dif/d);
     dif-=days*d;
     if (dif<=0)dif=0;
     
     var hours=Math.floor(dif/h);
     dif-=hours*h;
     if (dif<=0)dif=0;
     
     var minutes=Math.floor(dif/m);
     dif-=minutes*m;
     if (dif<=0)dif=0;
     
     var seconds=Math.floor(dif/s);
     document.querySelector('time').innerHTML="<figure><span class=\"day\">"+seconds+"</span><span>Second</span></figure><figure><span class=\"day\">"+minutes+"</span><span>Minute</span></figure><figure><span class=\"day\">"+hours+"</span><span>Hour</span></figure><figure><span class=\"day\">"+days+"</span><span>Day</span></figure>";
    }
    setInterval("d()",1000);