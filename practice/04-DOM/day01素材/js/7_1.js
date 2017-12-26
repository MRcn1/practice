var spans=document.querySelectorAll('ul.tree span');
for(var i=0;i<spans.length;i++){
	spans[i].onclick=toggle;
}

function toggle(){
	if(this.className=='open'){
		this.className='closed'
		this.nextElementSibling.className='hide'
	}else{
		var open=document.querySelector('ul.tree span.open')
		if(open!=null){
			open.className='closed'
			open.nextElementSibling.className='hide'
		}
		this.className='open'
		this.nextElementSibling.className=''
	};	
}