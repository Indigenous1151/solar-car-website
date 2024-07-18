// Server-side login credential verification
// By: Nick Kolesar
// Date: 8 July, 2024

<?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $email = $_POST['email']; // 'email' is taken from name attribute in input
        $password = $_POST['password'];

        session_start();

        $host = "localhost";
        $dbUsername = "root";
        $dbPassword = "";
        $dbName = "authentication";

        // Database connection
        $con = new mysqli($host, $dbUsername, $dbPassword, $dbName);

        if ($con->connect_error) {
            die("Failed to connect : ".$con->connect_error);
        } else {
            $stmt = $con->prepare("select * from login_data where email = ?");
            $stmt->bind_param("s", $email);
            $stmt->execute();
            $stmt_result = $stmt->get_result();
            
            // verify entered creds against db creds
            if ($stmt_result->num_rows > 0) {
                $data = $stmt_result->fetch_assoc();
                $salted_hash = hash('sha3-256', $password . $data['salt']);

                if ($data['password'] === $salted_hash) { // 'Password' here is the password attribute in the DB
                    header("Location: ./main.html");
                    exit;
                } else {
                    header("Location: ./index.html?status=invalid");
                    exit;
                }
            } else {
                header("Location: ./index.html?status=invalid");
                exit;
            }
        }
    }
?>
