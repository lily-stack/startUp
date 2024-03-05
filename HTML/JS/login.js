function login() {
    console.log("Login button clicked");
    const nameEl = document.querySelector("#uname");
    console.log("Username:", nameEl.value);
    const passEl = document.querySelector('#psw');
    localStorage.setItem("userName", nameEl.value);
    localStorage.setItem("password", passEl.value);
    window.location.href = "book.html";
}