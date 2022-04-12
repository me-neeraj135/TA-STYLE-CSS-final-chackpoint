let x = document.querySelector(`.bars`);
let ul = document.querySelector(`.nav-link`);
function myFunction(e) {
  x.classList.toggle(`change`);
  ul.classList.toggle(`change`);
}

x.addEventListener(`onclick`, myFunction);
