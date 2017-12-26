var txtName=document.getElementsByName('username')[0];

txtName.onfocus=getFocus;


txtName.onblur=function(){
	var reg=/^\w{1,10}$/ig

	vali(this,reg)
}

var pwd=document.getElementsByName('pwd')[0];

pwd.onfocus=getFocus;

pwd.onblur=function(){
	var reg=/^\d{6}$/ig

	vali(this,reg)
}

function vali(txt,reg){
	txt.className=''
	var div=txt.parentElement.nextElementSibling.firstElementChild
	if(reg.test(txt.value)==true){
		div.className='vali_success'
		return true
	}else{
		div.className='vali_fail'
		return false
	}
}

function getFocus(){
	this.className='txt_focus'
	this.parentElement.nextElementSibling.firstElementChild.className=''
}

var form=document.forms[0]
form.elements[form.length-2].onclick=function(){
	console.log(form.elements[form.length-2])
}
