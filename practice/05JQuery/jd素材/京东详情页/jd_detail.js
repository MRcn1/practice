//顶部导航栏的下拉
$(".app_jd,.service").hover(function(){
	$(this).children('[id$="_items"]').toggle().prev().toggleClass('hover')
})


//全部商品的二级导航栏
$("#category").hover(function(){
	$(this).children('#cate_box').toggle()
})

$("#cate_box").on('mouseenter','li',showsup).on('mouseleave','li',showsup)

function showsup(){
	$(this).children('.sub_cate_box').toggle()
	.prev().toggleClass('hover')
}

//商品介绍栏的切换
$('#product_detail>.main_tabs').on('click','li:not(.current)',function(){
	$(this).addClass('current')
		   .siblings().removeClass('current')

var $divs=$("#product_detail>[id^=product]")
$divs.removeClass('show')
if(!$(this).is(':contains("商品评价")')){
var i=$(this).index('#product_detail>.main_tabs>li:not(:contains("商品评价"))')
$divs.eq(i).addClass('show')
}
})

//左边图片介绍栏图片切换
var preview={
	LIWIDTH:62,
	$ul:null,
	moved:5,
	$mask:null,
	SIZE:175,
	MSIZE:350,
	MAX:0,
	$lg:null,
	init(){
		this.MAX=this.MSIZE-this.SIZE
		this.$ul=$('#icon_list')
		$('#preview>h1>a').click(function(e){
			if(!$(e.target).is('[class$="_disabled"]')){
				if($(e.target).is('.forward')){
					this.$ul.css('left',parseFloat(this.$ul.css('left'))-this.LIWIDTH)
					this.moved++
					this.Moved()
				}else{
					this.$ul.css('left',parseFloat(this.$ul.css('left'))+this.LIWIDTH)
					this.moved--
					this.Moved()
				}
			}
		}.bind(this))

		this.$ul.on('mouseover','li>img',function(){
			var src=$(this).attr('src')
			var i=src.lastIndexOf('.')
			src=src.slice(0,i)+'-m'+src.slice(i)
			$("#mImg").attr('src',src)
		})

		this.$mask=$('#mask')
		this.$lg=$('#largeDiv')
		$('#superMask')
						.hover(function(){
							this.$mask.toggle()
							this.$lg.toggle()
							var src=$('#mImg').attr('src')
							var i=src.lastIndexOf('.')
							src=src.slice(0,i-1)+'l'+src.slice(i)
							this.$lg.css('background','url('+src+')')
						}.bind(this))

						.mousemove(function(e){
							var x=e.offsetX,y=e.offsetY
							var top=y-this.SIZE/2,left=x-this.SIZE/2
							if(top<0){
								top=0
							}else if(top>this.MAX){
								top=this.MAX
							}
							if(left<0){
								left=0
							}else if(left>this.MAX){
								left=this.MAX
							}
							this.$mask.css({top,left})//只有属性名等于值时才可以才这么写ex：'top':top
							this.$lg.css('backgroundPosition',-16/7*left+'px '+-16/7*top+'px')
						}.bind(this))
	},




	Moved(){
		if(this.moved==this.$ul.children().size()){
			$("[class^='forward']").attr('class','forward_disabled')
		}else if(this.moved==5){
			$("[class^='backward']").attr('class','backward_disabled')
		}else{
			$("[class^='forward']").attr('class','forward')
			$("[class^='backward']").attr('class','backward')
		}
	},
}

preview.init()