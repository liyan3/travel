<?php
header("Content-Type:text/plain;charset=UTF-8");
require_once("../init.php");
@$phone=$_REQUEST["phone"];
if($phone){
   $sql="SELECT * FROM q_user WHERE phone='$phone'";
  if(count(sql_execute($sql,MYSQLI_ASSOC))==0)
    echo "true";//没有找到相同就返回true
  else
    echo "false";
}else{
  @$uname=$_REQUEST["uname"];
  $sql="SELECT * FROM q_user WHERE uname='$uname'";
  if(count(sql_execute($sql,MYSQLI_ASSOC))==0)
    echo "true";
  else
    echo "false";
}