<?php
	$id=$_REQUEST['cid'] or die();
	$c=$_REQUEST['cname'] or die();
	$p=$_REQUEST['pic'] or die();
	$pr=$_REQUEST['price'] or die();
	$i=$_REQUEST['isonsale'] or die();
	$b=$_REQUEST['birthday'] or die();

	$conn=mysqli_connect('127.0.0.1','root','','huimaiche',3306);
	$sql='SET NAMES utf8';
	mysqli_query($conn,$sql);

	$sql="UPDATE car SET cname='$c',pic='$p',price='$pr',isonsale='$i',birthday='$b' WHERE cid='$id'  " ;
	$result=mysqli_query($conn,$sql);
	if ($result===false) {
		echo "检查sql";
	}else{
		echo "<h1>修改成功<h1>";
		echo "<a href='car_select.php'>返回汽车列表</a>";
	}
?>