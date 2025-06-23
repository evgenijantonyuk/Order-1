<?php
    $login = $_POST['name']
    $text = $_POST['text']
    $email = $_POST['email']
    $password = $_POST['password']

    $login = htmlspecialchars($name)
    $text = htmlspecialchars($text)
    $email = htmlspecialchars($email)
    $password = htmlspecialchars($password)

        $login = urldecode($name)
        $text = urldecode($text)
        $email = urldecode($email)
        $password = urldecode($password)

            $login = trim($name)
            $text = trim($text)
            $email = trim($email)
            $password = trim($password)

            if(mail("evgenijantonyuk@gmail.com",
            "Новон письмо с сайта",
            "Логин: " $name "\n"
            "Текст письма: " $text "\n"
            "Электронныя почна: " $email "\n"
            "Пароль: " $password "\n"
            "From: no-replay@mydomain.ru \r\n")
            {
            echo("Письмо успешно отправлено");
            } else {
            echo("Есть ошибки, проверьте данные...");
            }

?>
