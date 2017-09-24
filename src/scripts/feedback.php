<?php
/**
 * Created by PhpStorm.
 * User: Saladin
 * Date: 26.08.2017
 * Time: 06:27
 */

mb_internal_encoding('utf-8');
$name = $_POST["name"];
$email = $_POST["email"];
$subject = $_POST["subject"];
$message = $_POST["message"];
$to = "joncolab@gmail.com";
$headers = "From: " . $name . " <" . $email . ">;";

if (mail($to, $subject, $message, $headers)) {
    echo 'success';
} else {
    echo 'error';
}

exit();