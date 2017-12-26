<?php
    header('Content-Type:application/json');

    require('init.php');
    $sql="SELECT * FROM jd_product";
    $result=mysqli_query($conn,$sql);

    $list=mysqli_fetch_all($result,1);

    echo json_encode($list);