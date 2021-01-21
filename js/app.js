/**
 * Define Global Variables
 *
 */
const header = document.querySelector(".page__header");
const headerHeight = header.offsetHeight + 20;
const navbarList = document.querySelector("#navbar__list");
const main = document.querySelector("main");
const sections = main.querySelectorAll("section");
const backToTopBtn = document.querySelector('.back-to-top');

// build menu
const fragment = document.createDocumentFragment();
sections.forEach((section) => {
    let item = document.createElement("li");
    let link = document.createElement("a");
    link.setAttribute("href", "#");
    link.setAttribute("data-section", section.getAttribute("id"));
    link.setAttribute("class", "menu__link");
    link.textContent = section.getAttribute("data-nav");
    item.appendChild(link);
    fragment.appendChild(item);
});
navbarList.appendChild(fragment);

// scroll to section on link click
const links = navbarList.querySelectorAll("a");

links.forEach((link) => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        document
            .querySelector("#" + e.target.dataset.section)
            .scrollIntoView({ behavior: "smooth" });
        navbarList.querySelectorAll("a").forEach((ele) => {
            ele.classList.remove("active");
        });
        e.target.classList.add("active");
    });
});


// Set link as active on scroll
window.addEventListener("scroll", navbarHeighter);

// show and hide back to top btn on scroll
window.addEventListener("scroll", () => {
    let status = window.scrollY >= 300 ? 'block' : 'none';
    backToTopBtn.style.display = status;
});

// back to top on click
backToTopBtn.addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('header').scrollIntoView({ behavior: "smooth" });
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    })
});


/*
 **  Functions
 */

// heighlight navbar links on scroll
function navbarHeighter() {
    // get current position
    let scrollY = window.scrollY;

    // loop through section to get section height , top and ID
    sections.forEach((section) => {
        let sectionHeight = section.offsetHeight;
        let sectionTop = section.offsetTop;
        let sectionId = section.getAttribute("id");
        //console.log(sectionHeight + "--" + sectionTop + "--" + sectionId);
        //if (scrollY > sectionTop) {

        if (
            scrollY >= sectionTop - sectionHeight * 0.25 &&
            scrollY <
            sectionTop + sectionHeight - sectionHeight * 0.25
        ) {
            section.classList.add("active-section");
            document
                .querySelector("a[data-section=" + sectionId + "]")
                .classList.add("active");
        } else {
            section.classList.remove("active-section");
            document
                .querySelector("a[data-section=" + sectionId + "]")
                .classList.remove("active");
        }
    });
}