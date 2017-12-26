<?php
    header('Content-Type:application/json');

    $uname=$_REQUEST['uname'];
    $upwd=$_REQUEST['upwd'];

    require('init.php');

    $sql="SELECT * FROM jd_user WHERE uname='$uname' AND upwd='$upwd'";
    $result=mysqli_query($conn,$sql);

    if($result===false){
        echo '{"err":"err"}';
    }else{
        $list=mysqli_fetch_assoc($result);
        $uid=$list['uid'];

        if($list===null){
            echo '{"code":2,"msg":"用户名或密码错误"}';
        }else{
            $arr=['code'=>1,'uname'=>$uname,'uid'=>$uid];
            echo json_encode($arr);
        }
    }
?>