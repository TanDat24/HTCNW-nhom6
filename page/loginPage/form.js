// Disable form submissions if there are invalid fields
(function () {
    'use strict';
    window.addEventListener('load', function () {
        // Get the forms we want to add validation styles to
        var forms = document.getElementsByClassName('needs-validation');
        // Loop over them and prevent submission
        var validation = Array.prototype.filter.call(forms, function (form) {
            form.addEventListener('submit', function (event) {
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add('was-validated');
            }, false);
        });
    }, false);
})();

//  Đóng modal trước khi mở modal mới
$('#myModal, #QMK, #dangKy').on('show.bs.modal', function (e) {
    $('.modal').not($(this)).each(function () {
        $(this).modal('hide');
    });
});

let flagEmail = false;
let flagPhone = false;
// Show Email form, hide Phone form
document.getElementById("showEmailForm").addEventListener("click", function () {

    document.getElementById("EmailFormWrapper").style.display = "block";
    document.getElementById("PhoneFormWrapper").style.display = "none";
    // validation form login
    const EmailLogin = document.querySelector(".loginemail");
    // const SDTLogin = document.querySelector(".form-control.loginsdt");
    const PasswordLogin = document.querySelector(".loginpassemail");
    const btnLogin = document.querySelector(".btnlogin");

    // validation form login
    btnLogin.addEventListener("click", (e) => {
        e.preventDefault();
        if (EmailLogin.value === "" || PasswordLogin.value === "") {
            alert("Thông tin đăng nhập không được để trống");
        } else {
            const user = JSON.parse(localStorage.getItem('user'));
            if (
                user.email === EmailLogin.value &&
                user.password === PasswordLogin.value
            ) {
                alert("Đăng Nhập Thành Công");
                window.location.href = "../homePage/homePage.html";
            } else {
                alert("Tài khoản hoặc mật khẩu không đúng");
            }
        }
    });
});

// Show Phone form, hide Email form
document.getElementById("showPhoneForm").addEventListener("click", function () {
    document.getElementById("EmailFormWrapper").style.display = "none";
    document.getElementById("PhoneFormWrapper").style.display = "block";

    const SDTLogin = document.querySelector(".loginsdt");
    const PasswordLoginSDT = document.querySelector(".loginpass");
    const btnLoginSDT = document.querySelector(".btnloginsdt");

    btnLoginSDT.addEventListener("click", (e) => {
        e.preventDefault();
        if (SDTLogin.value === "" || PasswordLoginSDT.value === "") {
            alert("Thông tin đăng nhập không được để trống");
        } else {
            const user = JSON.parse(localStorage.getItem('user'));

            if (
                user.sdt === SDTLogin.value &&
                user.password === PasswordLoginSDT.value
            ) {
                alert("Đăng Nhập Thành Công");
                window.location.href = "../homePage/homePage.html";
            } else {
                alert("Tài khoản hoặc mật khẩu không đúng");
            }
        }
    });
});