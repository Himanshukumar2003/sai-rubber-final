<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Sanitize and retrieve form inputs
    $firstName = htmlspecialchars($_POST['name']);
    $lastName = htmlspecialchars($_POST['last_name']);
    $email = htmlspecialchars($_POST['email']);
    $phone = htmlspecialchars($_POST['phone']);
    $messageContent = htmlspecialchars($_POST['message']);

    // Validate inputs
    $errors = [];

    if (empty($firstName)) {
        $errors[] = "Please enter your First Name.";
    }
    if (empty($lastName)) {
        $errors[] = "Please enter your Last Name.";
    }
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $errors[] = "Please enter a valid Email address.";
    }
    if (empty($phone) || !preg_match("/^[0-9]{10}$/", $phone)) {
        $errors[] = "Please enter a valid 10-digit Phone Number.";
    }
    if (empty($messageContent)) {
        $errors[] = "Please enter a message.";
    }

    if (!empty($errors)) {
        echo "<script>
            alert('" . implode("\\n", $errors) . "');
            window.history.back();
        </script>";
        exit;
    }

    // Email configuration
    $to = "devliyalhimanshu@gmail.com"; // Replace with your email address
    $subject = "Sai Rubber Contact Enquiry";

    $message = "
    <html>
    <head>
        <title>Sai Rubber Products Form Submission</title>
    </head>
    <body>
        <p><strong>First Name:</strong> $firstName</p>
        <p><strong>Last Name:</strong> $lastName</p>
        <p><strong>Email:</strong> $email</p>
        <p><strong>Phone:</strong> $phone</p>
        <p><strong>Message:</strong> $messageContent</p>
    </body>
    </html>
    ";

    $headers = "From: noreply@sairubber.com\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-type: text/html\r\n";

    // Send email
    if (mail($to, $subject, $message, $headers)) {
        echo "<script>
            alert('Thank you for your submission.');
            window.location.href = '/index.html';
        </script>";
    } else {
        echo "<script>
            alert('Error: Could not send your message. Please try again later.');
            window.history.back();
        </script>";
    }
}
?>
