<?php
    header('Content-Type:application/json');

    $pageNum=$_REQUEST['pageNum'];
    if($pageNum===null){
        $pageNum=1;
    }else{
        $pageNum=intval($pageNum);
    }

    $output=[
        'recordCount'=>0,
        'pageSize'=>8,
        'pageCount'=>0,
        'pageNum'=>$pageNum,
        'data'=>null
    ];
    require('init.php');

    $sql="select count(*) from jd_product";
    $result=mysqli_query($conn,$sql);
    $output['recordCount']=intval(mysqli_fetch_row($result)[0]);

    $output['pageCount']=ceil($output['recordCount']/$output['pageSize']);
    $start=($pageNum-1)*$output['pageSize'];
    $count=$output['pageSize'];
    $sql="select * from jd_product LIMIT $start,$count";
    $result=mysqli_query($conn,$sql);
    $output['data']=mysqli_fetch_all($result,1);

    echo json_encode($output);

