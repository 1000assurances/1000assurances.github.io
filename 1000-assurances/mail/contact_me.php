<?php
// Check for empty fields
if(empty($_POST['name'])  		||
   empty($_POST['email']) 		||
   empty($_POST['object']) 		||
   empty($_POST['message'])	||
   !filter_var($_POST['email'],FILTER_VALIDATE_EMAIL))
   {
	echo "No arguments Provided!";
	return false;
   }

$name = $_POST['name'];
$email_address = $_POST['email'];
$object = $_POST['object'];
$message = $_POST['message'];

// Create the email and send the message
$to = 'dubois.rom@gmail.com'; // Add your email address inbetween the '' replacing yourname@yourdomain.com - This is where the form will send a message to.
$email_subject = "Formulaire 1000 Assurances:  $name";
$email_body = "Vous avez reçu un message depuis le formulaire du site.\n\n"."Voici les détails:\n\Nom: $name\n\nEmail: $email_address\n\Objet: $object\n\nMessage:\n$message";
$headers = "From: noreply@scille.eu\n"; // This is the email address the generated message will be from. We recommend using something like noreply@yourdomain.com.
$headers .= "Reply-To: $email_address";
mail($to,$email_subject,$email_body,$headers);
return true;
?>
