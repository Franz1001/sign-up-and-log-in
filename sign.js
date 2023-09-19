function validateForm() {
    // Get form input elements
    var firstNameInput = document.getElementById("firstName");
    var middleInitialInput = document.getElementById("middleInitial");
    var lastNameInput = document.getElementById("lastName");
    var emailInput = document.getElementById("email");
    var passwordInput = document.getElementById("password");

    // Reset any previous error messages
    resetErrors();

    // Validate First Name
    if (firstNameInput.value.trim() === '') {
        setError(firstNameInput, 'First Name is required');
    } else if (firstNameInput.value.trim().length < 2) {
        setError(firstNameInput, 'First Name must be at least 2 characters');
    }

    // Validate Last Name
    if (lastNameInput.value.trim() === '') {
        setError(lastNameInput, 'Last Name is required');
    } else if (lastNameInput.value.trim().length < 2) {
        setError(lastNameInput, 'Last Name must be at least 2 characters');
    }

    // Validate Middle Initial
    if (middleInitialInput.value.trim() === '') {
        setError(middleInitialInput, 'Middle Name is required');
    } else if (middleInitialInput.value.trim().length < 2) {
        setError(middleInitialInput, 'Middle Name must be at least 2 characters');
    }

    // Validate Email Address
    if (emailInput.value.trim() === '') {
        setError(emailInput, 'Email is required');
    } else if (!emailPattern.test(emailInput.value.trim())) {
        setError(emailInput, 'Invalid Email Address');
    }

    // Validate Password
    if (passwordInput.value.trim() === '') {
        setError(passwordInput, 'Password is required');
    } else if (passwordInput.value.trim().length < 6) {
        setError(passwordInput, 'Password must be at least 6 characters');
    }

    // Check if any errors were found
    if (document.querySelectorAll('.error').length === 0) {
        alert('Success! Form submitted successfully.');
        // You can submit the form here if needed
    }
}


function setError(inputElement, errorMessage) {
    // Create a div element for the error message
    var errorElement = document.createElement('div');
    errorElement.className = 'error';
    errorElement.innerText = errorMessage;

    // Add CSS styles for error messages
    errorElement.style.fontSize = 'px'; // Set the font size to your desired value
    errorElement.style.color = 'red'; // Set the text color to red or your desired color

    // Insert the error message before the input element
    inputElement.parentNode.insertBefore(errorElement, inputElement);
}



function resetErrors() {
    var errorElements = document.querySelectorAll('.error');
    errorElements.forEach(function (errorElement) {
        errorElement.parentNode.removeChild(errorElement);
    });
}

// Attach the validateForm function to the form's submit event
document.getElementById("myForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission
    validateForm();
});

// Attach the resetForm function to the Reset button
document.getElementById("resetButton").addEventListener("click", function () {
    resetForm();
});

function resetForm() {
    document.getElementById("firstName").value = "";
    document.getElementById("middleInitial").value = "";
    document.getElementById("lastName").value = "";
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
    resetErrors();
}


// Add this to your JavaScript
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("myForm");
    const successMessage = document.getElementById("successMessage");
    const resetButton = document.getElementById("resetButton"); // Get the reset button element

    form.addEventListener("submit", function (e) {
        e.preventDefault(); // Prevent the default form submission behavior

        // Check for form validation (you can add your validation logic here)
        const firstName = document.getElementById("firstName").value;
        const middleInitial = document.getElementById("middleInitial").value;
        const lastName = document.getElementById("lastName").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        if (firstName.trim() === "" || lastName.trim() === "" || email.trim() === "" || password.trim() === "") {
            alert("Please fill in all required fields.");
            return;
        }

        // Store email and password in localStorage (not recommended for production)
        localStorage.setItem("userEmail", email);
        localStorage.setItem("userPassword", password);

        // If the form is valid, display the success message and hide the form
        form.style.display = "none";
        successMessage.style.display = "block";

        // Hide the reset button
        resetButton.style.display = "none"; // Set the reset button's display property to "none"
    });
});

function goBackToSignUp() {
    // Hide the success message
    var successMessage = document.getElementById("successMessage");
    successMessage.style.display = "none";

    // Show the signup form
    var myForm = document.getElementById("myForm");
    myForm.style.display = "block";
}
// Add this function to your Sign Up JavaScript
function registerUser() {
    var firstName = document.getElementById("firstName").value;
    var middleInitial = document.getElementById("middleInitial").value;
    var lastName = document.getElementById("lastName").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    // Check if any required fields are empty

    // Save user registration data in local storage
    localStorage.setItem("userFirstName", firstName);
    localStorage.setItem("userLastName", lastName);
    localStorage.setItem("userEmail", email);
    localStorage.setItem("userPassword", password);

    // Add the following line to hide the "Log In" button
    document.getElementById("loginButton").style.display = "none";
}
