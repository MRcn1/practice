<?php
/*
*��ͻ��˷������е����ݣ���JSON�ַ�����ʽ
*/
header('Content-Type: application/json;charset=UTF-8');

require('init.php');

$sql = "SELECT * FROM book";
$result = mysqli_query($conn,$sql);
$list = mysqli_fetch_all($result, MYSQLI_ASSOC);

/***********************************
*$list: ��ά���顪�������������ݣ�����ΪJSON�ַ���
************************************/
$str = json_encode($list); //����PHP�������ΪJSON��ʽ���ַ���

echo $str;