var unselCts=document.getElementById('unsel')
		.innerHTML
		.replace(/^\s*?<option>|<\/option>\s*$/ig,'')
		.split(/<\/option>\s*?<option>/)

var selCts=[]

var btns=document.getElementsByTagName('button')
for(var i=0,len=btns.length;i<len;i++){
	btns[i].onclick=move;
}
function move(){
	switch(this.innerHTML){
		case '&gt;&gt;':
		selCts=selCts.concat(unselCts)
		unselCts=[]
		break;
		case '&lt;&lt;':
		unselCts=unselCts.concat(selCts)
		selCts=[]
		break;
		case '&gt;':
		var opts=unsel.getElementsByTagName('option')
		for(var i=opts.length-1;i>=0;i--){
			if(opts[i].selected==true){
				selCts.push(unselCts.splice(i,1)[0])
			}
		}
		selCts.sort()
		break;
		case '&lt;':
		var opts=sel.getElementsByTagName('option')
		for(var i=opts.length-1;i>=0;i--){
			if(opts[i].selected==true){
				unselCts.push(selCts.splice(i,1)[0])
			}
		}
		unselCts.sort()
		break;
	}
		updateView(unselCts,unsel)
		updateView(selCts,sel)
};

function updateView(arr,sel){
	sel.innerHTML=arr.length!=0?('<option>'+arr.join('</option><option>')+'</option>'):'';
}

