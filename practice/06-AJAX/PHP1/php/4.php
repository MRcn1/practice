<?php
$i=$_REQUEST['cid'];
$r=$_REQUEST['cname'];
$c=$_REQUEST['count'];


#连接到mysql服务器
$conn=mysqli_connect('127.0.0.1','root',"",'dangdang',3306);

#发送SQL指令命令提交给MySQL服务器
$sql="SET NAMES UTF8";
mysqli_query($conn,$sql);

$sql="INSERT INTO dd_category VALUES($i,'$r','$c')";
$result=mysqli_query($conn,$sql);

if($result){
	echo '通过';
}else{
	echo '未通过';
}
?>