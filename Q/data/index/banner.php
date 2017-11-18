<?php
header('Content-Type:application/json;charset=UTF-8');

require_once("../init.php");

$sql = "SELECT img_1,bid,href,title,uname FROM q_banner";
echo json_encode(sql_execute($sql));