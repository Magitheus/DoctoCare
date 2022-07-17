window.addEventListener('scroll', onScroll)

onScroll()
function onScroll() {
   showNavOnScroll()   
   showBackToTopButtonOnScroll()
   
   activateMenuAtCurrentSection(home)
   activateMenuAtCurrentSection(services)
   activateMenuAtCurrentSection(about)
   activateMenuAtCurrentSection(contact)
}

function activateMenuAtCurrentSection(section) {
   const targetLine = scrollY + innerHeight / 2
   const sectionTop = section.offsetTop
   const sectionHeight = section.offsetHeight
   const sectionEndAt = sectionTop + sectionHeight

   const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop
   const sectionEndPassedTargetLine = sectionEndAt >= targetLine

   const sectionBoundaries = sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetLine

   const sectionId = section.getAttribute('id')
   const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`) 

   menuElement.classList.remove('active')
   if (sectionBoundaries) {
      menuElement.classList.add('active')
   }
}

function showNavOnScroll() {
   const menu = document.querySelector('#navigation');  
   menu.classList.toggle('scroll', scrollY > 0)
}

function showBackToTopButtonOnScroll() {
   if (scrollY > 400) {
      document.backToTopButton.classList.add('show')
   } else {
      document.backToTopButton.classList.remove('show')
   }
}

function openMenu() {
   document.body.classList.add('menu-expanded')
}

function closeMenu() {
   document.body.classList.remove('menu-expanded')
}

ScrollReveal({
   origin: 'top',
   distance: '30px',
   duration: 700 
}).reveal(`
   #home, 
   #home img, 
   #home .stats, 
   #services,
   #services header,
   #services .card
   #about, 
   #about header, 
   #about .content`)
