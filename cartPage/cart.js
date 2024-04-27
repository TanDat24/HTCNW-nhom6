document.addEventListener('DOMContentLoaded', (event) => {
    // Lấy tiêu đề giỏ hàng và phần tử hiển thị tổng giá
    const cartTitle = document.getElementById("cartTitle");
    const totalPriceElement = document.querySelector(".total-price");
    const checkoutButton = document.querySelector(".tt");

    // Hàm cập nhật số lượng sản phẩm và tiêu đề giỏ hàng
    function updateCartItemCount() {
        let cartItemCount = document.querySelectorAll(".container .card.mb-3").length;
        cartTitle.textContent = `Giỏ hàng của quý khách (${cartItemCount})`;
    }

    // Hàm lấy giá sản phẩm từ thẻ card
    function getProductPrice(card) {
        let priceElement = card.querySelector(".original-price");
        return parseFloat(priceElement.textContent.replace(/[.,đ]/g, ""));
    }

    // Hàm tính tổng giá sản phẩm được chọn
    function calculateTotalPrice() {
        let checkboxes = document.querySelectorAll(".checkbox-wrapper input[type='checkbox']");
        let totalPrice = 0;
        checkboxes.forEach((checkbox) => {
            if (checkbox.checked) {
                let card = checkbox.closest(".card.mb-3");
                totalPrice += getProductPrice(card);
            }
        });
        return totalPrice;
    }

    // Hàm cập nhật tổng giá hiển thị trên trang
    function updateTotalPrice(amount) {
        totalPriceElement.textContent = formatCurrency(amount, "VND");
    }

    // Hàm định dạng tiền tệ theo địa phương
    function formatCurrency(amount, currency) {
        return new Intl.NumberFormat('vi-VN', {
            style: 'currency',
            currency: currency
        }).format(amount);
    }

    // Hàm thêm sự kiện cho nút xóa và checkbox
    function addEventListeners() {
        document.querySelectorAll(".btn-delete").forEach((button) => {
            button.addEventListener("click", (event) => {
                let card = event.currentTarget.closest(".card.mb-3");
                showConfirmationDialog(card);
            });
        });

        document.querySelectorAll(".checkbox-wrapper input[type='checkbox']").forEach((checkbox) => {
            checkbox.addEventListener("change", () => {
                updateTotalPrice(calculateTotalPrice());
                checkCheckoutButtonStatus();
            });
        });
    }

    // Hàm hiển thị hộp thoại xác nhận và xử lý khi xóa sản phẩm
    function showConfirmationDialog(card) {
        let confirmation = confirm("Bạn có chắc chắn muốn xóa không?");
        if (confirmation) {
            card.remove();
            updateCartItemCount();
            updateTotalPrice(calculateTotalPrice());
            checkCheckoutButtonStatus(); // Đảm bảo nút thanh toán cập nhật trạng thái sau khi xóa sản phẩm
        }
    }

    // Hàm kiểm tra trạng thái của nút thanh toán dựa vào trạng thái của các checkbox
    function checkCheckoutButtonStatus(){
        const checkboxes = document.querySelectorAll(".checkbox-wrapper input[type='checkbox']");
        const isAnyChecked = Array.from(checkboxes).some(checkbox => checkbox.checked);
        checkoutButton.disabled = !isAnyChecked;
    }

    // Cập nhật số lượng sản phẩm và tổng giá khi trang được tải xong
    updateCartItemCount();
    updateTotalPrice(calculateTotalPrice());

    // Khi load trang, nút thanh toán bị vô hiệu hóa
    checkoutButton.disabled = true;

    // Gọi hàm để thêm các sự kiện ban đầu
    addEventListeners();
    // Không cần gọi addCheckboxEventListeners do đã tích hợp trong addEventListeners
}); 