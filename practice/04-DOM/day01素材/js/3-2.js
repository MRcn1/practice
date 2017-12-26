//递归遍历
function getchildren1(parent){
	console.log(parent.nodeType!=3?parent.nodeName:parent.nodeValue);
	var children=parent.childNode;
	for(var i=0,len=children.length;i<len;i++){
		getchildren1(children[i])
	}
}

//getchildren(document.body) 
//


function getchildren2(parent){
	//创建迭代器对象
	var iterater=document.createNodeIterator(parent,NodeFilter.SHOW_ALL,null,false);
	//用循环反复调用迭代器的nextNode()跳向下一个节点
	var node;
	while((node=iterater.nextNode())!=null){
		console.log(node.nodeType!=3?node.nodeName:node.nodeValue)
	}
}

getchildren2(document.body) 