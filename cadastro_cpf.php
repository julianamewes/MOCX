<?php

var_dump($_POST);

include_once("index.js");

 $nome= addslashes($_POST["nome"]);
 $data_nascimento= addslashes($_POST["data_nascimento"]);
 $cpf=addslashes($_POST["cpf"]);

 $mongoose -> selectDB("MOCX") -> selectCollection ("cadastros") -> insert (array ("nome" => $_POST["nome"], "data_nascimento" => $_POST["data_nascimento"], "cpf" => $_POST["cpf"]))

 $insert = mongoose_query($conexao, $mongoose);

 mongoose_close($conexao); 
} 


?>


