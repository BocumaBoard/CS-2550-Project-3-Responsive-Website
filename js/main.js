
// Variables/function for returning to homepage
var mainSection = document.getElementById('main-section')
var nHomeLink = document.getElementById('nav-home-link')
var fHomeLink = document.getElementById('footer-home-link')

function returnHome() {
  mainSection.style.display = 'flex'
  imageGallery.style.display = 'none'
}

nHomeLink.onclick = fHomeLink.onclick = returnHome 

// Variables/function for opening image gallery
var imageGallery = document.getElementById('gallery-grid-container')
var galleryButton = document.getElementById('gallery-btn')
var nGalleryLink = document.getElementById('nav-gallery-link')
var fGalleryLink = document.getElementById('footer-gallery-link')

function openGallery() {
  mainSection.style.display = 'none'
  imageGallery.style.display = 'grid'
}

nGalleryLink.onclick = fGalleryLink.onclick = galleryButton.onclick = openGallery

// Variables/function for opening contact sidebar
var nContactLink = document.getElementById('nav-contact-link')
var fContactLink = document.getElementById('footer-contact-link')
var contactPage = document.getElementById('contact-info-container')


function openSidebar() {
  contactPage.classList.remove('fade-out') // Resets class list if set by previous click
  contactPage.style.display = 'block'
}

fContactLink.onclick = nContactLink.onclick = openSidebar
  
// Function for smoothly hiding contact info sidebar when clicked
contactPage.addEventListener('click', function() {
  const contactPage = document.getElementById('contact-info-container')

  contactPage.classList.add('fade-out')

  // Finishes hiding sidebar after transition
  contactPage.addEventListener('transitionend', function handler() {
    contactPage.style.display = 'none'
    contactPage.removeEventListener('transitionend', handler)
  })
})

// Variables/function to change theme
var themeSelector = document.getElementById('nav-theme-toggle')
var link = document.createElement('link')
var toggled = false

themeSelector.addEventListener('click', function() {
  var siteHeader = document.querySelector('h1')
  var headerImg = document.getElementById('header-image')
  var head = document.head
  
  link.type = 'text/css'
  link.rel = 'stylesheet'
  link.href = 'css/theme.css'

  // Inserts theme sheet into head if untoggled when link is clicked, removes theme if toggled
  if (!toggled) {
    toggled = true
    head.appendChild(link)
    // Updates site header and image for theme
    siteHeader.textContent = "Ben's (Spooky) Figure Gallery"
    headerImg.src = 'img/tenko_sprite.png'
  } else {
    toggled = false
    head.removeChild(link)
    // Resets site header/image
    siteHeader.textContent = "Ben's Figure Gallery"
    headerImg.src = 'img/kaito_sprite.png'
  } 
})
