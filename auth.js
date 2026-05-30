// ==========================
// FASHION FUSION AUTH SYSTEM
// ==========================

document.addEventListener("DOMContentLoaded", () => {

    const loginBtn = document.getElementById("loginBtn");

    if (loginBtn) {
        loginBtn.addEventListener("click", loginUser);
    }

    checkLogin();

});

// ==========================
// LOGIN FUNCTION
// ==========================

function loginUser() {

    const emailInput = document.getElementById("email");
    const phoneInput = document.getElementById("phone");

    const email = emailInput.value.trim();
    const phone = phoneInput.value.trim();

    if (email === "" && phone === "") {
        alert("Please enter Email or Phone Number");
        return;
    }

    if (email !== "") {

        const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email)) {
            alert("Enter a valid Email Address");
            return;
        }

    }

    if (phone !== "") {

        const phonePattern =
        /^[0-9]{10}$/;

        if (!phonePattern.test(phone)) {
            alert("Enter a valid 10 digit Phone Number");
            return;
        }

    }

    const userData = {

        email: email,
        phone: phone,
        loginTime: new Date().toLocaleString()

    };

    localStorage.setItem(
        "fashionFusionUser",
        JSON.stringify(userData)
    );

    showApp();

}

// ==========================
// SHOW MAIN APP
// ==========================

function showApp() {

    const loginPage =
    document.getElementById("loginPage");

    const app =
    document.getElementById("app");

    if (loginPage) {
        loginPage.classList.add("hidden");
    }

    if (app) {
        app.classList.remove("hidden");
    }

    displayUserInfo();

}

// ==========================
// CHECK LOGIN
// ==========================

function checkLogin() {

    const user =
    localStorage.getItem(
        "fashionFusionUser"
    );

    if (user) {

        showApp();

    }

}

// ==========================
// DISPLAY USER
// ==========================

function displayUserInfo() {

    const user =
    JSON.parse(
        localStorage.getItem(
            "fashionFusionUser"
        )
    );

    if (!user) return;

    let welcome =
    document.getElementById(
        "welcomeUser"
    );

    if (!welcome) {

        welcome =
        document.createElement("div");

        welcome.id =
        "welcomeUser";

        welcome.style.position =
        "fixed";

        welcome.style.top =
        "90px";

        welcome.style.right =
        "20px";

        welcome.style.padding =
        "12px 20px";

        welcome.style.background =
        "rgba(255,255,255,.15)";

        welcome.style.backdropFilter =
        "blur(10px)";

        welcome.style.borderRadius =
        "15px";

        welcome.style.color =
        "white";

        welcome.style.zIndex =
        "1000";

        document.body.appendChild(
            welcome
        );

    }

    welcome.innerHTML = `
        Welcome 👋
        <br>
        ${user.email || user.phone}
    `;

}

// ==========================
// LOGOUT
// ==========================

function logout() {

    const confirmLogout =
    confirm(
        "Are you sure you want to logout?"
    );

    if (!confirmLogout) return;

    localStorage.removeItem(
        "fashionFusionUser"
    );

    location.reload();

}

// ==========================
// GLOBAL ACCESS
// ==========================

window.logout = logout;
