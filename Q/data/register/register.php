<?php
header("Content-Type:application/json;charset=UTF-8");
	#1、获取请求提交的数据
	@$uname=$_REQUEST["uname"];
	@$upwd=$_REQUEST["upwd"];
	@$phone=$_REQUEST["phone"];
	#2、连接到数据库
  require_once("../init.php");
	#3、执行数据库操作
	$sql="insert into q_user(uname,upwd,phone) values('$uname','$upwd','$phone')";
	$result=mysqli_query($conn,$sql);
	if($result === true){
		 echo '{"code":1,"msg":"注册成功"}';
	}else{
		 echo '{"code":-1,"msg":"注册失败"}';
	}