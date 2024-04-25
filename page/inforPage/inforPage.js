// <<<<<<< DarkDev
// var data = {
//     id: 3,
//     name: "Hidden Mansions Saigon Resort",
//     star: 4,
//     location: ["Quận 12", "Hồ Chí Minh"],
//     type: "1",
//     rating: 8.6 + " tuyệt vời",
//     avgPrice: 803253,
//     vipPrice: 1282125,
//     img: "../../img/aboutUs2.jpg",
//     describe:
//         "Hidden Mansions Saigon Resort cách Bảo tàng lịch sử Việt Nam 12 km và Trung tâm mua sắm AEON MALL Bình Dương Canary 13 km. Sân bay gần nhất là Sân bay Quốc tế Tân Sơn Nhất, cách resort 8 km. Nơi đây cung cấp không gian nghỉ dưỡng tuyệt vời với các tiện nghi hiện đại và dịch vụ chất lượng cao, mang đến trải nghiệm thư giãn và thoải mái cho du khách.",
// };
var data = JSON.parse(localStorage.getItem("data"));

function addCommas(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

var h2Element = document.getElementById("linktongquan");
var thongtin = document.getElementById("thong_tin_chi_tiet_hover");
var linkthongtin = document.getElementById("linkthongtin");
var thongtin2 = document.getElementById("thong_tin_chi_tiet_hover2");
var rate = document.getElementById("rate");
var describe = document.getElementById("describe");
var avgPrice = document.getElementById("avgPrice");
var vipPrice = document.getElementById("vipPrice");
var valid = true;

if (valid) {
    h2Element.textContent = data.name;
    thongtin.textContent = data.location;
    linkthongtin.textContent = data.name;
    thongtin2.textContent = data.location;
    rate.textContent = data.rating;
    describe.textContent = data.describe;
    avgPrice.textContent = addCommas(data.avgPrice);
    vipPrice.textContent = addCommas(data.vipPrice);
}

document.addEventListener("DOMContentLoaded", function () {
    showElement("All");
    document.getElementById("showAll").addEventListener("click", function () {
        showElement("All");
    });

    document.getElementById("Room").addEventListener("click", function () {
        showElement("Allroom");
    });

    document.getElementById("Hotel").addEventListener("click", function () {
        showElement("AllHotel");
    });

    document.getElementById("tien_nghi").addEventListener("click", function () {
        showElement("Alltiennghi");
    });

    document.getElementById("Eat").addEventListener("click", function () {
        showElement("Allanuong");
    });

    document.getElementById("Another").addEventListener("click", function () {
        showElement("Allkhac");
    });
});
function showElement(elementId) {
    var elements = [
        "All",
        "Allroom",
        "AllHotel",
        "Alltiennghi",
        "Allanuong",
        "Allkhac",
    ];
    elements.forEach(function (id) {
        var element = document.getElementById(id);
        if (element) {
            // Nếu ID của phần tử trùng khớp với ID được chỉ định, hiển thị nó, ngược lại, ẩn nó
            if (id === elementId) {
                element.style.display = "block";
            } else {
                element.style.display = "none";
            }
        }
    });
}

// Hàm hiển thị collapse của trang được chọn
function showPage(collapseId) {
    var collapses = document.querySelectorAll(".collapse");
    collapses.forEach(function (collapse) {
        collapse.classList.remove("show");
    });

    var selectedCollapse = document.getElementById(collapseId);
    selectedCollapse.classList.add("show");
}
function showPrevious() {
    var currentPage = document.querySelector(".collapse.show");
    var previousPage = currentPage.previousElementSibling;
    if (previousPage && previousPage.classList.contains("collapse")) {
        currentPage.classList.remove("show");
        previousPage.classList.add("show");
    }
}
var cart = [];
localStorage.setItem("cart", JSON.stringify(cart));
// Hàm hiển thị trang tiếp theo
function showNext() {
    var currentPage = document.querySelector(".collapse.show");
    var nextPage = currentPage.nextElementSibling;
    if (nextPage && nextPage.classList.contains("collapse")) {
        currentPage.classList.remove("show");
        nextPage.classList.add("show");
    }
}
window.onload = function () {
    showPage("collapsePage1");
};

var buttons = document.querySelectorAll(".dat");

// Duyệt qua từng nút và gắn sự kiện click
buttons.forEach(function (button) {
    button.addEventListener("click", function () {
        // Lấy giá trị của nút được nhấn
        var buttonValue = this.value;
        const newObject = Object.create(data, {
            occupation: {
                value: buttons,
            },
        });
        var cart = JSON.parse(localStorage.getItem("cart"));
        cart.push(newObject);
        localStorage.setItem("cart", JSON.stringify(cart));
        console.log(cart);
    });
});
// =======
// $(document).ready(function () {
//     var data = JSON.parse(localStorage.getItem('get'))
//     console.log(data);
// });
// >>>>>>> main
