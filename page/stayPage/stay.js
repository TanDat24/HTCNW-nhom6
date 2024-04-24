// 0: khach san, 1: resort, 2 villa, 3 nha hang
var list = [
    {
        id: 0,
        name: "Hanoi Golden Sail",
        star: 5,
        location: ["Quận Hoàn Kiếm", "Hà Nội"],
        type: '0',
        rating: 9.3,
        avgPrice: 453.253,
        price1: 178412.125,
        price2: 193214.752,
        img: "../../img/hanoigolden.png",
        describe: "Tọa lạc ở trung tâm Hà Nội, Hanoi Golden Hotel And Travel nằm cách Ô Quan Chưởng 6 phút đi bộ và Nhà hát múa rối Thăng Long chưa đến 1 km. Khách sạn 4 sao này có các phòng được trang bị điều hòa.",
    },
    {
        id: 1,
        name: "Landmark Apartment",
        star: 5,
        location: ["Quận Bình Thạnh", "Hồ Chí Minh"],
        type: '0',
        rating: 9.1,
        avgPrice: 1153.253,
        price1: 178412.125,
        price2: 193214.752,
        img: "../../img/landmark.png",
        describe: "LANDMARK APARTMENTS in Vinhomes Central Park Binh Thanh cách Trung Tâm Thương Mại Diamond Plaza 4.7 km và Nhà thờ Đức Bà 4.7 km. Sân bay gần nhất là Sân bay Quốc tế Tân Sơn Nhất, cách căn hộ 8 km, đồng thời chỗ nghỉ có cung cấp dịch vụ đưa đón sân bay mất phí.",
    },
    {
        id: 2,
        name: "Hidden Mansions Saigon Resort",
        star: 4,
        location: ["Quận 12", "Hồ Chí Minh"],
        type: '1',
        rating: 8.6,
        avgPrice: 903.253,
        price1: 128412.125,
        price2: 143214.752,
        img: "../../img/hiddenmansions.png",
        describe: "Hidden Mansions Saigon Resort cách Bảo tàng lịch sử Việt Nam 12 km và Trung tâm mua sắm AEON MALL Bình Dương Canary 13 km. Sân bay gần nhất là Sân bay Quốc tế Tân Sơn Nhất, cách resort 8 km.",
    },
    {
        id: 3,
        name: "Hidden Mansions Saigon Resort",
        star: 4,
        location: ["Quận 12", "Hồ Chí Minh"],
        type: '1',
        rating: 8.6,
        avgPrice: 903.253,
        price1: 128412.125,
        price2: 143214.752,
        img: "../../img/hiddenmansions.png",
        describe: "Hidden Mansions Saigon Resort cách Bảo tàng lịch sử Việt Nam 12 km và Trung tâm mua sắm AEON MALL Bình Dương Canary 13 km. Sân bay gần nhất là Sân bay Quốc tế Tân Sơn Nhất, cách resort 8 km.",
    },
    {
        id: 4,
        name: "Hidden Mansions Saigon Resort",
        star: 4,
        location: ["Quận 12", "Hồ Chí Minh"],
        type: '1',
        rating: 8.6,
        avgPrice: 903.253,
        price1: 128412.125,
        price2: 143214.752,
        img: "../../img/hiddenmansions.png",
        describe: "Hidden Mansions Saigon Resort cách Bảo tàng lịch sử Việt Nam 12 km và Trung tâm mua sắm AEON MALL Bình Dương Canary 13 km. Sân bay gần nhất là Sân bay Quốc tế Tân Sơn Nhất, cách resort 8 km.",
    },
    {
        id: 5,
        name: "Hidden Mansions Saigon Resort",
        star: 4,
        location: ["Quận 12", "Hồ Chí Minh"],
        type: '1',
        rating: 8.6,
        avgPrice: 903.253,
        price1: 128412.125,
        price2: 143214.752,
        img: "../../img/hiddenmansions.png",
        describe: "Hidden Mansions Saigon Resort cách Bảo tàng lịch sử Việt Nam 12 km và Trung tâm mua sắm AEON MALL Bình Dương Canary 13 km. Sân bay gần nhất là Sân bay Quốc tế Tân Sơn Nhất, cách resort 8 km.",
    },
    {
        id: 6,
        name: "Hidden Mansions Saigon Resort",
        star: 4,
        location: ["Quận 12", "Hồ Chí Minh"],
        type: '1',
        rating: 8.6,
        avgPrice: 903.253,
        price1: 128412.125,
        price2: 143214.752,
        img: "../../img/hiddenmansions.png",
        describe: "Hidden Mansions Saigon Resort cách Bảo tàng lịch sử Việt Nam 12 km và Trung tâm mua sắm AEON MALL Bình Dương Canary 13 km. Sân bay gần nhất là Sân bay Quốc tế Tân Sơn Nhất, cách resort 8 km.",
    },
];

function toString(a){
    return a[0]+", "+a[1];
}

function starDisplay(n){
    var s ="";
    for (var i=0; i<n; i++){
        s+="★"
    }
    return s;
}

function sortPrice(l, rev){
    for (var i=0; i<l.length-1; i++){
        for (var j=i+1; j<l.length; j++){
            if (l[i].avgPrice> l[j].avgPrice){
                var tmp = l[i];
                l[i] = l[j];
                l[j] = tmp;
            }
        }
    }
    if (rev == true) return l.reverse();
    return l;
}

function sortScore(l, rev){
    for (var i=0; i<l.length-1; i++){
        for (var j=i+1; j<l.length; j++){
            if (l[i].rating> l[j].rating){
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

function sortCond2(arr, cond){
    var newList = [];
    for (var i=0; i<arr.length; i++){
        if (hasCommonElement(arr[i].location, cond)){
            newList.push(arr[i]);
        }
    }
    return newList;
}

function sortCond1(arr, cond){
    var newList = [];
    for (var i=0; i<arr.length; i++){
        if (hasCommonElement(arr[i].type, cond)){
            newList.push(arr[i]);
        }
    }
    return newList;
}

function refesh(){
    $('#collapsePage2').remove();
    $('#collapsePage3').remove();
    $('#collapsePage1').empty();

}

function display(l){
    refesh();
    $('#resuit').html(l.length);
    var cnt = 1;
    var container = "#collapsePage" + cnt;
    for (var i=0; i<l.length; i++){
        var item = 
            `<div class="item">
                <img src="${l[i].img}" style="width: 200px; height: 200px;" />
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
                    <div class="price">${l[i].avgPrice} VNĐ</div>
                    <button class="btn-moreinfo">
                        <a href="../inforPage/inforPage.html">Xem chi tiết</a>
                    </button>
                </div>
            </div>`;
        if (i%5==0 && i>0){
            cnt+=1;
            $(container).after('<div id='+"collapsePage" + cnt+' class="collapse"></div>');
            container = "#collapsePage" + cnt;

        }
        $(container).append(item);
    }
    $("#collapsePage1").addClass("show");
}


$(document).ready(function () {
    var today = new Date();
    today.setDate(today.getDate() + 2); 
    var minDate = today.toISOString().split('T')[0];
    $("#dd1").attr('min', minDate);

    $("#dd1").change(function() {
        var selectedDate = $(this).val();
        $("#dd2").attr('readonly', false);
        $("#dd2").attr('min', selectedDate);
    });


    display(list);
    $('.collapse').on('shown.bs.collapse', function () {
        $('html, body').animate({scrollTop: $('#scroll-to-top-button').offset().top}, 800);
    });
    var newList = list;
    $('.condbox').on('click', function (){
        newList = list;
        var cond1 = $('.condbox1:checked').map(function() {
            return $(this).val();
        }).get();
        console.log(cond1);   
     
        var cond2 = $('.condbox2:checked').map(function() {
            return $(this).val();
        }).get();
        console.log(cond2);   
        
        if (cond1.length!=0){
            newList = sortCond1(newList, cond1);
        }
        if (cond2.length!=0){
            newList = sortCond2(newList, cond2);
        }
        display(newList);
    });

    $('#sort').on('change', function (){
        var type = $('#sort').val();
        if (type == "price-low"){
            newList = sortPrice(newList, false);
        }
        else if (type == "price-hight"){
            newList = sortPrice(newList, true);
        }
        else if (type == "rate-low"){
            newList = sortScore(newList, true);
        }
        else if (type == "rate-hight"){
            newList = sortScore(newList, false);
        }
        display(newList);
    });

    $('#submit-number').on('click', function (){
       var treem = $('#treem').val(); 
       var nguoilon = $('#nguoilon').val(); 
       var phong = $('#sophong').val();
       $('#people').attr('placeholder', phong+' phòng - '+ (parseInt(nguoilon) + parseInt(treem)) + ' Người');
    });

    $('.button-submit').on('click', function (){

    });
    
    

});
function showPage(collapseId) {
    var collapses = document.querySelectorAll('.collapse');
    collapses.forEach(function(collapse) {
        collapse.classList.remove('show');
    });

    var selectedCollapse = document.getElementById(collapseId);
    selectedCollapse.classList.add('show');
    }
    function showPrevious() {
        var currentPage = document.querySelector('.collapse.show');
        var previousPage = currentPage.previousElementSibling;
        if (previousPage && previousPage.classList.contains('collapse')) {
            currentPage.classList.remove('show');
            previousPage.classList.add('show');
        }
    }

    // Hàm hiển thị trang tiếp theo
    function showNext() {
        var currentPage = document.querySelector('.collapse.show');
        var nextPage = currentPage.nextElementSibling;
        if (nextPage && nextPage.classList.contains('collapse')) {
            currentPage.classList.remove('show');
            nextPage.classList.add('show');
        }
    }
    window.onload = function() {
        showPage('collapsePage1');
    };