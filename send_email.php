<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $phone = htmlspecialchars($_POST['phone']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    $to = "krasniikolos@yandex.ru";  
    $subject = "Новое сообщение с формы обратной связи";
    $body = "Имя: $name\nТелефон: $phone\nEmail: $email\nСообщение:\n$message";
    $headers = "From: $email";

    if (mail($to, $subject, $body, $headers)) {
        echo "Сообщение успешно отправлено";
    } else {
        echo "Произошла ошибка при отправке сообщения.";
    }
} else {
    echo "Некорректный запрос.";
}
?>