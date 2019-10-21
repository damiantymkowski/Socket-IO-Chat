 <?php

	$status = ['status' => 9];	//default status code: unidentified error

 	include ('includes/db_init.php');
 	
 	$data = json_decode(file_get_contents('php://input'));
 	$stmt = $pdo -> prepare ('select name from users where name = ?');
 	$stmt -> execute ([$data -> name]);

 	if ($stmt -> rowCount() == 0)	//username is available
 	{
		//we're adding user to database
		$stmt = $pdo -> prepare ('insert into users (name, password) values (:name, :pass)');
		$data -> password = password_hash ($data -> password, PASSWORD_DEFAULT);
		$stmt -> execute ([':name' => $data -> name, ':pass' => $data -> password]);
		if ($stmt -> rowCount() == 1)
			$status = ['status' => 0];	//all right, only one row added
 	}
 	else
 	{
 		//return error
 		$status = ['status' => 1];
 	}
 	echo json_encode($status);	//return status code
 	
