// função de abrir e fechar o menu / icone hamburguer
const nav = document.querySelector('#header nav')
// pega todos os toggle dentro do nav
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', function () {
    // alert('chegamos')
    // quando clicar incluir a classe show se não tiver e se tiver tirar
    nav.classList.toggle('show')
  })
}

// quando clicar no item do menu, esconder o menu
const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}

//Testimonials carousel slider swiper
//https://swiperjs.com/swiper-api
const swiper = new Swiper('.swiper-container', {
  slidesPervIew: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true
})

//SCROLL REVEAL: mostrar elementos quando der scroll na página
//https://scrollrevealjs.org/

const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
})

scrollReveal.reveal(
  `#home .image, #home .text,
   #about .image, #about .text,
   #services header, #services .card,
   #testimonials header, #testimonials .testimonials,
   #contact .text, #contact .links,
   footer .brand, footer .social
    `,
  { interval: 100 }
)

/*--------- SCROLL ---------*/
//mudar o header da página quando der scroll

function changeHeaderWhenScroll() {
  const header = document.querySelector('#header')
  const navHeight = header.offsetHeight

  if (window.scrollY >= navHeight) {
    header.classList.add('scroll')
  } else {
    header.classList.remove('scroll')
  }
}
//window.addEventListener('scroll', changeHeaderWhenScroll)

// BACK-TO-TOP
function backToTop() {
  const backToTopButton = document.querySelector('.back-to-top')

  if (window.scrollY >= 560) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

//quando fizer o scroll executa essas funções
window.addEventListener('scroll', function () {
  changeHeaderWhenScroll()
  backToTop()
})
