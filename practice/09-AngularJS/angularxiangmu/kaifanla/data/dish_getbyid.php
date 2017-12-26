<?php
header("Content-Type:application/json");

@$id = $_REQUEST['id'];
$output = [];

if(empty($id))
{
    echo '[]';
    return;
}

$conn = mysqli_connect('127.0.0.1','root','','kaifanla');
$sql = 'SET NAMES UTF8';
mysqli_query($conn,$sql);

$sql = "SELECT did,name,detail,material,img_lg,price FROM kf_dish WHERE did=$id";
$result = mysqli_query($conn,$sql);

$row = mysqli_fetch_assoc($result);
if(empty($row))
{
    echo '[]';
}
else
{
    $output[] = $row;
    echo json_encode($output);

}
?>