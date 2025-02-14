document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); 

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();
        const responseMessage = document.getElementById("responseMessage");

        let errors = [];

        if (name.length < 3) {
            errors.push("The name must contain at least 3 characters.");
        }

        const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
        if (!emailPattern.test(email)) {
            errors.push("Please enter a valid email address.");
        }

        if (message.length < 10) {
            errors.push("The message must be at least 10 characters long.");
        }

        if (errors.length > 0) {
            responseMessage.style.color = "red";
            responseMessage.innerText = errors.join("\n");
        } else {
            responseMessage.style.color = "green";
            responseMessage.innerText = "Your message has been sent successfully!";
            form.reset();
        }
    });
});
