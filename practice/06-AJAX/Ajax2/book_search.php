<?php

    header('Content-Tyep:text/html');

    $kw=$_REQUEST['kw'];

    require('init.php');
    $sql="SELECT * FROM book WHERE bname LIKE '%$kw%'";
    $result=mysqli_query($conn,$sql);

    if($result===false){
        echo "err";
    }else{
        $list=mysqli_fetch_all($result,1);

        foreach($list as $b){
            echo "<li>$b[bname]</li>";
        }
    }