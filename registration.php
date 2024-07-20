<?php
    $email = $_POST['email'];
    $password = $_POST['password'];

    // Database information
    $host = "localhost";
    $dbUsername = "root";
    $dbPassword = "";
    $dbName = "authentication";

    // Connect to Database

    $con = new mysqli($host, $dbUsername, $dbPassword, $dbName);

    if ($con->connect_error) {
        die("Failed to connect : ".$con->connect_error);
    }
    else {
        $length = 128;
        $salt = substr(str_shuffle(str_repeat($x='0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ', ceil($length/strlen($x)) )),1,$length);
        $salted_hash = hash('sha3-256', $password . $salt);
        $stmt = $con->prepare("insert into login_data(email,password,salt,is_admin) values(?,?,?,0)");
        $stmt->bind_param("sss", $email, $salted_hash, $salt);
        $stmt->execute();
        session_start();
        header("Location: ./main.html");
    }

    exit();
?>