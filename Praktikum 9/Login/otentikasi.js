const submit_btn = document.getElementById("submit");
const toggle = document.getElementById("toggle");

// Toggle show/hide password
toggle.addEventListener("click", () => {
    const password_inp = document.getElementById("password");
    if (password_inp.type === "password") {
        password_inp.type = "text";
    } else {
        password_inp.type = "password";
    }
});

// Login button
submit_btn.addEventListener("click", () => {
    console.log("login");

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    console.log(username);

    // username=ahmad2017 , password=integrity
    if (username === "ahmad2017" && password === "integrity") {
        window.location.href = "home.html";
    } else {
        alert("Login Gagal");
    }
});
