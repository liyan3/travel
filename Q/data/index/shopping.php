<?php
header('Content-Type:application/json;charset=UTF-8'); require_once("../init.php"); 
@$sp = $_REQUEST["sp"];
 if(!$sp){
   $sp = 0;
 }else{
   $sp = intval($sp);
 }
 $sql = "SELECT sid,title,img,price,classify FROM q_shopping ORDER BY sid ASC LIMIT $sp,3";
 echo json_encode(sql_execute($sql));
 ?>