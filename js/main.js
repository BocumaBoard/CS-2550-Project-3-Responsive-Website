
// Function for using 'see more' button on homepage
document.getElementById("gallery-btn").onclick = function() {
  window.location.href = "gallery.html"
}

var nContactLink = document.getElementById("nav-contact-link")
var fContactLink = document.getElementById("footer-contact-link")
var contactPage = document.getElementById("contact-info-container")

// Function for opening contact sidebar
function openSidebar() {
  contactPage.classList.remove('fade-out') 
  contactPage.style.display = "block"
}

fContactLink.onclick = openSidebar
nContactLink.onclick = openSidebar
  
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
