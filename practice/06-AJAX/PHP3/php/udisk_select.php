<?php
	require('init.php');

	$sql="select * from udisk";
	$result=mysqli_query($conn,$sql);

	if($result===false){
		echo "请检查sql语句";
	}else{
		$list=mysqli_fetch_all($result,1);

		foreach ($list as $value) {
			echo "<div style='width:230px;border:1px solid black; float:left;position:relative;'>";
			echo "<a href='$value[uid]' style='position:absolute;text-decoration:none;right:5px;font-size:2em;'>&times;</a>";
				echo "<img src='$value[pic]'style='width:230px;'> ";
				echo "<p>$value[uname]</p>";
				echo "<p>$value[price]</p>";
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
		location.href='udisk_delete.php?uid='+mid
	}
})
</script>

<a href="../udisk.html">首页</a>