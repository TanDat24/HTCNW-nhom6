// validation form register and register user local storage
const inputTen = document.querySelector(".form-control.ten");
const inputHo = document.querySelector(".form-control.ho");
const inputSDT = document.querySelector(".form-control.sdt");
const inputEmail = document.querySelector(".form-control.email");
const inputDate = document.querySelector(".form-control.date");
const inputPass = document.querySelector(".form-control.repass");
const btnDK = document.querySelector(".btn.btn-secondary.btndk");

// validation form register and register user local storage

btnDK.addEventListener("click", (e) => {
    e.preventDefault();
    if (
        inputSDT.value === "" ||
        inputEmail.value === "" ||
        inputPass.value === ""
    ) {
        alert("vui lòng không để trống");
    } else {
        // array user
        const user = {
            ten: inputTen.value,
            ho: inputHo.value,
            sdt: inputSDT.value,
            email: inputEmail.value,
            ngaysinh: inputDate.value,
            password: inputPass.value,
        };
        let json = JSON.stringify(user);
        localStorage.setItem("user", json);
        alert("Đăng Ký Thành Công");
        window.location.href = "login.html";
    }
});
