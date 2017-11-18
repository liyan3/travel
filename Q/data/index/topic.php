<?php
header('Content-Type:application/json;charset=UTF-8');
 require_once("../init.php"); 
 
 @$start = $_REQUEST["start"];
 if(!$start){
   $start = 0;
 }else{
   $start = intval($start);
 }
 $sql = "SELECT q_topic.tid,q_topic.t_title,q_topic.t_img,q_user.uname,q_user.avater FROM q_topic,q_user WHERE q_topic.uid=q_user.uid LIMIT $start,8";

 echo json_encode(sql_execute($sql));
?>