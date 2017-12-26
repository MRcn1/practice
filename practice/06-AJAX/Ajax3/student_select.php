<?php
    header('Content-Type:application/json');


    $value=$_REQUEST['cid'];
    require('init.php');

    $sql="SELECT * FROM qh_student WHERE classId='$value'";
    $result=mysqli_query($conn,$sql);

    if($result===false){
        echo "检查sql";
    }else{
        $list=mysqli_fetch_all($result,1);

        echo json_encode($list);

    }

