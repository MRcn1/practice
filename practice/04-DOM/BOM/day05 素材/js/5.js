function getFocus(txt){
	txt.className="txt_focus";
	txt.parentNode //td
		.parentNode //tr
		.querySelector("div")
			.className="";
}
function valiName(txt){
	txt.className="";
	var div=txt.parentNode //td
				.parentNode //tr
				.querySelector("div");
	if(/^\w{1,10}$/.test(txt.value)){
		div.className="vali_success";
		return true;
	}else{//否则
		div.className="vali_fail";
		return false;
	}
}
function valiPwd(txt){
	txt.className="";
	var div=txt.parentNode //td
				.parentNode //tr
				.querySelector("div");
	if(/^\d{6}$/.test(txt.value)){
		div.className="vali_success";
		return true;
	}else{//否则
		div.className="vali_fail";
		return false;
	}
}

var form=document.forms[0]

form.onsubmit=function(e){
	var rname=valiName(form.name)
	var rwpd=valiPwd(form.pwd)
	if(!(rname&&rwpd)){
		e.preventDefault()
	}
}

// form.elements[form.length-2].onclick=function(){
// 	var rname=valiName(form.name)
// 	var rwpd=valiPwd(form.pwd)
// 	if(rname&&rwpd){
// 		form.submit()
// 	}
// }