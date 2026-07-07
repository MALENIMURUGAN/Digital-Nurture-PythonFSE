document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("registrationForm");
    const username = document.getElementById("username");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const successBanner = document.getElementById("successBanner");

    // Standard RFC email testing regular expression syntax matrix
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Helper utility to flag field input errors clearly
    const showValidationError = (inputField, errorElementId) => {
        inputField.classList.add("invalid");
        inputField.classList.remove("valid");
        document.getElementById(errorElementId).style.display = "block";
    };

    // Helper utility to clear errors and mark inputs valid
    const clearValidationError = (inputField, errorElementId) => {
        inputField.classList.add("valid");
        inputField.classList.remove("invalid");
        document.getElementById(errorElementId).style.display = "none";
    };

    // Intercept submit button execution context pipeline
    form.addEventListener("submit", (event) => {
        event.preventDefault(); // Stop default browser refresh behaviors
        
        let isFormValid = true;
        successBanner.style.display = "none";

        // Validate Username Field Constraints
        if (username.value.trim().length < 5) {
            showValidationError(username, "usernameError");
            isFormValid = false;
        } else {
            clearValidationError(username, "usernameError");
        }

        // Validate Email Field Format Logic
        if (!emailRegex.test(email.value.trim())) {
            showValidationError(email, "emailError");
            isFormValid = false;
        } else {
            clearValidationError(email, "emailError");
        }

        // Validate Password Character Length Limits
        if (password.value.trim().length < 8) {
            showValidationError(password, "passwordError");
            isFormValid = false;
        } else {
            clearValidationError(password, "passwordError");
        }

        // Output success state if everything looks good!
        if (isFormValid) {
            successBanner.style.display = "block";
            form.reset(); // Wipe inputs safely
            
            // Clear valid highlights safely after complete submission execution
            setTimeout(() => {
                username.classList.remove("valid");
                email.classList.remove("valid");
                password.classList.remove("valid");
            }, 3000);
        }
    });
});