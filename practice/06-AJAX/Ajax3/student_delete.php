<?php
    header('Content-Type:text/plain');

    $sid=$_REQUEST['sid'];
    require('init.php');

    $sql="DELETE FROM qh_student WHERE sid='$sid'";

    $result=mysqli_query($conn,$sql);

    if($result===false){
        echo "err";
    }else{
        echo "succ";
    }