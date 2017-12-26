<?php
	$uid=$_REQUEST['uid'];
	require('init.php');

	$sql="DELETE FROM udisk WHERE uid='$uid'";
	$result=mysqli_query($conn,$sql);
	if($result===false){
		echo "没有删除成功";
	}else{
		echo "删除成功";
	}
?>

<a href="../udisk.html">首页</a>