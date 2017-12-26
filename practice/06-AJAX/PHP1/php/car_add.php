<?php
$c=$_REQUEST['cname'];
$p=$_REQUEST['pic'];
$pr=$_REQUEST['price'];
$i=$_REQUEST['isonsale'];
$b=$_REQUEST['birthday'];

$conn=mysqli_connect('127.0.0.1','root','','huimaiche',3306);
$sql='set names utf8';
mysqli_query($conn,$sql);

$sql="INSERT INTO car VALUES(NULL,'$c','$p',$pr,$i,'$b')";
$result=mysqli_query($conn,$sql);

if($result){
	echo "通过";
}else{
	echo "未通过";
}
?>

