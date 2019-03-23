let navbtn = document.querySelector("#nav-btn");
let a = document.querySelector("#nav-menu");
let sideNav = document.querySelector("#sidenav");
let navItems = document.querySelectorAll(".nav-item");




for(let x = 0; x < navItems.length; x++){
    navItems[x].addEventListener("click",() => {
      sideNav.classList.remove("show");
      navbtn.classList.remove("show");
    })
}




navbtn.addEventListener("click", () => {
    navbtn.classList.toggle("show");
    sideNav.classList.toggle("show");
});


AOS.init();