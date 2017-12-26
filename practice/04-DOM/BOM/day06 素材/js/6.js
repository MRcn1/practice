document.getElementById('pop').onclick=function(){
	alert('我是小新')
}

var game={
	div:null,
	daxiao:0,
	maxtop:0,
	maxleft:0,
	intr(){
		this.div=document.getElementById('pop')
		this.daxiao=parseFloat(getComputedStyle(this.div).width)
		this.maxtop=innerHeight-this.daxiao
		this.maxleft=innerWidth-this.daxiao
		this.setposi(this.random())
		this.div.onmouseover=function(e){
      	while(true){
        var posi=this.random();
        var x=e.clientX,y=e.clientY
        if(!(x>=posi.left&&x<=posi.left+this.daxiao
          &&y>=posi.top&&y<=posi.top+this.daxiao)){
          this.setposi(posi)
          break;
        }
      }
    }.bind(this)
	},

	setposi(posi){
		this.div.style.top=posi.top+'px'
		this.div.style.left=posi.left+'px'
	},

	random(){
		return	{
			top:Number(Math.random()*this.maxtop),
			left:Number(Math.random()*this.maxleft)
		}
	},


}

game.intr()