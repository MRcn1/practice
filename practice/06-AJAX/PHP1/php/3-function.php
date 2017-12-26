<?php
function fn(){
	$r=rand(0,255);
	$g=rand(0,255);
	$b=rand(0,255);
	$c="rgb($r,$g,$b)";
	echo "$c";
};

fn();
?>