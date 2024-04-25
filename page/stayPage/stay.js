// 0: khach san, 1: resort, 2 villa, 3 nha hang
var list = [
    {
        id: 0,
        name: "Hanoi Golden Sail",
        star: 5,
        location: ["Quận Hoàn Kiếm", "Hà Nội"],
        type: "0",
        rating: 9.3,
        avgPrice: 453253,
        vipPrice: 812125,
        img: "../../img/hanoigolden.png",
        describe:
            "Tọa lạc ở trung tâm Hà Nội, Hanoi Golden Hotel And Travel nằm cách Ô Quan Chưởng 6 phút đi bộ và Nhà hát múa rối Thăng Long chưa đến 1 km. Khách sạn 4 sao này có các phòng được trang bị điều hòa.",
    },
    {
        id: 1,
        name: "Landmark Apartment",
        star: 5,
        location: ["Quận Bình Thạnh", "Hồ Chí Minh"],
        type: "0",
        rating: 9.1,
        avgPrice: 1153253,
        vipPrice: 1782125,
        img: "../../img/landmark.png",
        describe:
            "LANDMARK APARTMENTS in Vinhomes Central Park Binh Thanh cách Trung Tâm Thương Mại Diamond Plaza 4.7 km và Nhà thờ Đức Bà 4.7 km. Sân bay gần nhất là Sân bay Quốc tế Tân Sơn Nhất, cách căn hộ 8 km, đồng thời chỗ nghỉ có cung cấp dịch vụ đưa đón sân bay mất phí.",
    },
    {
        id: 2,
        name: "Hidden Mansions Saigon Resort",
        star: 4,
        location: ["Quận 12", "Hồ Chí Minh"],
        type: "1",
        rating: 8.6,
        avgPrice: 903253,
        vipPrice: 1012125,
        img: "../../img/hiddenmansions.png",
        describe:
            "Hidden Mansions Saigon Resort cách Bảo tàng lịch sử Việt Nam 12 km và Trung tâm mua sắm AEON MALL Bình Dương Canary 13 km. Sân bay gần nhất là Sân bay Quốc tế Tân Sơn Nhất, cách resort 8 km.",
    },
    {
        id: 3,
        name: "Hidden Mansions Saigon Resort",
        star: 4,
        location: ["Quận 12", "Hồ Chí Minh"],
        type: "1",
        rating: 8.6,
        avgPrice: 803253,
        vipPrice: 1282125,
        img: "../../img/hiddenmansions.png",
        describe:
            "Hidden Mansions Saigon Resort cách Bảo tàng lịch sử Việt Nam 12 km và Trung tâm mua sắm AEON MALL Bình Dương Canary 13 km. Sân bay gần nhất là Sân bay Quốc tế Tân Sơn Nhất, cách resort 8 km.",
    },
    {
        id: 4,
        name: "Hidden Mansions Saigon Villa 2",
        star: 4,
        location: ["Quận 12", "Hồ Chí Minh"],
        type: '2',
        rating: 8.6,
        avgPrice: 903253,
        vipPrice: 128412125,
        img: "../../img/hiddenmansions.png",
        describe:
            "Hidden Mansions Saigon Resort cách Bảo tàng lịch sử Việt Nam 12 km và Trung tâm mua sắm AEON MALL Bình Dương Canary 13 km. Sân bay gần nhất là Sân bay Quốc tế Tân Sơn Nhất, cách resort 8 km.",
    },
];

function addCommas(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function toString(a) {
    return a[0] + ", " + a[1];
}

function starDisplay(n) {
    var s = "";
    for (var i = 0; i < n; i++) {
        s += "★";
    }
    return s;
}

function sortPrice(l, rev) {
    for (var i = 0; i < l.length - 1; i++) {
        for (var j = i + 1; j < l.length; j++) {
            if (l[i].avgPrice > l[j].avgPrice) {
                var tmp = l[i];
                l[i] = l[j];
                l[j] = tmp;
            }
        }
    }
    if (rev == true) return l.reverse();
    return l;
}

function sortScore(l, rev) {
    for (var i = 0; i < l.length - 1; i++) {
        for (var j = i + 1; j < l.length; j++) {
            if (l[i].rating > l[j].rating) {
                var tmp = l[i];
                l[i] = l[j];
                l[j] = tmp;
            }
        }
    }
    if (rev == true) return l.reverse();
    return l;
}

function hasCommonElement(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
        if (arr2.includes(arr1[i])) {
            return true;
        }
    }
    return false;
}

function sortCond2(arr, cond) {
    var currentList = [];
    for (var i = 0; i < arr.length; i++) {
        if (hasCommonElement(arr[i].location, cond)) {
            currentList.push(arr[i]);
        }
    }
    return currentList;
}

function sortCond1(arr, cond) {
    var currentList = [];
    for (var i = 0; i < arr.length; i++) {
        if (hasCommonElement(arr[i].type, cond)) {
            currentList.push(arr[i]);
        }
    }
    return currentList;
}

// function locPrice(l, minP, maxP) {
//     var newl = [];
//     for (var i=0; i<l.length; i++){
//         var price = l[i].avgPrice*calcDay();
//         if (price>=minP && price<=maxP){
//             newl.push(l[i]);
//         }
//     }
//     return newl;
// }


function refesh() {
    $("#collapsePage2").remove();
    $("#collapsePage3").remove();
    $("#collapsePage1").empty();
}

function display(l) {
    refesh();
    $("#resuit").html(l.length);
    var cnt = 1;
    var container = "#collapsePage" + cnt;
    for (var i = 0; i < l.length; i++) {
        var item = `<div class="item">
                <img src="${
                    l[i].img
                }" style="width: 200px; height: 200px; border-radius: 10px;" />
                <div class="info">
                    <div class="item-header">${l[i].name}</div>
                    <a href="#">${toString(l[i].location)}</a>
                    <div class="rating">
                        <div class="stars">${starDisplay(l[i].star)}</div>
                    </div>
                    <div style="font-size: 16px; font-weight: bold">
                        Mô tả:
                    </div>
                    <div class="des" style="font-size: 14px">
                        ${l[i].describe}
                    </div>
                </div>
                <div class="other d-flex flex-column">
                    <div class="d-flex">
                        <div
                            class="d-flex flex-column align-items-end"
                            style="padding-right: 10px"
                        >
                            <div class="feel">Tuyệt vời</div>
                            <div class="numrate">102 đánh giá</div>
                        </div>
                        <div class="avg">${l[i].rating}</div>
                    </div>
                    <div
                        class=""
                        style="margin-top: 20px; font-size: 18px"
                    >
                        Giá trung bình từ:
                    </div>
                    <div class="price">${addCommas(l[i].avgPrice*calcDay())} VNĐ</div>
                    <button class="btn-moreinfo" value="${list[i].id}">
                        <a href="../inforPage/inforPage.html">Xem chi tiết</a>
                    </button>
                </div>
            </div>`;
        if (i % 5 == 0 && i > 0) {
            cnt += 1;
            $(container).after(
                "<div id=" + "collapsePage" + cnt + ' class="collapse"></div>'
            );
            container = "#collapsePage" + cnt;
        }
        $(container).append(item);
    }
    $("#collapsePage1").addClass("show");
}

// Hàm loại bỏ dấu từ chuỗi
function removeDiacritics(str) {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function checks1ins2(s1, s2) {
    var lowers1 = removeDiacritics(s1.toLowerCase().replace(/\s/g, ""));
    var lowers2 = removeDiacritics(s2.toLowerCase().replace(/\s/g, ""));
    console.log(lowers1, lowers2);
    if (lowers1.indexOf(lowers2) !== -1) {
        return true;
    } else {
        return false;
    }
}

function sortSearch(l, searchValues) {
    var newl = [];
    console.log(searchValues);
    for (var i = 0; i < l.length; i++) {
        if (checks1ins2(toString(l[i].location), searchValues)) {
            newl.push(l[i]);
        } else if (checks1ins2(l[i].name, searchValues)) {
            newl.push(l[i]);
        }
    }
    console.log(newl);
    return newl;
}

function calcDay() {
    var date1 = new Date($("#dd1").val());
    var date2 = new Date($("#dd2").val());
    var diffDays = 1;
    if (!isNaN(date1) && !isNaN(date2)) {
        var timeDiff = Math.abs(date2.getTime() - date1.getTime());
        diffDays = Math.max(1, Math.ceil(timeDiff / (1000 * 3600 * 24)));
    }
    return diffDays;
}

// function setPrice(list) {
//     var currentList = list;
//     var p1 = $('#start').val();
//     var p2 = $('#end').val();
//     currentList = locPrice(currentList, p1, p2);
//     console.log(currentList);
//     return currentList;
// }
function setPrice(list) {
    var tmpl = list;
    var p1 = $("#start").val();
    var p2 = $("#end").val();
    tmpl = locPrice(tmpl, p1, p2);
    console.log(tmpl);
    display(tmpl);
    return tmpl;
}

function sortFirst(currentList) {
    var type = $("#sort").val();
    if (type == "price-low") {
        currentList = sortPrice(currentList, false);
    } else if (type == "price-hight") {
        currentList = sortPrice(currentList, true);
    } else if (type == "rate-low") {
        currentList = sortScore(currentList, true);
    } else if (type == "rate-hight") {
        currentList = sortScore(currentList, false);
    }
    return currentList;
}

$(document).ready(function () {

    localStorage.setItem('data', JSON.stringify(list));
    var data = localStorage.getItem('key');     
    console.log(JSON.parse(data));

    var today = new Date();

    today.setDate(today.getDate() + 2); 
    var minDate = today.toISOString().split('T')[0];
    $("#dd1").attr('min', minDate);
    $("#dd1").change(function() {

        var selectedDate = $(this).val();
        $("#dd2").attr("readonly", false);
        $("#dd2").attr("min", selectedDate);
    });

    var currentList = list;
    currentList = sortFirst(currentList);
    // var show = setPrice(currentList);
    display(currentList);
    $(".collapse").on("shown.bs.collapse", function () {
        $("html, body").animate(
            { scrollTop: $("#scroll-to-top-button").offset().top },
            800
        );
    });

    $('.condbox').on('click', function (){
        currentList = sortFirst(list);
        var cond1 = $('.condbox1:checked').map(function() {
            return $(this).val();
        }).get();
        console.log(cond1);   
     
        var cond2 = $('.condbox2:checked').map(function() {
            return $(this).val();
        }).get();
        console.log(cond2);   
        var sorted = currentList;
        if (cond1.length!=0){
            sorted = sortCond1(currentList, cond1);
        }
        if (cond2.length!=0){
            sorted = sortCond2(currentList, cond2);
        }

        // var show = setPrice(currentList);
        display(sorted);
    });

    $("#sort").on("change", function () {
        currentList = sortFirst(currentList);
        // var show = setPrice(currentList);
        display(currentList);
    });

    $("#submit-number").on("click", function () {
        var treem = $("#treem").val();
        var nguoilon = $("#nguoilon").val();
        var phong = $("#sophong").val();
        $("#people").attr(
            "placeholder",
            phong +
                " phòng - " +
                (parseInt(nguoilon) + parseInt(treem)) +
                " Người"
        );
    });

    $(".button-submit").on("click", function () {});

    $("#search-now").on("click", function () {
        calcDay();
        var searchList = currentList;
        var cond = $("#place").val();
        if (cond != "") searchList = sortSearch(searchList, cond);
        else searchList = currentList;
        display(searchList);
    }); 
    $(".btn-moreinfo").on('click', function() {
        // Lấy giá trị của nút được nhấn
        var buttonValue = $(this).val();
        localStorage.setItem("get", JSON.stringify(currentList[buttonValue]));
    });

//     $(".priceck").on("blur", function () {
//         display(currentList);
//     });
});

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
