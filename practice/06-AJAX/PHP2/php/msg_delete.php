<?php
	$mid=$_REQUEST['mid'] or die('没有获得mid');

	$conn=mysqli_connect('127.0.0.1','root','','tarena',3306);
	$sql='set names utf8';
	mysqli_query($conn,$sql);

	$sql="DELETE FROM msg WHERE mid='$mid'";
	$result=mysqli_query($conn,$sql);
	if ($result===false) {
		echo "未删除";
	}else{
		echo "删除成功";
	}
?>

<a href="../msg.html">返回首页</a>