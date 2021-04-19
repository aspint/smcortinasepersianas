<?php
 // Adiciona o arquivo class.phpmailer.php - você deve especificar corretamente o caminho da pasta com o este arquivo.
 require_once("autenvio/PHPMailerAutoload.php");
 // Inicia a classe PHPMailer
 $mail = new PHPMailer();
 // DEFINIÇÃO DOS DADOS DE AUTENTICAÇÃO - Você deve auterar conforme o seu domínio!
 $mail->IsSMTP(); // Define que a mensagem será SMTP
 $mail->Host = "smtp.smcortinasepersianas.com.br"; // Seu endereço de host SMTP
 $mail->SMTPAuth = true; // Define que será utilizada a autenticação -  Mantenha o valor "true"
 $mail->Port = 587; // Porta de comunicação SMTP - Mantenha o valor "587"
 $mail->SMTPSecure = false; // Define se é utilizado SSL/TLS - Mantenha o valor "false"
 $mail->SMTPAutoTLS = true; // Define se, por padrão, será utilizado TLS - Mantenha o valor "false"
 $mail->Username = 'formweb@smcortinasepersianas.com.br'; // Conta de email existente e ativa em seu domínio
 $mail->Password = 'smcep@2021'; // Senha da sua conta de email
 // DADOS DO REMETENTE
 $mail->Sender = "formweb@smcortinasepersianas.com.br"; // Conta de email existente e ativa em seu domínio
 $mail->From = "formweb@smcortinasepersianas.com.br"; // Sua conta de email que será remetente da mensagem
 $mail->FromName = "FormWeb New Client"; // Nome da conta de email
 // DADOS DO DESTINATÁRIO
 $mail->AddAddress('arthursoares.comercial@gmail.com', 'Contato Pelo Site'); // Define qual conta de email receberá a mensagem
 //$mail->AddAddress('recebe2@dominio.com.br'); // Define qual conta de email receberá a mensagem
 //$mail->AddCC('copia@dominio.net'); // Define qual conta de email receberá uma cópia
 //$mail->AddBCC('copiaoculta@dominio.info'); // Define qual conta de email receberá uma cópia oculta
 // Definição de HTML/codificação
 $mail->IsHTML(true); // Define que o e-mail será enviado como HTML
 $mail->CharSet = 'utf-8'; // Charset da mensagem (opcional)
 // DEFINIÇÃO DA MENSAGEM
 $mail->Subject  = "Formulário de Contato"; // Assunto da mensagem
 $mail->Body .= " Nome: ".$_POST['name']; // Texto da mensagem
 $mail->Body .= " E-mail: ".$_POST['email']; // Texto da mensagem
 $mail->Body .= " Tel: ".$_POST['tel']; // Texto da mensagem
 $mail->Body .= " Assunto: ".$_POST['subject']; // Texto da mensagem
 $mail->Body .= " Mensagem: ".nl2br($_POST['message']); // Texto da mensagem
 // ENVIO DO EMAIL
 $enviado = $mail->Send();
 // Limpa os destinatários e os anexos
 $mail->ClearAllRecipients();
 // Exibe uma mensagem de resultado do envio (sucesso/erro)
 if ($enviado) {
   echo "E-mail enviado com sucesso!";
 } else {
   echo "Não foi possível enviar o e-mail.";
   echo "Detalhes do erro: " . $mail->ErrorInfo;
 }


//FORMULARIO ANTIGO
// $name       = @trim(stripslashes($_POST['name'])); 
// $from       = @trim(stripslashes($_POST['email'])); 
// $subject    = @trim(stripslashes($_POST['subject'])); 
// $tel        = @trim(stripslashes($_POST['tel']));
// $message    = @trim(stripslashes($_POST['message'])); 
// $to   		= 'arthur@gmail.com';//replace with your email

// $headers   = array();
// $headers[] = "MIME-Version: 1.0";
// $headers[] = "Content-type: text/plain; charset=iso-8859-1";
// $headers[] = "From: {$name} <{$from}>";
// $headers[] = "Reply-To: <{$from}>";
// $headers[] = "Subject: {$subject}";
// $headers[] = "X-Mailer: PHP/".phpversion();

// mail($to, $subject, $message+' /n Telefone: '+$tel, $headers);

// die;

