
// FORM VALIDATION REGEXES
let phoneRegex = /[a-z]/;  //TODO go to regexer.com or reg101.com and find a suitable phone number regex and place here
let emailRegex = /[\w]*@[\w]*.{1}(com|gov|edu|io|net){1}/;
let zipCodeRegex = /(?<zip1>\d{5})([-]?(?<zip2>\d{4}))?(?<ERROR>.+)?/

const stateAbbrevs = [
  'AL', 'AK', 'AS', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'DC', 'FM', 'FL', 'GA',
  'GU', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MH', 'MD', 'MA',
  'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND',
  'MP', 'OH', 'OK', 'OR', 'PW', 'PA', 'PR', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT',
  'VT', 'VI', 'VA', 'WA', 'WV', 'WI', 'WY'
];

let validateClass = 'was-validated'
let form = null;
let successMsg = null;

// Starts up validation by adding listeners to input fields
function initValidation(formId, successId) {
	form = document.getElementById(formId)
	successMsg = document.getElementById(successId)
	let formInputs = document.querySelectorAll('input')

	// Add change event listener to each input
	for (let input of formInputs) {
		input.addEventListener('change', onChange)
	}

	form.addEventListener('submit', onSubmit)
}

// When change event is detected, the target element is added to .was-validated
// and validate form is called
function onChange(e) {
	let elem = e.currentTarget
	elem.classList.add(validateClass)
	validateForm()

}

// Handles form submission
function onSubmit(e) {
	let form = e.currentTarget

	// Prevents default, prevents other handlers from firing
	e.preventDefault()
	e.stopPropagation()

	validateForm()

	// If form isn't valid, add .was-validated class to show all bad inputs
	if (!form.checkValidity()) {
		let formInputs = document.querySelectorAll('input')
		for (let input of formInputs) {
			input.classList.add(validateClass)
		}
	}
	else { // Otherwise, hide the form and show the success message
		form.style.display = 'none'
		displaySuccessMsg()
	}
}

function displaySuccessMsg() {

}

function validateForm() {
	// Checks all fields with no format requirements
	checkRequired('first-name', 'First Name is required')
	checkRequired('last-name', 'Last Name is required')
	checkRequired('address', 'Address is required')
	checkRequired('city', 'City is required')

	// Validates state input
	if (checkRequired('state', 'State is required')) {
		validateState('state', 'Not a valid state: must enter 2-digit abbrevation (e.g. VA, TX)')
	}
	// Validates ZIP code input
	if (checkRequired('zip', 'ZIP code is required')) {
		checkFormat('zip', 'Invalid ZIP code: Must be in ##### or #####-#### format', zipCodeRegex)
	}
}

// Checks if input exists in required fields, returns bool
function checkRequired(id, message) {
	let elem = document.getElementById(id)
	let valid = false
	let type = elem.type

	switch (type) {
		case 'text':
			// Field isn't empty
			if (elem.value != '') {
				valid = true
			}
			break
		case 'checkbox':
	}

	setElementValidity(id, valid, message)
	return valid
}

// Checks if state input is a valid state abbreviation
function validateState(id, message) {
	let elem = document.getElementById(id)
	let valid = false
	let abbrev = elem.value.toUpperCase()

	if (stateAbbrevs.includes(abbrev)) {
		valid = true
	}
	setElementValidity(id, valid, message)
}

// Checks input values against the specified regex
function checkFormat(id, message, rgx) {
	let elem = document.getElementById(id)
	let valid = false
	let regex = new RegExp(rgx)

	if (regex.test(elem.value)) {
		valid = true
	}
	setElementValidity(id, valid, message)
}

function setElementValidity(id, valid, message) {
	let elem = document.getElementById(id)

	if (valid) {
		elem.setCustomValidity('') // Field is valid, set errorMsg to blank
	}
	else {
		elem.setCustomValidity(message) // Field is invalid, set errorMsg to message
	}
}
