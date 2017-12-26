var adv={
	DISTANCE:0,//总距离，动态获得adv的高
	DURATION:2000,//总时间
	STEPS:400,//总步数
	step:0,//步长，总距离/总步数
	interval:0,//间隔：总时间/总步数 5ms
	div:null,//保存id为msg的div
	timer:null,
	moved:0,
	intr(){
		this.div=document.getElementById('msg')
		this.DISTANCE=parseFloat(getComputedStyle(this.div).height)
		this.step=this.DISTANCE/this.STEPS
		this.interval=this.DURATION/this.STEPS
		this.move(1)
		this.div.firstElementChild.onclick=this.move.bind(this,-1)
		//点击事件会忽略this直接调用move，这样的话move函数里的this就指向<a>,所以需要bind（this）指向adv 
	},
	move(dir){
		if(this.timer==null){
				this.timer=setInterval(this.moveStep.bind(this,dir),this.interval)
			}
	},
	moveStep(dir){
		var bottom=parseFloat(getComputedStyle(this.div).bottom)
		this.div.style.bottom=bottom+dir*this.step+'px'
		this.moved++
		if(this.moved==this.STEPS){
			clearInterval(this.timer)
			this.timer=null
			this.moved=0
			if(dir==-1){
				setTimeout(this.move.bind(this,1),3000)
			}
		}
	},
}
adv.intr()