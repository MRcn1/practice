<?php

		$phone=$_REQUEST['phone'];
		$pwd=$_REQUEST['pwd'];

		require('init.php');
		$sql="SELECT * FROM mail WHERE phone=$phone"; #检查手机号是否存在
		$result=mysqli_query($conn,$sql);
		if($result===false){
			die('请检查sql语句');
		}
		$row=mysqli_fetch_row($result);		#抓取$phone的一行
		if($row===null){					#没有就表示手机号还没存在，可以注册
			$time=time()*1000;
			$sql="INSERT INTO mail VALUES(NULL,'$phone','$pwd','$time')";
			$result=mysqli_query($conn,$sql);
			if($result===false){
				die("注册失败");
			}else{
				echo "<h1>注册成功</h1>";
			}
		}else{
			echo "<h1>改手机号已注册过，无需再注册</h1>";
		}


		
?>
<a href="../mail_login.html">前往登录</a>