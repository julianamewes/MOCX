<?php 
$servidor = "localhost";
$username = "root";
$password = "";
$database = "cadastros";

$connection = MongoDB_connect($servidor, $username, $password, $database); 
if (!$connection) { die('Not connected : ' . mongodb_error());
 @mongodb_select_db($database) or die(mongodb_error()); 
 mongodb_set_charset('utf8');

?>