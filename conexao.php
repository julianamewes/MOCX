<?php 

$servidor = "localhost";
$username = "root";
$password = "";
$database = "MOCX";

$connection = mongoose_connect("mongodb://localhost/MOCX"); 
if (!$connection) { die('Not connected : ' . mongodb_error());
 @mongodb_select_db($database) or die(mongodb_error()); 
 mongodb_set_charset('utf8');


?>