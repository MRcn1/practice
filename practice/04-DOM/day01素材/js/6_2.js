var table=document.getElementById('data');
var btns=table.getElementsByTagName('button')

for(var i=0,len=btns.length;i<len;i++){
	btns[i].onclick=cals;
}

function cals(){
	var span=this.parentNode.getElementsByTagName('span')[0];
	var n=parseInt(span.innerHTML);
	n+=this.innerHTML=='+'?1:n>1?-1:0;
	span.innerHTML=n;

	//小计 
	var price=parseFloat(this.parentNode
		.previousElementSibling
		.innerHTML
		.slice(1)
		);
	this.parentNode.nextElementSibling.innerHTML='¥'+(price*n).toFixed(2)

	//按选择器查找
	var tds=document.querySelectorAll('#data>tbody td:last-child');
	for(var i=0,num=0;i<tds.length;i++){
		num+=parseFloat(tds[i].innerHTML.slice(1))
	};
	var td=document.querySelector('#data>tfoot td:last-child');
	td.innerHTML='¥'+(num.toFixed(2));
};

