
document.addEventListener('click', function (event) {
    if (event.target.classList.contains('sand-quarry-btn')) {
        const card = event.target.closest('.card');
        const productTitle = card.querySelector('.card-title').textContent.trim();
        document.getElementById('productName').value = productTitle;
    }
});


function validateForm() {
    let isValid = true;

    // Clear previous error messages
    document.querySelectorAll('.error').forEach(el => el.innerHTML = "");

    // Full Name Validation
    const fullNameInput = document.getElementById('fullName');
    const fullNameError = fullNameInput.nextElementSibling; // Error element after the input
    if (fullNameInput.value.trim().length < 3) {
        fullNameError.innerHTML = "Name must be at least 3 characters long.";
        isValid = false;
    }

    // Email Validation
    const emailInput = document.getElementById('email');
    const emailError = emailInput.nextElementSibling; // Error element after the input
    if (emailInput.value.trim().length < 8 || !/\S+@\S+\.\S+/.test(emailInput.value.trim())) {
        emailError.innerHTML = "Please enter a valid email address.";
        isValid = false;
    }

    // Address Validation
    const addressInput = document.getElementById('address');
    const addressError = addressInput.nextElementSibling; // Error element after the input
    if (!addressInput.value.trim()) {
        addressError.innerHTML = "Address is required.";
        isValid = false;
    }

    // Contact Number Validation
    const contactNumberInput = document.getElementById('contactNumber');
    const contactNumberError = contactNumberInput.nextElementSibling; // Error element after the input
    if (!contactNumberInput.value.trim()) {
        contactNumberError.innerHTML = "Contact number is required.";
        isValid = false;
    }

    // Message Validation
    const messageInput = document.getElementById('message');
    const messageError = messageInput.nextElementSibling; // Error element after the input
    if (!messageInput.value.trim()) {
        messageError.innerHTML = "Message is required.";
        isValid = false;
    }

    return isValid; // Prevent form submission if invalid
}
