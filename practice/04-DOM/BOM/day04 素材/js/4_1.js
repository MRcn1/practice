var span=document.getElementById('time');
function task(){
	var now=new Date();
	var target=new Date('2018/01/28');
	var s=parseInt((target-now)/1000);
	if(s>0){
		var days=parseInt(s/3600/24);
		var hs=parseInt(s/3600%24);
		var ms=parseInt(s/60%60);
		var ss=s%60;
		span.innerHTML=`${days}天${hs}小时${ms}分${ss}秒`
		}else{
			clearInterval(timer)
			span.innerHTML='新年快乐'
		}
	}
	
task()
var timer=setInterval(task,1000);

document.getElementById('btn').onclick=function(){
	if(this.innerHTML=='||'){
		clearInterval(timer)
		this.innerHTML='|>'
	}else{
		timer=setInterval(task,1000);
		this.innerHTML='||'
	}
};
