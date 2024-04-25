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
        avgPrice: 903253,
        price1: 128412125,
        price2: 143214752,
        img: "../../img/hiddenmansions.png",
        describe: "Hidden Mansions Saigon Resort cách Bảo tàng lịch sử Việt Nam 12 km và Trung tâm mua sắm AEON MALL Bình Dương Canary 13 km. Sân bay gần nhất là Sân bay Quốc tế Tân Sơn Nhất, cách resort 8 km.",
    },
];

function refesh(){
    $('#list-items').empty();
}

function starDisplay(n){
    var s ="";
    for (var i=0; i<n; i++){
        s+="★"
    }
    return s;
}

function addCommas(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function toString(a){
    return a[0]+", "+a[1];
}

function display(list){
    refesh();
    for (var i=0; i<list.length; i++){
        var item =
        `<div class="card mb-3">
            <div class="row">
                <div class="col-md-4 custom-img">
                    <img
                        src="${list[i].img}"
                        alt="${list[i].name}"
                        class="img-fluid"
                    />
                </div>
                <div class="col-md-8 custom-info">
                    <div class="card-body">
                        <div class="custom-button">
                            <button
                                class="btn btn-danger float-end btn-delete"
                            >
                                <i class="bi bi-trash"></i>
                            </button>
                        </div>
                        <h5 class="card-title">
                            Goldient Boutique Hotel
                        </h5>
                        <div class="row">
                            <div class="col-md-3">
                                <p class="card-text">${starDisplay(list[i].star)}</p>
                            </div>
                            <div
                                class="col-md-9"
                                style="padding: 0"
                            >
                                <p class="address">
                                    Địa chỉ: ${toString(list[i].location)}
                                </p>
                            </div>
                        </div>
                        <div class="d-flex align-items-center">
                            <div
                                class="rounded-pill px-3 py-1 me-3"
                            >
                                <p class="mb-0">${list[i].rating}</p>
                            </div>
                            <p
                                class="mb-0 me-3"
                                style="
                                    color: var(--primary-color);
                                    font-weight: bold;
                                    margin-right: 6px;
                                "
                            >
                                Tuyệt vời
                            </p>
                            <p class="mb-0">2000 nhận xét</p>
                        </div>
                        <hr />
                        <div class="price text-end">
                            <div>
                                <p
                                    class="original-price fw-bold mb-0"
                                    style="font-size: larger"
                                >
                                    ${addCommas(list[i].price2)} VND
                                </p>
                                <p class="discounted-price">
                                    Bao gồm thuế và phí
                                </p>
                            </div>
                        </div>
                        <div class="checkbox-wrapper">
                            <input
                                id="terms-checkbox-37"
                                name="checkbox"
                                type="checkbox"
                            />
                            <label
                                class="terms-label"
                                for="terms-checkbox-37"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 200 200"
                                    class="checkbox-svg"
                                >
                                    <mask
                                        fill="white"
                                        id="path-1-inside-1_476_5-37"
                                    >
                                        <rect
                                            height="200"
                                            width="200"
                                        ></rect>
                                    </mask>
                                    <rect
                                        mask="url(#path-1-inside-1_476_5-37)"
                                        stroke-width="40"
                                        class="checkbox-box"
                                        height="200"
                                        width="200"
                                    ></rect>
                                    <path
                                        stroke-width="15"
                                        d="M52 111.018L76.9867 136L149 64"
                                        class="checkbox-tick"
                                    ></path>
                                </svg>
                                <span class="label-text"
                                    >Chọn khách sạn này</span
                                >
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>`;
        $('#list-items').append(item);
    }
}


window.addEventListener("DOMContentLoaded", (event) => {
    display(list);
    // Lấy tất cả các nút xóa
    const deleteButtons = document.querySelectorAll(".btn-delete");
    // Lấy thẻ chứa số lượng khách sạn trong giỏ hàng
    const cartTitle = document.getElementById("cartTitle");

    // Hàm cập nhật số lượng sản phẩm trong tiêu đề "Giỏ hàng của quý khách"
    function updateCartItemCount() {
        const cartItemCount = document.querySelectorAll(".card").length - 2;
        cartTitle.textContent = `Giỏ hàng của quý khách (${cartItemCount})`;
    }

    // Lặp qua từng nút xóa và gán sự kiện click
    deleteButtons.forEach((button) => {
        button.addEventListener("click", (event) => {
            const card = event.target.closest(".card");
            showConfirmationDialog(card);
        });
    });

    // Hàm hiển thị hộp thoại xác nhận
    function showConfirmationDialog(card) {
        const confirmation = confirm("Bạn có chắc chắn muốn xóa sản phẩm này không?");
        if (confirmation) {
            card.remove();
            updateCartItemCount();
        }
    }

    // Cập nhật số lượng sản phẩm ban đầu
    updateCartItemCount();
});


document.addEventListener('DOMContentLoaded', function () {
    // Lấy ra tất cả các checkbox
    var checkboxes = document.querySelectorAll('input[type="checkbox"]');

    // Gắn sự kiện change cho mỗi checkbox
    checkboxes.forEach(function (checkbox) {
        checkbox.addEventListener('change', function () {
            // Lấy giá tiền của khách sạn
            var price = parseFloat(checkbox.closest('.card').querySelector('.original-price').textContent.replace(/[^\d.]/g, ''));

            // Lấy tổng giá hiện tại
            var totalPriceElement = document.querySelector('.total-price');
            var totalPrice = parseFloat(totalPriceElement.textContent.replace(/[^\d.]/g, ''));

            // Cộng hoặc trừ giá tiền vào tổng giá tùy thuộc vào trạng thái của checkbox
            if (checkbox.checked) {
                totalPrice += price;
            } else {
                totalPrice -= price;
            }

            // Cập nhật tổng giá
            totalPriceElement.textContent = totalPrice.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
        });
    });
});
