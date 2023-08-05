let navRow = document.querySelector('.nav-row');
let menuToggle = document.querySelector('.menu-toggle');

let isMenuToggleActive = false;

function toggleMenu(toggle) {
  isMenuToggleActive = toggle;
  
  
  navRow.classList.toggle('on', isMenuToggleActive);
  
  document.body.style.overflow = isMenuToggleActive ? "hidden" : "initial";
}

menuToggle.addEventListener('click', () => toggleMenu(!isMenuToggleActive))

let menuItens = document.querySelectorAll('.nav-container nav ul li')

menuItens.forEach(item => {
  item.addEventListener('click', () => toggleMenu(false))
})
