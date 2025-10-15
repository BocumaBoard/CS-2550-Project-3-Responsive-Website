
// Variables/function for returning to homepage
var mainSection = document.getElementById("main-section")
var nHomeLink = document.getElementById("nav-home-link")
var fHomeLink = document.getElementById("footer-home-link")

function returnHome() {
  mainSection.style.display = "flex"
  imageGallery.style.display = "none"
}

nHomeLink.onclick = fHomeLink.onclick = returnHome 

// Variables/function for opening image gallery
var imageGallery = document.getElementById("gallery-grid-container")
var galleryButton = document.getElementById("gallery-btn")
var nGalleryLink = document.getElementById("nav-gallery-link")
var fGalleryLink = document.getElementById("footer-gallery-link")

function openGallery() {
  mainSection.style.display = "none"
  imageGallery.style.display = "grid"
}

nGalleryLink.onclick = fGalleryLink.onclick = galleryButton.onclick = openGallery

// Variables/function for opening contact sidebar
var nContactLink = document.getElementById("nav-contact-link")
var fContactLink = document.getElementById("footer-contact-link")
var contactPage = document.getElementById("contact-info-container")


function openSidebar() {
  contactPage.classList.remove('fade-out') // Resets class list if set by previous click
  contactPage.style.display = "block"
}

fContactLink.onclick = nContactLink.onclick = openSidebar
  
// Function for smoothly hiding contact info sidebar when clicked
contactPage.addEventListener("click", function() {
  const contactPage = document.getElementById("contact-info-container")

  contactPage.classList.add('fade-out')

  // Finishes hiding sidebar after transition
  contactPage.addEventListener('transitionend', function handler() {
    contactPage.style.display = "none"
    contactPage.removeEventListener('transitionend', handler)
  })
})
