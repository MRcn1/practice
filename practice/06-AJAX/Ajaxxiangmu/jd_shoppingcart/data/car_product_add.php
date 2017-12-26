<?php

    header('Content-Type:application/json');
    $uid=$_REQUEST['uid'];
    $pid=$_REQUEST['pid'];

    require('init.php');
    $sql="SELECT * FROM jd_cart WHERE userId='$uid'";
    $result=mysqli_query($conn,$sql);

    $row=mysqli_fetch_row($result);


    #判断是否有购物车
    if($row===null){
    #没有购物车添加上购物车并在购物车里添加商品
        $sql="INSERT INTO jd_cart VALUES(NULL,'$uid')";
        $result=mysqli_query($conn,$sql);

        $sql="SELECT * FROM jd_cart WHERE userId='$uid'";
        $result=mysqli_query($conn,$sql);
        $row=mysqli_fetch_row($result);
        $carId=$row[0];

        $sql="INSERT INTO jd_detail VALUES(NULL,'$carId','$pid',1)";
        $result=mysqli_query($conn,$sql);
    }else{
    #有购物车，
        $carId=$row[0];
        $sql="SELECT * FROM jd_detail WHERE productId='$pid' AND carId='$carId'";
        $result=mysqli_query($conn,$sql);
        $list=mysqli_fetch_row($result);
        if($list===null){
        #判断购物车里有没有商品，没有商品加上商品
                $carId=$row[0];
                $sql="INSERT INTO jd_detail VALUES(NULL,'$carId','$pid',1)";
                $result=mysqli_query($conn,$sql);
            }else{
            #有商品给数量加1
                $sql="UPDATE jd_detail SET count=count+1 WHERE productId='$pid' AND carId='$carId'";
                $result=mysqli_query($conn,$sql);
            }
    }

    $output=[
        'code'=>1
    ];

    echo json_encode($output);
