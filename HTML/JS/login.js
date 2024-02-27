function login() {
    const nameEl = document.querySelector("#uname");
    const passEl = document.querySelector('#psw')
    localStorage.setItem("userName", nameEl.value);
    localStorage.setItem("password", passEl.value);
    window.location.href = "book.html";
}