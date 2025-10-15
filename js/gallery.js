
var contactPage = document.getElementById("contact-info-container")
var gNavContactLink = document.getElementById("gallery-nav-contact-link")
var gFootContactLink = document.getElementById("gallery-footer-contact-link")

// Function to open contact sidebar from gallery page
function openSidebar() {
  contactPage.classList.remove('fade-out') // Resets class list if set by previous click
  contactPage.style.display = "block"
}

gNavContactLink.onclick = gFootContactLink.onclick = openSidebar

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
