function validateForm(event) {
    // Prevent default form submission
    event.preventDefault();

    // Grab all the input fields
    const nameField = document.getElementById("name");
    const lastNameField = document.getElementById("last-name");
    const emailField = document.getElementById("Email:");
    const phoneField = document.getElementById("phone");
    const messageField = document.getElementById("message");
    let isValid = true;

    // Name validation
    if (nameField.value.trim().length < 3 || /\s/.test(nameField.value.trim())) {
        nameField.classList.add("is-invalid");
        isValid = false;
    } else {
        nameField.classList.remove("is-invalid");
    }

    // Last Name validation
    if (lastNameField.value.trim().length < 3) {
        lastNameField.classList.add("is-invalid");
        isValid = false;
    } else {
        lastNameField.classList.remove("is-invalid");
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailField.value.trim())) {
        emailField.classList.add("is-invalid");
        isValid = false;
    } else {
        emailField.classList.remove("is-invalid");
    }

    // Phone validation
    if (!/^\d{10}$/.test(phoneField.value.trim())) {
        phoneField.classList.add("is-invalid");
        isValid = false;
    } else {
        phoneField.classList.remove("is-invalid");
    }

    // Message validation
    if (messageField.value.trim().length === 0) {
        messageField.classList.add("is-invalid");
        isValid = false;
    } else {
        messageField.classList.remove("is-invalid");
    }

    // Submit the form if all validations pass
    if (isValid) {
        document.getElementById("claimForm").submit();
    }
}