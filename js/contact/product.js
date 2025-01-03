function validateForm(event) {
    event.preventDefault(); // Prevent default form submission

    const productName = document.getElementById('product-name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const message = document.getElementById('message').value.trim();

    // Error containers
    const productNameError = document.getElementById('product-name-error');
    const emailError = document.getElementById('email-error');
    const phoneError = document.getElementById('phone-error');
    const messageError = document.getElementById('message-error');

    let isValid = true;

    // Clear previous error messages
    productNameError.textContent = '';
    emailError.textContent = '';
    phoneError.textContent = '';
    messageError.textContent = '';

    // Validate Product Name
    if (productName === '') {
        isValid = false;
        productNameError.textContent = 'Please enter the product name.';
    }

    // Validate Email
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailPattern.test(email)) {
        isValid = false;
        emailError.textContent = 'Please enter a valid email address.';
    }

    // Validate Phone
    const phonePattern = /^[0-9]{10}$/;
    if (!phonePattern.test(phone)) {
        isValid = false;
        phoneError.textContent = 'Please enter a valid 10-digit phone number.';
    }

    // Validate Message
    if (message === '') {
        isValid = false;
        messageError.textContent = 'Please enter your message.';
    }

    // If valid, submit the form
    if (isValid) {
        document.getElementById('contact-form').submit();
    }
}