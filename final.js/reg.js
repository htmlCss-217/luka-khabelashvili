document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("registerForm");
    const username = document.getElementById("username");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const confirmPassword = document.getElementById("confirm_password");

    form.addEventListener("submit", function (event) {
        let messages = [];

        
        if (username.value.trim().length < 3) {
            messages.push("Username must be at least 3 characters long.");
        }

      
        const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
        if (!emailPattern.test(email.value)) {
            messages.push("Please enter a valid email address.");
        }

       
        if (password.value.length < 6) {
            messages.push("Password must be at least 6 characters long.");
        }

        if (password.value !== confirmPassword.value) {
            messages.push("Passwords do not match.");
        }

        
        if (messages.length > 0) {
            event.preventDefault();
            alert(messages.join("\n"));
        }
    });
});
