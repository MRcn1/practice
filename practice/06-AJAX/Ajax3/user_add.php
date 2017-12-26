<?php
    header('Content-Type:text/plain');

    $uname=$_REQUEST['uname'];
    $upwd=$_REQUEST['upwd'];

    require('init.php');

    $sql="INSERT INTO qh_user VALUES(NULL,'$uname','$upwd')";
    $result=mysqli_query($conn,$sql);

    if($result===false){
        echo "err";
    }else{
        echo "succ";
    }