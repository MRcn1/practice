<?php
    header('Content-Type:application/json');

    require('init.php');
    $sql="SELECT * FROM qh_class";
    $result=mysqli_query($conn,$sql);

    if($result===false){
        echo "¼ì²ésql";
    }else{
        $list=mysqli_fetch_all($result,1);

        $str=json_encode($list);

    }

    echo "$str";