// FIXME change indent size to 4 spaces

// ============================================================================
// HOME SECTION
// ============================================================================
var mainSection = document.getElementById('main-section')
var nHomeLink = document.getElementById('nav-home-link')
var fHomeLink = document.getElementById('footer-home-link')

function returnHome() {
	mainSection.style.display = 'flex'
	imageGallery.style.display = 'none'
	visitorForm.style.display = 'none'
}

nHomeLink.addEventListener('click', returnHome)
fHomeLink.addEventListener('click', returnHome)

// ============================================================================
// GALLERY SECTION
// ============================================================================
var imageGallery = document.getElementById('gallery-grid-container')
var galleryLinks = [ 
		document.getElementById('gallery-btn'),
		document.getElementById('nav-gallery-link'),
		document.getElementById('footer-gallery-link')
]

function openGallery() {
	imageGallery.style.display = 'grid'
	mainSection.style.display = 'none'
	visitorForm.style.display = 'none'
}

for (let elem of galleryLinks) {
	elem.addEventListener('click', openGallery)
}

// ============================================================================
// CONTACT SECTION
// ============================================================================
var contactPage = document.getElementById('contact-info-container')
var nContactLink = document.getElementById('nav-contact-link')
var fContactLink = document.getElementById('footer-contact-link')

function openSidebar() {
	contactPage.classList.remove('fade-out')
	contactPage.style.display = 'block'
}

nContactLink.addEventListener('click', openSidebar)
fContactLink.addEventListener('click', openSidebar)

// Smoothly closes contact sidebar
contactPage.addEventListener('click', function() {
	contactPage.classList.add('fade-out')
	contactPage.addEventListener('transitionend', function handler() {
		contactPage.style.display = 'none'
		contactPage.removeEventListener('transitionend', handler)
	})
})

// ============================================================================
// VISITOR FORM SECTION
// ============================================================================
var visitorForm = document.getElementById('visitor-form')
var formHeaderLink = document.getElementById('nav-form')
var footHeaderLink = document.getElementById('footer-form')

function openVisitorForm() {
	visitorForm.style.display = 'flex'
	mainSection.style.display = 'none'
	imageGallery.style.display = 'none'
}

formHeaderLink.addEventListener('click', openVisitorForm)
footHeaderLink.addEventListener('click', openVisitorForm)

// ============================================================================
// THEME TOGGLE
// ============================================================================
var themeSelector = document.getElementById('nav-theme-toggle')
var link = document.createElement('link')
var toggled = false

// Inserts theme stylesheet into head when called
themeSelector.addEventListener('click', function() {
	var siteHeader = document.querySelector('h1')
	var headerImg = document.getElementById('header-image')
	var head = document.head
	
	link.type = 'text/css'
	link.rel = 'stylesheet'
	link.href = 'css/theme.css'

	if (!toggled) {
		toggled = true
		head.appendChild(link)
		siteHeader.textContent = "Ben's (Spooky) Figure Gallery"
		headerImg.src = 'img/tenko_sprite.png'
	} else {
		toggled = false
		head.removeChild(link)
		siteHeader.textContent = "Ben's Figure Gallery"
		headerImg.src = 'img/kaito_sprite.png'
	} 
})