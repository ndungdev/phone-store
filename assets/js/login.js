document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("loginForm");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();

        const userData = JSON.parse(localStorage.getItem("userData"));

        if (!userData) {
            alert("Chưa có tài khoản, vui lòng đăng ký.");
            window.location.href = "register.html";
            return;
        }

        if (email === userData.email && password === userData.password) {
            localStorage.setItem("isLoggedIn", true);
            alert("Đăng nhập thành công!");
            window.location.href = "profile.html";
        } else {
            alert("Email hoặc mật khẩu không đúng.");
        }
    });
});