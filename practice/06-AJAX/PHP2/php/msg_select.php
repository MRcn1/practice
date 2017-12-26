<?php
	$conn=mysqli_connect('127.0.0.1','root','','tarena',3306);
	$sql='set names utf8';
	mysqli_query($conn,$sql);

	$sql="SELECT * FROM msg";
	$result=mysqli_query($conn,$sql);

	if($result===false){
		echo "未通过";
	}else{
		$list=mysqli_fetch_all($result,1);
		foreach ($list as $value) {
			echo "<div style='border:1px solid black;'>";
			echo "<a href='$value[mid]' style='font-size:25px; text-decoration: none;float:right'>&times;</a>";
			echo "<p><b>发布人：</b>$value[uname]</p>";
			echo "<p><b>联系方式：</b>$value[phone]</p>";
			echo "<p><b>发布时间：</b>$value[pubtime]</p>";
			echo "<p><b>发布内容：</b>$value[content]</p>";
			echo "</div>";
		}
	}
?>
<script src='jquery-1.11.3.js'></script>
<script>
$('div').on('click','a',function(e){
	e.preventDefault();
	var con=confirm('是否确认删除？')
	if(con){
		var mid=$(this).attr('href')
		location.href='msg_delete.php?mid='+mid
	}
})
</script>

<a href="../msg.html">返回首页</a>