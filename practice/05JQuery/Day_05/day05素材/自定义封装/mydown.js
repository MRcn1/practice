if(typeof(window.jQuery)!='function'){
	throw new Error('123jquery')
}else{
	jQuery.fn.mydown=function(){
		this.addClass('dropdown')
		this.children(':first').attr('data-trigger','dropdown')
		.next().addClass('dropdown-menu')
		this.hover(function(){
			$(this).children('.dropdown-menu').toggleClass('in')
		})
	}
}