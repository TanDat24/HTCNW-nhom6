document.addEventListener("DOMContentLoaded", function () {
    // Bắt sự kiện submit cho form đăng nhập bằng email
    document.querySelector("#EmailFormWrapper form").addEventListener("submit", function (event) {
        event.preventDefault(); // Ngăn chặn việc gửi form mặc định

        var email = document.getElementById("email").value;
        var password = document.getElementById("pwd").value;

        if (email === "nguyenvana@gmail.com" && password === "123456789") {
            redirectHomePage(); // Chuyển hướng đến trang chính nếu đăng nhập thành công
        } else {
            alert("Mật khẩu hoặc email không đúng. Vui lòng kiểm tra lại!");
        }
    });

    // Bắt sự kiện submit cho form đăng nhập bằng số điện thoại
    document.querySelector("#PhoneFormWrapper form").addEventListener("submit", function (event) {
        event.preventDefault(); // Ngăn chặn việc gửi form mặc định

        var phone = document.getElementById("SDT").value;
        var password = document.getElementById("pwd2").value;
        console.log(phone);
        console.log(password);
        if (phone === "0912345678" && password === "123456789") {
            redirectHomePage(); // Chuyển hướng đến trang chính nếu đăng nhập thành công
        } else {
            alert("Số điện thoại hoặc mật khẩu không đúng. Vui lòng kiểm tra lại!");
        }
    });

    // Hàm chuyển hướng đến trang chính
    function redirectHomePage() {
        // Hiển thị overlay mờ và spinner
        document.getElementById("overlay").style.display = "block";

        // Đợi 1 giây trước khi chuyển hướng
        setTimeout(function () {
            // Chuyển hướng người dùng đến trang homePage.html
            window.location.href = "../homePage/homePage.html";
        }, 1000); // 1000 miliseconds = 1 giây
    }
});


document.addEventListener("DOMContentLoaded", function () {
    // Lắng nghe sự kiện click trên nút đăng nhập
    document
        .querySelector(".custom-btn")
        .addEventListener("click", function () {
            // Lấy đối tượng ô email
            var emailInput = document.getElementById("email");

            // Focus vào ô email
            emailInput.focus();
        });
});

