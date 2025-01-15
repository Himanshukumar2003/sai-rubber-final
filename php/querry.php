<?php
$error_messages = [
    'name' => '',
    'email' => '',
    'address' => '',
    'phone' => '',
    'message' => '',
];
$success_message = '';

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $con_name = htmlspecialchars(trim($_POST['name']));
    $product_name = htmlspecialchars(trim($_POST['product_name']));
    $con_email = htmlspecialchars(trim($_POST['email']));
    $con_number = htmlspecialchars(trim($_POST['phone']));
    $con_address = htmlspecialchars(trim($_POST['address']));
    $con_message = htmlspecialchars(trim($_POST['message']));

    $is_valid = true;

    // Server-side validation
    if (empty($con_name) || strlen($con_name) < 3) {
        $error_messages['name'] = "Full Name must be at least 3 characters long.";
        $is_valid = false;
    }
    if (empty($con_email) || !filter_var($con_email, FILTER_VALIDATE_EMAIL)) {
        $error_messages['email'] = "Please enter a valid email address.";
        $is_valid = false;
    }
    if (empty($con_address)) {
        $error_messages['address'] = "Address is required.";
        $is_valid = false;
    }
    if (empty($con_number)) {
        $error_messages['phone'] = "Contact Number is required.";
        $is_valid = false;
    }
    if (empty($con_message)) {
        $error_messages['message'] = "Message is required.";
        $is_valid = false;
    }

    // If all fields are valid, send email
    if ($is_valid) {
        $to = 'info@saltonteck.com';
        $subject = "SAi Rubber Form Details";
        $message = "
        <html>
            <head><title>SAi Rubber Form Details</title></head>
            <body>
                <p><b>Name:</b> {$con_name}</p>
                <p><b>Email:</b> {$con_email}</p>
                <p><b>Contact Number:</b> {$con_number}</p>
                <p><b>Product Name:</b> {$product_name}</p>
                <p><b>Address:</b> {$con_address}</p>
                <p><b>Message:</b> {$con_message}</p>
            </body>
        </html>";
        $header = "From:info@saltonteck.com\r\n";
        $header .= "MIME-Version: 1.0\r\n";
        $header .= "Content-type: text/html\r\n";

        if (mail($to, $subject, $message, $header)) {
            $success_message = "Thank you for submitting the form.";
        } else {
            $error_messages['form'] = "Something went wrong. Please try again later.";
        }
    }
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Form Submission Status</title>
</head>
<body>
    <?php if (!empty($success_message)): ?>
        <div class="alert alert-success" role="alert">
            <?php echo $success_message; ?>
        </div>
    <?php endif; ?>

    <?php if (!empty($error_messages['form'])): ?>
        <div class="alert alert-danger" role="alert">
            <?php echo $error_messages['form']; ?>
        </div>
    <?php endif; ?>

    <a href="/index.html">Back to Home</a>
</body>
</html>
