document.addEventListener("DOMContentLoaded", function () {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const cartTableBody = document.querySelector("#cartTable tbody");
    const totalPriceEl = document.getElementById("totalPrice");
    const clearCartBtn = document.getElementById("clearCart");

    function renderCart() {
        cartTableBody.innerHTML = "";
        let totalPrice = 0;

        cart.forEach((item, index) => {
            const row = document.createElement("tr");

            row.innerHTML = `
                <td><img src="${item.image}" alt="${item.name}"></td>
                <td>${item.name}</td>
                <td>${item.price.toLocaleString()}</td>
                <td>
                    <input type="number" min="1" value="${item.quantity}" data-index="${index}" class="update-qty">
                </td>
                <td>${(item.price * item.quantity).toLocaleString()}</td>
                <td><button class="delete-item" data-index="${index}">Xóa</button></td>
            `;

            cartTableBody.appendChild(row);
            totalPrice += item.price * item.quantity;
        });

        totalPriceEl.textContent = totalPrice.toLocaleString();
    }

    // Cập nhật số lượng
    cartTableBody.addEventListener("input", function (e) {
        if (e.target.classList.contains("update-qty")) {
            const index = e.target.dataset.index;
            cart[index].quantity = parseInt(e.target.value) || 1;
            localStorage.setItem("cart", JSON.stringify(cart));
            renderCart();
        }
    });

    // Xóa sản phẩm
    cartTableBody.addEventListener("click", function (e) {
        if (e.target.classList.contains("delete-item")) {
            const index = e.target.dataset.index;
            cart.splice(index, 1);
            localStorage.setItem("cart", JSON.stringify(cart));
            renderCart();
        }
    });

    // Xóa toàn bộ
    clearCartBtn.addEventListener("click", function () {
        if (confirm("Bạn có chắc muốn xóa toàn bộ giỏ hàng?")) {
            localStorage.removeItem("cart");
            cart = [];
            renderCart();
        }
    });

    renderCart();
});