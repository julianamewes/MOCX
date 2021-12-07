<?php
   include_once("conexao.php"); 

     $nome= $_POST["nome"];
     $data_nascimento= $_POST["data_nascimento"];
     $cpf= $_POST["cpf"];
     
     $mongo = new MongoClient("mongodb://127.0.0.1@27017");
     $mongo -> selectDB("MOCX") -> selectCollection ("cadastros") -> insert (array ("nome" => $_POST["nome"], "data_nascimento" => $_POST["data_nascimento"], "cpf" => $_POST["cpf"]))
             
      
    

?>