<?php

    header('Content-Type:application/javascript;charset=UTF-8');

    $list=getallheaders();
    $lang=$list['Accept-Language'];
    $start2=substr($lang,0,2);

    if($start2==='zh'){
        echo "alert('123')";
    }else{
        echo "console.log('123')";
    }