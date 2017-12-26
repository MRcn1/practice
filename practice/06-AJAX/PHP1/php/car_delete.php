<?php
	$c=$_REQUEST['cid'];

	$conn=mysqli_connect('127.0.0.1','root','','huimaiche',3306);
	$sql='set names utf8';
	mysqli_query($conn,$sql);

	$sql="DELETE FROM car WHERE cid='$c'";
	$result=mysqli_query($conn,$sql);

	if($result){
		echo "已删除";
	}else{
		echo "未通过";
	}

	echo "<hr>";
	echo "<a href='car_select.php'>返回汽车列表</a>";
?>
