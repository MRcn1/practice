<?php
    header('Content-Type:application/xml');

    require('init.php');
    $sql="SELECT * FROM book";
    $result=mysqli_query($conn,$sql);

    $list=mysqli_fetch_all($result,1);

    $str="<?xml version='1.0' encoding='UTF-8' ?>";
    $str .="<bookList>";
        foreach($list as $b){
            $str.="<book bid='$b[bid]'>";
               $str.="<bname>$b[bname]</bname>";
               $str.="<price>$b[price]</price>";
               $str.="<pic>$b[pic]</pic>";
            $str.="</book>";
        }
    $str .="</bookList>";

    echo "$str";