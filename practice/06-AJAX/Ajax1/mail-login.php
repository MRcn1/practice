<?php
	header('Content-Type:text/plain');
	$phone=$_REQUEST['phone'];
	$pwd=$_REQUEST['pwd'];


	$conn=mysqli_connect('127.0.0.1','root','','sohu',3306);
	$sql="set names utf8";
	mysqli_query($conn,$sql);

	$sql="SELECT * FROM mail WHERE phone='$phone' and pwd='$pwd'";
	$result=mysqli_query($conn,$sql);

	$row=mysqli_fetch_row($result);
	if($row===null){
		echo "bucunzai";
	}else{
		echo "cunzai";
	}