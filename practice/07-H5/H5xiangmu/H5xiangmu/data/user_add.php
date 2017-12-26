<?php
    header("Content-Type:application/json");

    @$n=$_REQUEST['uname'] or die('{"code":2,"msg":"uname required"}');
    @$p=$_REQUEST['upwd'] or die('{"code":3,"msg":"upwd required"}');

    require('init.php');

    $sql="INSERT INTO jd_user VALUES(NULL,'$n','$p')";
    $result=mysqli_query($conn,$sql);


    if($result===false){  //SQL执行失败-SQL语法错误
        //echo '{"code":5, "msg":"insert err", "sql":"'.$sql.'"}';
        $output['code'] = 5;
        $output['msg'] = 'insert err';
        $output['sql'] = $sql;
    }else{
        $output['code'] = 1;
        $output['userId'] = mysqli_insert_id($conn);
    }
    echo json_encode($output);