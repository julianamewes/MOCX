<?php
   include_once("conexao.php"); 

     $nome=$_POST['nome'];
     $data_nascimento= date('d-m-y');
     $cpf=$_POST['cpf'];
     
     $db.cadastros.insert($nome, $data_nascimento, $cpf) 
             
     
     
     =mysqli_query($conn, "INSERT INTO lista(aluno, cpf, responsavel, endereco, fone, mail, pretendido, escola, ip, dia_visita, hora_visita, oficial)VALUES('$aluno', '$cpf', '$responsavel', '$endereco', '$fone', '$mail', '$pretendido', '$escola', '$ip, '$dia_visita', '$hora_visita', '$oficial')");

        echo  "<script>alert('Gravado com Sucesso!);</script>";
        header("Location: /Central_de_Matriculas/Best")

?>