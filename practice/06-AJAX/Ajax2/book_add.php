<?php

    header('Content-Type:text/plain');

    $bname=$_REQUEST['bname'];
    $price=$_REQUEST['price'];
    $pic=$_REQUEST['pic'];

    require('init.php');
    $sql="INSERT INTO book VALUES(NULL,'$bname','$price','$pic')";
    $result=mysqli_query($conn,$sql);

    if($result===false){
       echo "err";
    }else{
            echo "succ";
        }