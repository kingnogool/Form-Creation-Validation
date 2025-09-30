document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registration-form');
    const feedbackDiv = document.getElementById('form-feedback');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the form from submitting

        // Retrieve and trim input values
        const username = document.getElementById('username').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();

        let isValid = true;
        const messages = [];

        // Username Validation
        if (username.length < 3) {
            isValid = false;
            messages.push('Username must be at least 3 characters long.');
        }

        // Email Validation
        if (!email.includes('@') || !email.includes('.')) {
            isValid = false;
            messages.push('Email must be a valid email address (e.g., user@example.com).');
        }

        // Password Validation
        if (password.length < 8) {
            isValid = false;
            messages.push('Password must be at least 8 characters long.');
        }

        // Displaying Feedback
        feedbackDiv.style.display = "block"; // Make feedback div visible

        if (isValid) {
            feedbackDiv.textContent = 'Registration successful!';
            feedbackDiv.style.color = '#28a745'; // Green color for success
            feedbackDiv.style.backgroundColor = '#d4edda'; // Light green background for success
            // Optionally, clear the form here:
            // form.reset();
        } else {
            feedbackDiv.innerHTML = messages.join('<br>'); // Join messages with line breaks
            feedbackDiv.style.color = '#dc3545'; // Red color for errors
            feedbackDiv.style.backgroundColor = '#f8d7da'; // Light red background for errors
        }
    });
});
