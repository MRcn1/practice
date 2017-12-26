<?php

    header("Content-Type:application/json");

    $typeId=$_REQUEST['typeId'];

    require('init.php');

    $sql="SELECT * FROM qh_producer WHERE typeId='$typeId'";
    $result=mysqli_query($conn,$sql);

    $list=mysqli_fetch_all($result,1);

    echo json_encode($list);
