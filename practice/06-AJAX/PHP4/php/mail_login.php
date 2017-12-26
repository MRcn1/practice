<?php
	$phone=$_REQUEST['phone'];
	$pwd=$_REQUEST['pwd'];

	require('init.php');
	$sql="SELECT * FROM mail WHERE phone=$phone and pwd=$pwd";
	$result=mysqli_query($conn,$sql);
	if($result===false){
		die("sql错误");
	}else{
		$row=mysqli_fetch_assoc($result);
		if($row===null){
			echo "用户名或密码错误";
		}else{
			echo "<h1>登录成功</h1>";
			$time=time()*1000;
			$sql="UPDATE mail SET lastlogintime='$time'";
			$result=mysqli_query($conn,$sql);
			if ($result===false) {
				die('sql语法错误');
			}
		}
	}
?>