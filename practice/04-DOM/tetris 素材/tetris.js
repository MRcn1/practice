var game={
	OFFSET:15,CSIZE:26,
	shape:null,
	pg:null,
	interval:200,
	timer:null,
	CN:10,
	RN:20,
	wall:null,
	start(){
		this.wall=[]
		for(var r=0;r<this.RN;r++){
			this.wall[r]=new Array(this.CN)
		}
		this.pg=document.querySelector('.playground')
		this.shape=this.randomshape()
		this.paintShape()
		this.paintNext()
		this.timer=setInterval(this.moveDown.bind(this),this.interval)
		document.onkeydown=function(e){
			switch(e.keyCode){
				case 37:this.moveLeft()
				break;
				case 39:this.moveRight()
				break;
				case 32:this.hardDrop()
				break;
				case 40:this.moveDown()
				break;
				case 38:this.rotateR()
				break;
				case 90:this.rotateL()
				break;

			}
		}.bind(this)
	},

	hardDrop(){    //快速向下
		while(this.canDown()){
			this.moveDown()
		}
	},

	paintNext(){
		var frag=document.createDocumentFragment()
		for(var i=0;i<this.shape.cells.length;i++){
			var cell=this.shape.cells[i]
			var img=this.paintcell(cell,frag)
			img.style.left=parseFloat(img.style.left)+10*this.CSIZE+'px'
			img.style.top=parseFloat(img.style.top)+this.CSIZE+'px'
		}
		this.pg.appendChild(frag)
	},	

	randomshape(){		//	随机生成图形
		switch(Math.floor(Math.random()*3)){
			case 0:return new O()
			break;
			case 1:return new I()
			break;
			case 2:return new T()
			break;
		}
	},

	canRotate(){	//判断能否旋转
		for(var i=0;i<this.shape.cells.length;i++){
			var cell=this.shape.cells[i]
			if(cell.r<0||cell.r>=this.RN||cell.c<0||cell.c>=this.CN
				||this.wall[cell.r][cell.c]!==undefined){
				return false
			}
		}
		return true
	},

	rotateR(){	//右旋转
		this.shape.rotateR()
		if(!this.canRotate()){
			this.shape.rotateL()
		}

	},

	rotateL(){		//左旋转
		this.shape.rotateL()
		if(!this.canRotate()){
			this.shape.rotateR()
		}

	},

	canLeft(){    //判断能否左移
		for(var i=0;i<this.shape.cells.length;i++){
			var cell=this.shape.cells[i]
			if(cell.c==0||this.wall[cell.r][cell.c-1]!=undefined){
				return false
			}
		}
		return true
	},

	moveLeft(){    //左移
		if(this.canLeft()){
			this.shape.moveLeft()
			this.paint()
		}
	},

	canRight(){    //判断能够右移
		for(var i=0;i<this.shape.cells.length;i++){
			var cell=this.shape.cells[i]
			if(cell.c==this.CN-1||this.wall[cell.r][cell.c+1]!=undefined){
				return false
			}
		}
		return true
	},

	moveRight(){    //右移
		if(this.canRight()){
			this.shape.moveRight()
			this.paint()
		}
	},

	canDown(){    //判断能否向下
		for(var i=0;i<this.shape.cells.length;i++){
			var cell=this.shape.cells[i]
			if(cell.r==this.RN-1){
				return false
			}else if(this.wall[cell.r+1][cell.c]!==undefined){
				return false
			}

		}
		return true
	},

	moveDown(){    //向下
		if(this.canDown()){
			this.shape.moveDown()
		}else{
			this.landIntoWall()
			this.deleteRows()
			this.shape=this.randomshape()
		}
		this.paint()
	},

	landIntoWall(){    //主角图形落入墙中
		for(var i=0;i<this.shape.cells.length;i++){
			var cell=this.shape.cells[i]
			this.wall[cell.r][cell.c]=cell
		}
	},

	deleteRows(){    //删除行
		for(var r=this.RN-1;r>=0;r--){
			if(this.isFullRow(r)){
				this.deleteRow(r)
				r++
			}
		}
	},

	deleteRow(r){    //删除第r行
		for(;r>=0;r--){
			this.wall[r]=this.wall[r-1]
			this.wall[r-1]=new Array(this.CN)
			for(var c=0;c<this.CN;c++){
				if(this.wall[r][c]!==undefined){
					this.wall[r][c].r++
				}
			}
			if(this.wall[r-2].join('')==''){
				break;
			}
		}
	},

	isFullRow(r){    //判断r行是否满格
		return String(this.wall[r]).search(/^,|,,|,$/)==-1
	},

	paint(){    //重绘
		var reg=/<img [^>]+>/g;
		this.pg.innerHTML=this.pg.innerHTML.replace(reg,'');
		this.paintShape()
		this.paintWall()
	},

	paintShape(){    //绘制主角图形
		var frag=document.createDocumentFragment()
		for(var i=0;i<this.shape.cells.length;i++){
			var cell=this.shape.cells[i]
			this.paintcell(cell,frag)
		}
		this.pg.appendChild(frag)
	},

	paintWall(){    //绘制墙
		var frag=document.createDocumentFragment()
		for(var r=this.RN-1;r>=0;r--){
			if(this.wall[r].join('')==''){
				break;
			}else{
				for(var c=0;c<this.CN;c++){
					if(this.wall[r][c]!==undefined){
						this.paintcell(this.wall[r][c],frag)
					}
				}
			}
		}
		this.pg.appendChild(frag)
	},

	paintcell(cell,frag){
		var img=new Image()
			img.style.left=this.OFFSET+this.CSIZE*cell.c+'px'
			img.style.top=this.OFFSET+this.CSIZE*cell.r+'px'
			img.src=cell.src
			frag.appendChild(img)
	},

}

game.start()