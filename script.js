function login() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let message = document.getElementById("message");

    // Dummy credentials
    let validEmail = "test@gmail.com";
    let validPassword = "Password@123";

    // Validation
    if (email === "" || password === "") {
        message.innerText = "Fields cannot be empty";
        return;
    }

    // Email format check
    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
        message.innerText = "Invalid email format";
        return;
    }

    // Login check
    if (email === validEmail && password === validPassword) {
        message.style.color = "green";
        message.innerText = "Login Successful!";
    } else {
        message.innerText = "Invalid email or password";
    }
          }
