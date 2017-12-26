<?php
	$uname=$_REQUEST['uname'] or die('没有获得uname');
	$pic=$_REQUEST['pic'] or die('没有获得pic');
	$price=$_REQUEST['price'] or die('没有获得price');
	$addedtime=time()*1000;

	
	require('init.php');
	$sql="INSERT INTO udisk VALUES(NULL,'$uname','$pic','$price','$addedtime')";
	$result=mysqli_query($conn,$sql);
	if($result===false){
		echo "请检查sql语句";
	}else{
		echo "<h1>通过</h1>";
	}
?>

<a href="../udisk.html">首页</a><br>
<a href="udisk_select.php">查看所有u盘列表</a>
