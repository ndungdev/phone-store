document.addEventListener("DOMContentLoaded", function () {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    const userData = JSON.parse(localStorage.getItem("userData"));

    if (!isLoggedIn || !userData) {
        alert("Vui lòng đăng nhập để xem thông tin cá nhân.");
        window.location.href = "login.html";
        return;
    }

    document.getElementById("userFullname").textContent = userData.fullname;
    document.getElementById("userEmail").textContent = userData.email;
    document.getElementById("userPhone").textContent = userData.phone;

    const logoutBtn = document.getElementById("logoutBtn");
    if (logoutBtn) {
        logoutBtn.addEventListener("click", function (e) {
            e.preventDefault();
            localStorage.removeItem("isLoggedIn");
            alert("Bạn đã đăng xuất.");
            window.location.href = "login.html";
        });
    }
});