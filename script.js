
const burger = document.querySelector('.nav__burger');
const list = document.querySelector('.nav__list');
if (burger) {
  burger.addEventListener('click', () => list.classList.toggle('open'));
  list.querySelectorAll('a').forEach(a => a.addEventListener('click', () => list.classList.remove('open')));
}


const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.style.opacity = 1;
      e.target.style.transform = 'translateY(0)';
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.section, .card, .transformations figure, .price, .reviews blockquote').forEach(el => {
  el.style.opacity = 0;
  el.style.transform = 'translateY(24px)';
  el.style.transition = 'opacity .7s ease, transform .7s ease';
  io.observe(el);
});


const nav = document.querySelector('.nav');
window.addEventListener('scroll', () => {
  nav.style.boxShadow = window.scrollY > 30 ? '0 10px 30px rgba(0,0,0,.25)' : 'none';
});


const cookieBox = document.getElementById("cookieBox");
const acceptCookies = document.getElementById("acceptCookies");

const cookiesAccepted = localStorage.getItem("cookiesAccepted");

if(cookiesAccepted !== "true"){
  cookieBox.style.display = "flex";
}

acceptCookies.addEventListener("click", function(){

  localStorage.setItem("cookiesAccepted", "true");

  cookieBox.style.display = "none";

});