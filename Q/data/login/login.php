<?php
 require("../init1.php");
 @$uname = $_REQUEST["uname"];
 @$phone = $_REQUEST["phone"];
 @$upwd = $_REQUEST["upwd"];
 if($uname){
   $sql = "SELECT * FROM q_user WHERE uname='$uname' AND upwd='$upwd'";
 }else if($phone){
   $sql = "SELECT * FROM q_user WHERE phone='$phone' AND upwd='$upwd'";
 }

 $result = mysqli_query($conn,$sql);
 
 $row = mysqli_fetch_assoc($result);
 if($row==null){
    echo '{"code":-1,"msg":"登录失败"}';
 }else{
    $uid = $row["uid"];
    echo '{"code":1,"msg":"登录成功","uid":'.$uid.'}';
 }
?>