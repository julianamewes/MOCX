<?php 
include_once("conexao.php");

 $nome= isset($_POST["nome"]) ? $_POST["nome"]: "";
 $data_nascimento= isset($_POST["data_nascimento"]) ? $_POST["data_nascimento"]: "";
 $cpf=isset($_POST["cpf"]) ? $_POST["cpf"] : "";

 $mongo -> selectDB("MOCX") -> selectCollection ("cadastros") -> insert (array ("nome" => $_POST["nome"], "data_nascimento" => $_POST["data_nascimento"], "cpf" => $_POST["cpf"]))

 $insert = mongodb_query($conexao, $mongodb);

 MongoDB_close($conexao); 
} 
?>

