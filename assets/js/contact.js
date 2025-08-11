document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        if (!name) {
            alert("Vui lòng nhập họ tên.");
            return;
        }

        if (!email || !validateEmail(email)) {
            alert("Vui lòng nhập email hợp lệ.");
            return;
        }

        if (!message) {
            alert("Vui lòng nhập nội dung.");
            return;
        }

        alert("Gửi liên hệ thành công!");
        form.reset();
    });

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
});