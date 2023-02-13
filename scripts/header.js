const toggler = document.querySelector('.fa-solid.fa-bars');
const nav = document.querySelectorAll('header .hidden');

toggler.addEventListener('click', () => {
  nav.forEach((x) => x.classList.toggle('hidden'));
});
