/* =====================================================
   LOGIN / SIGN UP SWITCH
===================================================== */

function showSignup(event) {

    event.preventDefault();

    const signupSection =
        document.querySelector(".signup-section");

    signupSection.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });

}


function showLogin(event) {

    event.preventDefault();

    const loginSection =
        document.querySelector(".login-section");

    loginSection.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });

}


/* =====================================================
   SHOW / HIDE PASSWORD
===================================================== */

function togglePassword(inputId, button) {

    const input =
        document.getElementById(inputId);

    if (input.type === "password") {

        input.type = "text";

        button.classList.add("showing");

    } else {

        input.type = "password";

        button.classList.remove("showing");

    }

}


/* =====================================================
   FORGOT PASSWORD
===================================================== */

function forgotPassword(event) {

    event.preventDefault();

    alert(
        "Password reset feature is not connected yet."
    );

}


/* =====================================================
   LOGIN FORM
===================================================== */

document
    .getElementById("loginForm")
    .addEventListener("submit", function(event) {

        event.preventDefault();

        const email =
            document.getElementById("loginEmail").value.trim();

        const password =
            document.getElementById("loginPassword").value.trim();


        if (email === "" || password === "") {

            alert("Please fill in all fields.");

            return;
        }


        alert("Sign In successful!");

    });


/* =====================================================
   SIGN UP FORM
===================================================== */

document
    .getElementById("signupForm")
    .addEventListener("submit", function(event) {

        event.preventDefault();

        const name =
            document.getElementById("fullName").value.trim();

        const email =
            document.getElementById("signupEmail").value.trim();

        const password =
            document.getElementById("signupPassword").value;

        const confirmPassword =
            document.getElementById("confirmPassword").value;


        /* Check all fields */

        if (
            name === "" ||
            email === "" ||
            password === "" ||
            confirmPassword === ""
        ) {

            alert("Please fill in all fields.");

            return;
        }


        /* Check password */

        if (password !== confirmPassword) {

            alert("Passwords do not match.");

            return;
        }


        /* Successful */

        alert("Sign Up successful!");

    });