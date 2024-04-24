window.addEventListener("DOMContentLoaded", (event) => {
    // Lấy tất cả các nút xóa
    const deleteButtons = document.querySelectorAll(".btn-delete");
    // Lấy tất cả các ô checkbox
    const checkboxes = document.querySelectorAll(".product-checkbox");

    // Hàm cập nhật số lượng sản phẩm trong tiêu đề "Xe đẩy hàng của quý khách"
    function updateCartItemCount() {
        const cartItemCount = document.querySelectorAll(".card").length - 2;
        const cartTitle = document.getElementById("cartTitle");
        cartTitle.textContent = `Giỏ hàng của quý khách (${cartItemCount})`;
    }

    // Lặp qua từng nút xóa và gán sự kiện click
    deleteButtons.forEach((button, index) => {
        button.addEventListener("click", (event) => {
            const card = event.target.closest(".card");
            showConfirmationDialog(card, index);
        });
    });

    // Lặp qua từng ô checkbox và gán sự kiện change
    checkboxes.forEach((checkbox) => {
        checkbox.addEventListener("change", () => {
            const totalPrice = calculateTotalPrice();
            updateTotalPrice(totalPrice);
        });
    });

    // Hàm lấy giá của sản phẩm từ thẻ card
    function getProductPrice(card) {
        const priceElement = card.querySelector(".original-price");
        return parseFloat(priceElement.textContent.replace(/[^\d.]/g, ""));
    }

    // Hàm tính tổng giá của các sản phẩm đã chọn
    function calculateTotalPrice() {
        let totalPrice = 0;
        checkboxes.forEach((checkbox, index) => {
            if (checkbox.checked) {
                const card = checkbox.closest(".card");
                totalPrice += getProductPrice(card);
            }
        });
        return totalPrice;
    }

    // Hàm cập nhật tổng giá
    function updateTotalPrice(amount) {
        const totalPriceElement = document.querySelector(".total-price");
        totalPriceElement.textContent = formatCurrency(amount, "VND");
    }

    // Hàm hiển thị hộp thoại xác nhận
    function showConfirmationDialog(card, index) {
        const confirmation = confirm(
            "Bạn có chắc chắn muốn xóa sản phẩm này không?"
        );
        if (confirmation) {
            // Nếu checkbox tương ứng với sản phẩm này đã được tích vào, hãy cập nhật tổng giá
            if (checkboxes[index].checked) {
                const price = getProductPrice(card);
                const totalPrice = calculateTotalPrice() - price;
                updateTotalPrice(totalPrice);
            }
            card.remove();
            updateCartItemCount();
        }
    }

    // Cập nhật số lượng sản phẩm ban đầu
    updateCartItemCount();

    // Cập nhật tổng giá khi trang vừa được tải lên
    const initialTotalPrice = calculateTotalPrice();
    updateTotalPrice(initialTotalPrice);

    // Hàm định dạng tiền tệ
    function formatCurrency(amount, currency) {
        return amount.toLocaleString("vi-VN", {
            style: "currency",
            currency: currency,
        });
    }
});
