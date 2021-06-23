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

const header = document.querySelector('#header')
const navHeight = header.offsetHeight

window.addEventListener('scroll', function () {
  if (window.scrollY >= navHeight) {
    header.classList.add('scroll')
  } else {
    header.classList.remove('scroll')
  }
})
