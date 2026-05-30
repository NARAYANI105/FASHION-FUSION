// =====================================
// FASHION FUSION APP CONTROLLER
// =====================================

document.addEventListener(
    "DOMContentLoaded",
    () => {

        initializeApplication();

    }
);

// =====================================
// INITIALIZE APP
// =====================================

function initializeApplication(){

    startLoader();

    initializeAnimations();

    initializeCounters();

    showWelcomeMessage();

    initializeScrollEffects();

}

// =====================================
// LOADER
// =====================================

function startLoader(){

    const loader =
    document.getElementById(
        "loader"
    );

    if(!loader) return;

    setTimeout(()=>{

        loader.style.opacity = "0";

        loader.style.transition =
        "0.8s";

        setTimeout(()=>{

            loader.style.display =
            "none";

        },800);

    },2500);

}

// =====================================
// WELCOME MESSAGE
// =====================================

function showWelcomeMessage(){

    const user =
    JSON.parse(
        localStorage.getItem(
            "fashionFusionUser"
        )
    );

    if(!user) return;

    const username =
    user.email || user.phone;

    console.log(
        "Welcome:",
        username
    );

}

// =====================================
// PRODUCT COUNTER
// =====================================

function initializeCounters(){

    if(
        typeof productData ===
        "undefined"
    ){
        return;
    }

    console.log(
        "Total Products:",
        productData.length
    );

}

// =====================================
// CARD ANIMATION
// =====================================

function initializeAnimations(){

    setTimeout(()=>{

        const cards =
        document.querySelectorAll(
            ".product-card"
        );

        cards.forEach(card=>{

            card.style.opacity =
            "0";

            card.style.transform =
            "translateY(50px)";

            card.style.transition =
            ".6s ease";

        });

    },500);

}

// =====================================
// SCROLL REVEAL
// =====================================

function initializeScrollEffects(){

    const observer =
    new IntersectionObserver(

        entries => {

            entries.forEach(entry=>{

                if(
                    entry.isIntersecting
                ){

                    entry.target.style.opacity =
                    "1";

                    entry.target.style.transform =
                    "translateY(0px)";

                }

            });

        },

        {
            threshold:0.15
        }

    );

    setTimeout(()=>{

        const cards =
        document.querySelectorAll(
            ".product-card"
        );

        cards.forEach(card=>{

            observer.observe(card);

        });

    },1500);

}

// =====================================
// SCROLL TO TOP BUTTON
// =====================================

const topButton =
document.createElement("button");

topButton.innerHTML = "↑";

topButton.id = "scrollTopBtn";

topButton.style.position =
"fixed";

topButton.style.bottom =
"30px";

topButton.style.right =
"30px";

topButton.style.width =
"55px";

topButton.style.height =
"55px";

topButton.style.border =
"none";

topButton.style.borderRadius =
"50%";

topButton.style.cursor =
"pointer";

topButton.style.background =
"#38bdf8";

topButton.style.color =
"white";

topButton.style.fontSize =
"22px";

topButton.style.display =
"none";

topButton.style.zIndex =
"999";

document.body.appendChild(
    topButton
);

window.addEventListener(
    "scroll",
    ()=>{

        if(
            window.scrollY > 400
        ){

            topButton.style.display =
            "block";

        }
        else{

            topButton.style.display =
            "none";

        }

    }
);

topButton.addEventListener(
    "click",
    ()=>{

        window.scrollTo({

            top:0,

            behavior:"smooth"

        });

    }
);

// =====================================
// PERFORMANCE LOGGER
// =====================================

window.addEventListener(
    "load",
    ()=>{

        console.log(
            "Fashion Fusion Loaded Successfully"
        );

    }
);

// =====================================
// APP VERSION
// =====================================

const APP_VERSION =
"1.0.0";

console.log(
    "Fashion Fusion Version:",
    APP_VERSION
);
