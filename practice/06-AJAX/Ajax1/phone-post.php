<?php
	header('Content-Type:text/plain');

	$phone=$_REQUEST['phone'];

	$conn=mysqli_connect('127.0.0.1','root','','sohu',3306);
	$sql="set names utf8";
	mysqli_query($conn,$sql);

	$sql="SELECT * FROM mail WHERE phone='$phone'";
	$result=mysqli_query($conn,$sql);

	if($result===false){
		die("检查sql语句");
	}else{
		$row=mysqli_fetch_row($result);

		if($row===null){
			echo "bucunzai";
		}else{
			echo "cunzai";
		}
	}
