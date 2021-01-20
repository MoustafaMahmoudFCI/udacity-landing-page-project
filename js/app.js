/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Define Global Variables
 *
 */
const navbarList = document.querySelector("#navbar__list");
const main = document.querySelector("main");

// get all sections in the page
const sections = main.querySelectorAll("section");



// build the nav
const fragment = document.createDocumentFragment();
sections.forEach((section) => {
  let item = document.createElement("li");
  let link = document.createElement("a");
  link.setAttribute("href", "#");
  link.setAttribute('data-section' , section.getAttribute('id'));
  link.setAttribute('class' , 'menu__link');
  link.textContent = section.getAttribute("data-nav");
  item.appendChild(link);
  fragment.appendChild(item);
});
navbarList.appendChild(fragment);
// Add class 'active' to section when near top of viewport

// Scroll to anchor ID using scrollTO event
const links = navbarList.querySelectorAll('a');
links.forEach(link=>{
    link.addEventListener('click',e=>{
        e.preventDefault();
        console.log(e.target.dataset.section)
        document.querySelector('#'+e.target.dataset.section).scrollIntoView({behavior:"smooth"})
    });
});
/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu

// Scroll to section on link click

// Set sections as active