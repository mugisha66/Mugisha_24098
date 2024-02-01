function validateForm() {
    var id = document.getElementById('id').value;
    var username = document.getElementById('username').value;
    var phoneNumber = document.getElementById('phoneNumber').value;
    var password = document.getElementById('password').value;
    var email = document.getElementById('email').value;

    // Basic validation for ID, phone number, and email
    if (!/^\d+$/.test(id)) {
        alert('Invalid ID. Please enter a numeric value.');
        return;
    }

    if (!/^\d{10}$/.test(phoneNumber)) {
        alert('Invalid phone number. Please enter a 10-digit number.');
        return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
        alert('Invalid email address. Please enter a valid email.');
        return;
    }

    // Password validation
    if (password.length < 6) {
        alert('Password must be at least 6 characters long.');
        return;
    }

    // Perform additional validation as needed

    // If all validations pass, show success message
    alert('Signup successful!');
}
