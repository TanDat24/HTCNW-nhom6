function activateTab(tabId) {
    var tabPanes = document.querySelectorAll(".tab-pane");
    tabPanes.forEach(function (tabPane) {
        tabPane.classList.remove("show", "active");
    });

    document.querySelector(tabId).classList.add("show", "active");
}

function handleNavClick() {
    var navLinks = document.querySelectorAll(".nav-link");
    navLinks.forEach(function (navLink) {
        navLink.addEventListener("click", function (event) {
            event.preventDefault();

            var tabId = this.getAttribute("href");

            activateTab(tabId);
        });
    });
}

document.addEventListener("DOMContentLoaded", function () {
    handleNavClick();
});

document.addEventListener("DOMContentLoaded", function () {
    var navLinks = document.querySelectorAll(".nav-link");

    navLinks.forEach(function (navLink) {
        navLink.addEventListener("click", function () {
            var targetId = this.getAttribute("data-target");
            var targetDiv = document.querySelector(targetId);

            // Loại bỏ lớp "show active" từ tất cả các div có class là "collapse"
            var collapseDivs = document.querySelectorAll(".collapse");
            collapseDivs.forEach(function (collapseDiv) {
                collapseDiv.classList.remove("show", "active");
            });

            // Thêm lớp "show active" cho div mục tiêu
            targetDiv.classList.add("show", "active");

            // Loại bỏ lớp "show active" từ tất cả các thẻ a
            navLinks.forEach(function (link) {
                link.classList.remove("show", "active");
            });

            // Thêm lớp "show active" cho thẻ a được nhấp vào
            this.classList.add("show", "active");
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    var collapseInfo = document.getElementById("collapse-info");
    if (collapseInfo) {
        collapseInfo.classList.add("show"); // Hiển thị collapse
    }
});
function confirmLogout(event) {
    event.preventDefault();

    if (confirm("Bạn có chắc đăng xuất hay không?")) {
        window.location.href = "../login-logout/logout.html";
    }
}

function setPhoneNew() {
    var regexPhone = /^(03|05|07|08|09|01[2|6|8|9])([0-9]{8})\b$/;
    var phoneInput = document.getElementById("phoneInput").value;
    var phoneValue = document.getElementById("phoneValue");
    var editButton = document.getElementById("editButton");
    var editContainer = document.getElementById("editContainer");
    var errPhone = document.getElementById("errPhone");

    if (phoneValue.style.display === "none") {
        // Nếu trường nhập liệu đang hiển thị, kiểm tra và lưu giá trị mới
        if (regexPhone.test(phoneInput)) {
            phoneValue.innerText = phoneInput;
            phoneValue.style.display = "inline";
            editContainer.style.display = "none";
            editButton.textContent = "Chỉnh sửa";
            errPhone.innerText = "*";

            // Lưu giá trị vào localStorage
            localStorage.setItem("phoneValue", phoneInput);
        } else {
            errPhone.innerText = "Số điện thoại không đúng định dạng!";
        }
    } else {
        // Nếu trường nhập liệu đang ẩn, chuyển sang chế độ chỉnh sửa
        phoneValue.style.display = "none";
        editContainer.style.display = "inline";
        editButton.textContent = "Lưu";
        document.getElementById("phoneInput").value = phoneValue.textContent; // Khởi tạo giá trị của trường nhập liệu từ <p>
    }
}
function setBirthNew() {
    var regexBirth =
        /^(((0[1-9]|[12][0-9]|3[01])([/])(0[13578]|10|12)([/])(\d{4}))|(([0][1-9]|[12][0-9]|30)([/])(0[469]|11)([/])(\d{4}))|((0[1-9]|1[0-9]|2[0-8])([/])(02)([/])(\d{4}))|((29)(\/)(02)([/])([02468][048]00))|((29)([/])(02)([/])([13579][26]00))|((29)([/])(02)([/])([0-9][0-9][0][48]))|((29)([/])(02)([/])([0-9][0-9][2468][048]))|((29)([/])(02)([/])([0-9][0-9][13579][26])))$/;
    var birthInput = document.getElementById("birthInput").value;
    var birthValue = document.getElementById("birthValue");
    var editBirthButton = document.getElementById("editBirthButton");
    var editBirthContainer = document.getElementById("editBirthContainer");
    var errBirth = document.getElementById("errBirth");

    if (birthValue.style.display === "none") {
        if (regexBirth.test(birthInput)) {
            birthValue.innerText = birthInput;
            birthValue.style.display = "inline";
            editBirthContainer.style.display = "none";
            editBirthButton.textContent = "Chỉnh sửa";
            errBirth.innerText = "*";

            // Lưu giá trị vào localStorage
            localStorage.setItem("birthValue", birthInput);
        } else {
            errBirth.innerText =
                "Ngày sinh không đúng định dạng! VD:(01/01/2004)";
        }
    } else {
        birthValue.style.display = "none";
        editBirthContainer.style.display = "inline";
        editBirthButton.textContent = "Lưu";
        document.getElementById("birthInput").value = birthValue.textContent;
    }
}

function setNatiNew() {
    var regexNati = /^[^0-9]*$/;

    var natiInput = document.getElementById("natiInput").value;
    var natiValue = document.getElementById("natiValue");
    var editNatiButton = document.getElementById("editNatiButton");
    var editNatiContainer = document.getElementById("editNatiContainer");
    var errNati = document.getElementById("errNati");

    if (natiValue.style.display === "none") {
        if (regexNati.test(natiInput)) {
            natiValue.innerText = natiInput;
            natiValue.style.display = "inline";
            editNatiContainer.style.display = "none";
            editNatiButton.textContent = "Chỉnh sửa";
            errNati.innerText = "*";

            // Lưu giá trị vào localStorage
            localStorage.setItem("natiValue", natiInput);
        } else {
            errNati.innerText =
                "Ngày sinh không đúng định dạng! VD:(01/01/2004)";
        }
    } else {
        natiValue.style.display = "none";
        editNatiContainer.style.display = "inline";
        editNatiButton.textContent = "Lưu";
        document.getElementById("natiInput").value = natiValue.textContent;
    }
}

function setDiacNew() {
    var regexDiac = /^.{1,40}$/;

    var diacInput = document.getElementById("diacInput").value;
    var diacValue = document.getElementById("diacValue");
    var editDiacButton = document.getElementById("editDiacButton");
    var editDiacContainer = document.getElementById("editDiacContainer");
    var errDiac = document.getElementById("errDiac");

    if (diacValue.style.display === "none") {
        if (regexDiac.test(diacInput)) {
            diacValue.innerText = diacInput;
            diacValue.style.display = "inline";
            editDiacContainer.style.display = "none";
            editDiacButton.textContent = "Chỉnh sửa";
            errDiac.innerText = "*";

            // Lưu giá trị vào localStorage
            localStorage.setItem("diacValue", diacInput);
        } else {
            errDiac.innerText = "Địa chỉ tối đa 30 ký tự";
        }
    } else {
        diacValue.style.display = "none";
        editDiacContainer.style.display = "inline";
        editDiacButton.textContent = "Lưu";
        document.getElementById("diacInput").value = diacValue.textContent;
    }
}

//localStorage lưu thông tin người dùng
window.onload = function () {
    var savedBirth = localStorage.getItem("birthValue");
    var savedPhone = localStorage.getItem("phoneValue");
    var savedNati = localStorage.getItem("natiValue");
    var savedDiac = localStorage.getItem("diacValue");
    if (savedBirth) {
        document.getElementById("birthValue").innerText = savedBirth;
    }

    if (savedPhone) {
        document.getElementById("phoneValue").innerText = savedPhone;
    }
    if (savedNati) {
        document.getElementById("natiValue").innerText = savedNati;
    }
    if (savedDiac) {
        document.getElementById("diacValue").innerText = savedDiac;
    }
};

//localStorage lưu select theo dõi
document.addEventListener("DOMContentLoaded", function () {
    var radioButtons = document.querySelectorAll('input[type="radio"]');
    radioButtons.forEach(function (radioButton) {
        radioButton.addEventListener("change", handleRadioChange);
    });

    var savedChoice = localStorage.getItem("userChoice");
    if (savedChoice) {
        var selectedRadioButton = document.getElementById(savedChoice);
        if (selectedRadioButton) {
            selectedRadioButton.checked = true;
        }
    }
});

function handleRadioChange(event) {
    var selectedRadioButtonId = event.target.id;
    localStorage.setItem("userChoice", selectedRadioButtonId);
}

//localStorage lưu ưu đãi
document.addEventListener("DOMContentLoaded", function () {
    function saveToLocalStorage() {
        var checkbox1 = document.getElementById("checkbox1");
        var checkbox2 = document.getElementById("checkbox2");
        localStorage.setItem("checkbox1", checkbox1.checked);
        localStorage.setItem("checkbox2", checkbox2.checked);
    }

    function restoreFromLocalStorage() {
        var checkbox1 = document.getElementById("checkbox1");
        var checkbox2 = document.getElementById("checkbox2");
        checkbox1.checked = localStorage.getItem("checkbox1") === "true";
        checkbox2.checked = localStorage.getItem("checkbox2") === "true";
    }

    restoreFromLocalStorage();

    document
        .getElementById("checkbox1")
        .addEventListener("change", saveToLocalStorage);
    document
        .getElementById("checkbox2")
        .addEventListener("change", saveToLocalStorage);
});

//đăng xuất
function logout() {
    // Điều hướng sang trang đăng nhập
    localStorage.removeItem("isLogin");
    window.location.href = "../loginPage/login.html";
}
