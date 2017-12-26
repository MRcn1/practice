<?php
header("Content-Type:application/json");

$name = $_REQUEST['name'];

$array = [];

$array[] = [
    'tip'=>$name
];

echo json_encode($array);

?>