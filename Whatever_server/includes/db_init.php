<?php
	try
	{
		$pdo = new PDO ('mysql:host=localhost;dbname=whatever;charset=utf8', '', '');	
	}
	catch (PDOException $e)
	{
		echo 'Wystąpił błąd przy łączeniu z bazą danych: '. $e -> getMessage();
	}
