// responsive menu

const btn = document.getElementById('menu-btn')
const nav = document.getElementById('menu')

btn.addEventListener('click', () => {
  btn.classList.toggle('open')
  nav.classList.toggle('flex')
  nav.classList.toggle('hidden')
})

// SmoothScroll

toHome = () => { document.getElementById('home').scrollIntoView( {behavior:"smooth"} ) }
toAbout = () => { document.getElementById('about-us').scrollIntoView( {behavior:"smooth"} ) }
toMenu = () => { document.getElementById('our-menu').scrollIntoView( {behavior:"smooth"} ) }
toContact = () => { document.getElementById('contact-us').scrollIntoView( {behavior:"smooth"} ) }
toReview = () => { document.getElementById('our-reviews').scrollIntoView( {behavior:"smooth"} ) }


// Modal
const modal = document.querySelector('#my-modal');
const modalBtn = document.querySelector('#modal-btn');
const closeBtn = document.querySelector('#modal-close');

modalBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
window.addEventListener('click', outsideClick);

function openModal() {
  modal.style.display = 'block';
}

function closeModal() {
  modal.style.display = 'none';
}

function outsideClick(e) {
  if (e.target == modal) {
    modal.style.display = 'none';
  }
}