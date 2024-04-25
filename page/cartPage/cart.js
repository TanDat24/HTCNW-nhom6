window.addEventListener("DOMContentLoaded", (event) => {
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
