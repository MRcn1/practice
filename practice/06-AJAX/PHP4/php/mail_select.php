<?php
	require('init.php');
	$sql="SELECT * FROM mail";
	$result=mysqli_query($conn,$sql);

	if($result===false){
		die("请检查sql语句");
	}
	$list=mysqli_fetch_all($result,1);
?>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<body>
	<table width=100% border=1px solid black;>
		<thead>
			<th>id</th>
			<th>手机号</th>
			<th>密码</th>
			<th>登录时间</th>
			<th>操作</th>
		</thead>
		<tbody>
		<?php
			foreach ($list as $value) {
			echo "<tr>";
				echo "<td>$value[mig]</td>";
				echo "<td>$value[phone]</td>";
				echo "<td>$value[pwd]</td>";
				echo "<td>$value[lastlogintime]</td>";
				echo "<td><a href=''>删除</a></td>";
			echo "</tr>";
			}
		?>
		</tbody>
	</table>
</body>
</html>