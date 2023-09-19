document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("myForm");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const emailError = document.getElementById("emailError");
    const passwordError = document.getElementById("passwordError");

    // Attach the resetForm function to the Reset button
    document.getElementById("resetButton").addEventListener("click", function () {
        resetForm();
    });

    function resetForm() {
        emailInput.value = "";
        passwordInput.value = "";
        emailError.innerText = "";
        passwordError.innerText = "";
    }

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form submission
        let isValid = true;

        // Check if email is empty
        if (emailInput.value.trim() === "") {
            emailError.innerText = "Email is required";
            isValid = false;
        } else {
            emailError.innerText = "";
        }

        // Check if password is empty
        if (passwordInput.value.trim() === "") {
            passwordError.innerText = "Password is required";
            isValid = false;
        } else {
            passwordError.innerText = "";
        }

        if (!isValid) {
            return;
        }

        // Retrieve user registration data from local storage
        const storedEmail = localStorage.getItem("userEmail");
        const storedPassword = localStorage.getItem("userPassword");

        // Check if the entered email and password match the stored values
        if (emailInput.value === storedEmail && passwordInput.value === storedPassword) {
            // Redirect to the desired link on successful login
            window.location.href = "home.html";
        } else {
            emailError.innerText = "Invalid email or password";
            passwordError.innerText = "Invalid email or password";
        }
    });

    // Reset error messages when inputs change
    emailInput.addEventListener("input", function () {
        emailError.innerText = "";
    });

    passwordInput.addEventListener("input", function () {
        passwordError.innerText = "";
    });
});
