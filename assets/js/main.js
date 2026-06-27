/*==========================================
    Portfolio JavaScript
===========================================*/

document.addEventListener("DOMContentLoaded", () => {

    /*==========================================
        AOS Initialization
    ===========================================*/

    if (typeof AOS !== "undefined") {
        AOS.init({
            duration: 1000,
            once: true,
            offset: 100,
            easing: "ease-in-out"
        });
    }

    /*==========================================
        Sticky Navbar
    ===========================================*/

    const navbar = document.querySelector(".custom-navbar");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 50) {

            navbar.style.padding = "12px 0";
            navbar.style.background = "rgba(7,11,22,.92)";
            navbar.style.boxShadow = "0 10px 30px rgba(0,0,0,.25)";

        } else {

            navbar.style.padding = "18px 0";
            navbar.style.background = "rgba(10,15,25,.70)";
            navbar.style.boxShadow = "none";

        }

    });

    /*==========================================
        Smooth Navigation
    ===========================================*/

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

        anchor.addEventListener("click", function (e) {

            const target = document.querySelector(this.getAttribute("href"));

            if (target) {

                e.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth"
                });

            }

        });

    });

    /*==========================================
        Active Navigation Link
    ===========================================*/

    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-link");

    window.addEventListener("scroll", () => {

        let current = "";

        sections.forEach(section => {

            const sectionTop = section.offsetTop - 120;
            const sectionHeight = section.clientHeight;

            if (pageYOffset >= sectionTop) {
                current = section.getAttribute("id");
            }

        });

        navLinks.forEach(link => {

            link.classList.remove("active");

            if (link.getAttribute("href") === "#" + current) {

                link.classList.add("active");

            }

        });

    });

    /*==========================================
        Reveal Hero
    ===========================================*/

    const hero = document.querySelector(".hero");

    if (hero) {

        hero.style.opacity = "0";
        hero.style.transform = "translateY(40px)";

        setTimeout(() => {

            hero.style.transition = "all .8s ease";

            hero.style.opacity = "1";
            hero.style.transform = "translateY(0)";

        }, 300);

    }

    /*==========================================
    Typing Animation
===========================================*/

new Typed("#typing",{

    strings:[

        "Software Developer",
        "PHP Developer",
        "Frontend Developer"

    ],

    typeSpeed:70,

    backSpeed:40,

    backDelay:1800,

    loop:true

});
});
