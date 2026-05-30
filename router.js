// =====================================
// FASHION FUSION ROUTER SYSTEM
// =====================================

const routes = {

    "#home": "home",

    "#products": "products",

    "#about": "about",

    "#contact": "contact"

};

// =====================================
// HIDE ALL PAGES
// =====================================

function hideAllPages() {

    const sections = document.querySelectorAll("section");

    sections.forEach(section => {

        const sectionId = section.id;

        if (sectionId === "loginPage") {
            return;
        }

        section.style.display = "none";

    });

}

// =====================================
// SHOW PAGE
// =====================================

function showPage(pageId) {

    const page =
    document.getElementById(pageId);

    if (!page) return;

    page.style.display = "block";

}

// =====================================
// ROUTER
// =====================================

function router() {

    let hash =
    window.location.hash;

    if (!hash || hash === "") {

        hash = "#home";

        window.location.hash =
        "#home";

    }

    hideAllPages();

    const page =
    routes[hash];

    if (page) {

        showPage(page);

    }
    else {

        show404();

    }

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

}

// =====================================
// 404 PAGE
// =====================================

function show404() {

    hideAllPages();

    let errorPage =
    document.getElementById("error404");

    if (!errorPage) {

        errorPage =
        document.createElement("section");

        errorPage.id =
        "error404";

        errorPage.innerHTML = `

        <div
        style="
        min-height:80vh;
        display:flex;
        justify-content:center;
        align-items:center;
        flex-direction:column;
        text-align:center;
        color:white;
        ">

            <h1
            style="
            font-size:6rem;
            margin-bottom:20px;
            ">
            404
            </h1>

            <h2>
            Page Not Found
            </h2>

            <p
            style="
            margin-top:15px;
            ">
            The page you requested does not exist.
            </p>

            <a
            href="#home"
            style="
            margin-top:20px;
            text-decoration:none;
            background:#38bdf8;
            color:white;
            padding:12px 25px;
            border-radius:10px;
            ">
            Go Home
            </a>

        </div>

        `;

        document.body.appendChild(
            errorPage
        );

    }

    errorPage.style.display =
    "block";

}

// =====================================
// ACTIVE NAV LINK
// =====================================

function updateActiveLink() {

    const links =
    document.querySelectorAll(
        "nav a"
    );

    links.forEach(link => {

        link.classList.remove(
            "active-link"
        );

        if (
            link.getAttribute("href") ===
            window.location.hash
        ) {

            link.classList.add(
                "active-link"
            );

        }

    });

}

// =====================================
// ROUTE CHANGE
// =====================================

window.addEventListener(
    "hashchange",
    () => {

        router();

        updateActiveLink();

    }
);

// =====================================
// INITIAL LOAD
// =====================================

window.addEventListener(
    "load",
    () => {

        router();

        updateActiveLink();

    }
);

// =====================================
// NAVIGATION FUNCTION
// =====================================

function navigate(route) {

    window.location.hash =
    route;

}

// =====================================
// GLOBAL ACCESS
// =====================================

window.navigate =
navigate;
