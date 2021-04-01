<?php
	//принятие данных из формы.
	$email=$_POST['email'];
	$name=$_POST['name'];
	$phone=$_POST['phone'];
	$subject="=?utf-8?B?".base64_encode("Сообщение с сайта А25")."?=";
	$headers="From:$email\r\nReply-to:$email";
	$success="$name\r\n$phone";
	
	//отправляем данные на почту администратору
	mail("wlegoofkool@mail.ru",$subject,$headers,$success);	
	
	//ответ заказчику, о оформление заявки
	echo("Ваш заявка принята. Ожидайте ответа на почту которую вы указали.");
	
	//заносим данные зказа в базу данных	
	$CONNECT = mysqli_connect('localhost', 'root', '', 'a0525410_a25'); 
	mysqli_query($CONNECT,'INSERT INTO `users` (`id`, `name`, `phone`, `email`, `regdate`) VALUES (null, "'.$name.'", "'.$phone.'", "'.$email.'", CURRENT_TIMESTAMP)');
	
?>