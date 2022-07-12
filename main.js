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
   if (scrollY > 0) {
      document.getElementById('navigation').style
      .backgroundColor = 'hsl(var(--hue), 100%, 26%)';
   }
      else {
         document.getElementById('navigation').style.backgroundColor = ''
      }
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


      //document.getElementById('backToTopButton').style.opacity = '1'
      //document.getElementById('backToTopButton').style.visibility = 'visible'
      //document.getElementById('backToTopButton').style.transform = 'translateY(0)'
      //document.getElementById('backToTopButton').style.position = 'fixed'
      //document.getElementById('backToTopButton').style.bottom = '1rem'
      //document.getElementById('backToTopButton').style.right = '2.5rem'
      //document.getElementById('backToTopButton').style.transform = 'translateY(100%)'
      //document.getElementById('backToTopButton').style.transition = '200ms'
      
      //opacity: 1;
      //visibility: visible;
      //transform: translateY(0);