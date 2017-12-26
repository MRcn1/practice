<?php
    header('Content-Type:application/json');

    require('init.php');

    $sql="SELECT * FROM qh_type";
    $result=mysqli_query($conn,$sql);

    $list=mysqli_fetch_all($result,1);

    echo json_encode($list);