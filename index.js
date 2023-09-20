const navLinks=document.querySelectorAll(".nav-link");

navLinks.forEach(menu => {
    menu.addEventListener('click',e => {
    e.classList.add('nav-link:active')
     }
      )
}
)