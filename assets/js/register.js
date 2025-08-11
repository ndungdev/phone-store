document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("registerForm");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const fullname = document.getElementById("fullname").value.trim();
        const email = document.getElementById("email").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const password = document.getElementById("password").value.trim();
        const confirmPassword = document.getElementById("confirmPassword").value.trim();

        if (!fullname) {
            alert("Vui lòng nhập họ và tên.");
            return;
        }

        if (!email || !validateEmail(email)) {
            alert("Vui lòng nhập email hợp lệ.");
            return;
        }

        if (!phone || !validatePhone(phone)) {
            alert("Vui lòng nhập số điện thoại hợp lệ (10 số).");
            return;
        }

        if (!password) {
            alert("Vui lòng nhập mật khẩu.");
            return;
        }

        if (password.length < 6) {
            alert("Mật khẩu phải có ít nhất 6 ký tự.");
            return;
        }

        if (confirmPassword !== password) {
            alert("Xác nhận mật khẩu không khớp.");
            return;
        }

        const userData = { fullname, email, phone, password };
        localStorage.setItem("userData", JSON.stringify(userData));
        alert("Đăng ký thành công!");
        window.location.href = "login.html";
    });

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    function validatePhone(phone) {
        const re = /^[0-9]{10}$/;
        return re.test(phone);
    }
});