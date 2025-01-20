<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $productName = htmlspecialchars($_POST['product_name']);
    $email = htmlspecialchars($_POST['email']);
    $phone = htmlspecialchars($_POST['phone']);
    $messageContent = htmlspecialchars($_POST['message']);
    $to = 'admin@sairubberengg.co.in';
        $subject = "Sai Ruuber Products Enqarry";

    $message = "
    <html>
    <head>
        <title>Sai Ruuber Products Enqarry</title>
    </head>
    <body>
        <p><strong>Product Name:</strong> $productName</p>
        <p><strong>Email:</strong> $email</p>
        <p><strong>Phone:</strong> $phone</p>
        <p><strong>Message:</strong> $messageContent</p>
    </body>
    </html>";

    $headers = "From: noreply@saltonteck.com\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-type: text/html\r\n";

    if (mail($to, $subject, $message, $headers)) {
        echo "<script>alert('Thank you for your submission.'); window.location.href = '/index.html';</script>";
    } else {
        echo "<script>alert('Error: Please try again later.'); window.location.href = '/contact-us.html';</script>";
    }
}
?>
