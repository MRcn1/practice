/*广告图片数组*/
var imgs=[
	{"i":0,"img":"images/index/banner_01.jpg"},
    {"i":1,"img":"images/index/banner_02.jpg"},
    {"i":2,"img":"images/index/banner_03.jpg"},
    {"i":3,"img":"images/index/banner_04.jpg"},
    {"i":4,"img":"images/index/banner_05.jpg"},
];

var slider={
	$ulimgs:null,
	$ulidxs:null,
	LIWIDTH:670,
	DURATION:500,
	WAIT:3000,
	moved:0,
	init(){
		var me=this
		me.$ulimgs=$('#imgs')
		me.$ulidxs=$('#indexs')
		me.initview()
		me.automove()
		$("#slider").hover(function(){
			me.$ulimgs.stop(true)
		},function(){
			me.automove()
		})
		me.$ulimgs.on('mouseover','li>img',function(e){
			var $tar=$(e.target)
			var i=$tar.index('#imgs img')
			me.moved=i
			me.$ulimgs.css('left',-me.moved*me.LIWIDTH)
			me.changehover()
		})
		me.$ulidxs.on('mouseover','li',function(e){
			var $tar=$(e.target)
			if(!$tar.is('.hover')){
				var endi=$tar.index('#indexs>li')
				var starti=$('.hover').index('#indexs>li')
				console.log(endi,starti)
				me.moved+=(endi-starti)
				me.changehover()
				me.$ulimgs.stop(true).animate({
					left:-me.moved*me.LIWIDTH
				},me.DURATION)
			}
		})
	},
	//在ul中插入li和img图片
	initview(){
		for(var i=0,htmlimgs='',htmlidxs='';i<imgs.length;i++){
			htmlimgs+=`<li><img src='${imgs[i].img}'></li>`
			htmlidxs+=`<li>${i+1}</li>`
		}
		this.$ulimgs.html(htmlimgs).css('width',(imgs.length+1)*this.LIWIDTH)
		this.$ulimgs.append(this.$ulimgs.children(':first').clone())
		this.$ulidxs.html(htmlidxs)
		this.$ulidxs.children(':first').addClass('hover')
	},
	//让图片轮动
	automove(){
		var me=this
		me.moved++
		me.$ulimgs.animate({'null':1},me.WAIT,function(){
			me.$ulimgs.animate({left:-me.moved*me.LIWIDTH},me.DURATION,function(){
			if(me.moved==imgs.length){
				me.$ulimgs.css('left',0)
				me.moved=0
			}
			me.changehover()
			me.automove()
			})
		})
	},

	changehover(){
		this.$ulidxs.children().eq(this.moved).addClass('hover').siblings().removeClass('hover')
	},
}

slider.init()