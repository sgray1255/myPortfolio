const phone = document.querySelector('#phone');
const text = document.querySelector('#text');

phone.addEventListener("mouseover", () => {
  let alt = phone.alt;
  text.textContent = alt;
  text.classList.add("phoneText")
});

phone.addEventListener("mouseleave", () => {
  text.textContent = '';
});

let lastScrollTop;
navbar = document.querySelector(".header");
window.addEventListener('scroll',() => {
let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if(scrollTop >= lastScrollTop){
  navbar.style.top='-80px';
  } else { 
  navbar.style.top='0';
  }
  lastScrollTop = scrollTop;
});