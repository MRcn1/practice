<?php
	@$id=$_REQUEST['cid']or die('cid required');

	$conn=mysqli_connect('127.0.0.1','root','','huimaiche',3306);
	$sql='SET NAMES utf8';
	mysqli_query($conn,$sql);

	$sql="SELECT * FROM car WHERE cid='$id'";
	$result=mysqli_query($conn,$sql);
	
	$list=mysqli_fetch_assoc($result);
	if($result===false){
		die('检查sql');
	}
?>

<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<body>
	<h1>修改汽车</h1>
	<form action="2car_updata.php">
		<input type="hidden" name="cid" value="<?php echo "$list[cid]";?>">
		车名：<input type="text" name="cname" value="<?php echo $list['cname']?>"><br>
		图片：<input type="text" name="pic" value="<?php echo $list['pic']?>"><br>
		价格：<input type="text" name="price" value="<?php echo $list['price']?>"><br>
		特价：<input type="text" name="isonsale" value="<?php echo $list['isonsale']?>"><br>
		产期：<input type="text" name="birthday" value="<?php echo $list['birthday']?>"><br>
		<input type="submit">
	</form>
</body>
</html>