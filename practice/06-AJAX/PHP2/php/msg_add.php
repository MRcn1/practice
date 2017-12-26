<?php
	$uname=$_REQUEST['uname'] or die('没有获得uname');
	$phone=$_REQUEST['phone'] or die('没有获得phone');
	$pubtime=$_REQUEST['pubtime'] or die('没有获得pubtime');
	$content=$_REQUEST['content'] or die('没有获得content');

	$conn=mysqli_connect('127.0.0.1','root','','tarena',3306);
	$sql='set names utf8';
	mysqli_query($conn,$sql);

	$sql="insert into msg values(NULL,'$uname','$phone','$pubtime','$content')";
	$result=mysqli_query($conn,$sql);

	if($result===false){
		echo "请检查sql语句";
	}else{
		echo '通过';
	}
?>

<a href="../msg.html">返回首页</a>