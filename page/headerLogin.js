function loginheader() {
    const isLoggIn = localStorage.getItem("isLogin") === "true";
    const loginBtn = document.getElementById("login");
    const cartBtn = document.getElementById("cart");
    const profileBtn = document.getElementById("tkct");

    if (isLoggIn) {
        cartBtn.style.display = "block";
        profileBtn.style.display = "block";
        loginBtn.style.display = "none";
    } else {
        cartBtn.style.display = "none";
        profileBtn.style.display = "none";
        loginBtn.style.display = "block";
    }
}

window.onload = function () {
    loginheader();
};
