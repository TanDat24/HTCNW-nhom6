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
