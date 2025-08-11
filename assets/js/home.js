document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".add-to-cart");

    buttons.forEach(btn => {
        btn.addEventListener("click", function () {
            const name = this.dataset.name;
            const price = parseInt(this.dataset.price);
            const image = this.dataset.image;

            let cart = JSON.parse(localStorage.getItem("cart")) || [];

            // Kiểm tra sản phẩm đã có chưa
            const existing = cart.find(item => item.name === name);
            if (existing) {
                existing.quantity += 1;
            } else {
                cart.push({ name, price, image, quantity: 1 });
            }

            localStorage.setItem("cart", JSON.stringify(cart));
            alert("Đã thêm vào giỏ hàng!");
        });
    });
});