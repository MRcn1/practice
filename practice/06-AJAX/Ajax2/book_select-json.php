<?php
/*
*向客户端返回所有的数据，以JSON字符串格式
*/
header('Content-Type: application/json;charset=UTF-8');

require('init.php');

$sql = "SELECT * FROM book";
$result = mysqli_query($conn,$sql);
$list = mysqli_fetch_all($result, MYSQLI_ASSOC);

/***********************************
*$list: 二维数组——批量复合数据，编码为JSON字符串
************************************/
$str = json_encode($list); //把以PHP数组编码为JSON格式的字符串

echo $str;