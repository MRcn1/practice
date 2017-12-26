<?php

    header('Content-Type:application/json');
    $score=$_REQUEST['score'];
    require('init.php');

    $sql="SELECT * FROM student WHERE scoreGrade='$score'";

    $result=mysqli_query($conn,$sql);

    if($result===false){
        echo "err";
    }else{
        $list=mysqli_fetch_all($result,1);

        echo json_encode($list);
    }