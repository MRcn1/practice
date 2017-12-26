<?php

$conn=mysqli_connect('127.0.0.1','root','','huimaiche',3306);
$sql='set names utf8';
mysqli_query($conn,$sql);

$sql="SELECT * FROM car";
$result=mysqli_query($conn,$sql);

if($result===false){
	echo "未通过";
}else{
	// $list=mysqli_fetch_row($result);  #抓取一行索引数组
	// $list=mysqli_fetch_assoc($result);	 #抓取一行关联数组
	$list=mysqli_fetch_all($result,MYSQLI_ASSOC);		#抓取所有行 + 索引数组
	echo '<table width="100%" border="1px">';
	echo "<thead>";
		echo "<tr>";
			echo "<th>汽车编号</th>";
			echo "<th>汽车名称</th>";
			echo "<th>汽车照片</th>";
			echo "<th>汽车价格</th>";
			echo "<th>是否特价</th>";
			echo "<th>生产日期</th>";
			echo "<th>操作</th>";
		echo "</tr>";
	echo "</thead>";
	echo '<tbody>';
			for($i=0; $i<count($list); $i++){
				echo '<tr>';
					$p=$list[$i];
					echo "<td>$p[cid]</td>";
					echo "<td>$p[cname]</td>";
					echo "<td><img src='$p[pic]' width='100px'></td>";
					echo "<td>￥$p[price]</td>";
					echo "<td>$p[isonsale]</td>";
					echo "<td>$p[birthday]</td>";
					echo "<td><a href='$p[cid]'>删除</a> <a href='$p[cid]'>修改</a> </td>";
				echo '</tr>';
			};
	echo '</tbody>';
	echo '</table>';
}
?>
<a href="../huimaiche.html">首页</a>

<script src='jquery-1.11.3.js'></script>
<script>
//把数据1,0，转为true，false
$('tbody tr td:nth-child(5)').each(function(i,td){
	var h=td.innerHTML;
	if (h='1') {
		td.innerHTML='是'
	}else if (h='0') {
		td.innerHTML='否'
	}
})


//把时间改为现代时间
// Date.prototype.toCNString=function(){
// 	return this.getFullYear()+'-'+(this.getMonth()+1)+'-'+this.getDay();
// }

// $('tbody tr td:nth-child(6)').each(function(i,td){
// 	var s=td.innerHTML;
// 	s=parseInt(s);
// 	s=new Date(s);
// 	td.innerHTML=s.toCNString()
// })

$('table').on('click','a:contains("删除")',function(e){
	e.preventDefault();
	var carId=$(this).attr('href')
	location.href='car_delete.php?cid='+carId
})

$('table').on('click','a:contains("修改")',function(e){
	e.preventDefault();
	var carId=$(this).attr('href')
	location.href='car_updata.php?cid='+carId
})
</script>