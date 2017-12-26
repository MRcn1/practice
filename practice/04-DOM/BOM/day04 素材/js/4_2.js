var divs=document.getElementById('s');
var divm=document.getElementById('m');
var divh=document.getElementById('h')
function task(){
	var now=new Date();
	var s=now.getSeconds();
	var sDeg=s/60*360;
	var m=now.getMinutes();
	var mDeg=(m*60+s)/3600*360;
	var h=now.getHours();
	var hDeg=(h*3600+m*60+s)/(3600*12)*360
	divs.style.transform=`rotate($(sDeg)deg)`
	divm.style.transform=`rotate($(mDeg)deg)`
	divh.style.transform=`rotate($(hDeg)deg)`
}

task()
setInterval(task,1000)
