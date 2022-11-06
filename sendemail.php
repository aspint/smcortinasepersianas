<?php
//   $nome = $_POST['nome'];
//   $email= $_POST['email'];
//   $mensagem= $_POST['subject'];
//   $to = "arthursoares.comercial@gmail.com";
//   $assunto = "Mensagem de ".$email.com
//   mail($to,$assunto,$mensagem);

$name       = @trim(stripslashes($_POST['name'])); 
$from       = @trim(stripslashes($_POST['email'])); 
$subject    = @trim(stripslashes($_POST['subject'])); 
$tel        = @trim(stripslashes($_POST['tel']));
$message    = @trim(stripslashes($_POST['message'])); 
$to   		= 'formweb@smcortinasepersianas.com.br';//replace with your email

$headers   = array();
$headers[] = "MIME-Version: 1.0";
$headers[] = "Content-type: text/plain; charset=iso-8859-1";
$headers[] = "From: {$name} <{$from}>";
$headers[] = "Reply-To: <{$from}>";
$headers[] = "Subject: {$subject}";
$headers[] = "X-Mailer: PHP/".phpversion();

$headers = implode("\r\n", $headers);
mail($to, $subject, $message);

die;
?>