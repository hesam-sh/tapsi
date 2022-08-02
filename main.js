const navbar = document.querySelector(".navbar");
const navToggler = document.querySelector(".nav__toggler");
navToggler.addEventListener("click", () => {
    console.log("class added");
    navbar.classList.toggle("nav__expands")
})


