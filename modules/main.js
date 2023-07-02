import {
	INSTRUCTIONS_TEXT,
	PREDICT_BUTTON_CLASS,
	RESULT_CONTAINER_CLASS,
	RESULT_HANDLER_CLASS,
	MENU_BUTTON_CLASS,
	ABOUT_CONTAINER_CLASS,
	ABOUT_CLOSE_BUTTON_CLASS,
} from './constants.js'

import {
	setInstructionsText,
	setDefaultPredictionText,
	closeResultContainer,
} from './utils.js'

const resultButton = document.querySelector(PREDICT_BUTTON_CLASS)
const resultContainer = document.querySelector(RESULT_CONTAINER_CLASS)
const resultHandler = document.querySelector(RESULT_HANDLER_CLASS)

setInstructionsText(INSTRUCTIONS_TEXT)
setDefaultPredictionText()

resultButton.addEventListener('click', function (e) {
	e.stopPropagation()
	resultContainer.style.display = 'block'
})

resultHandler.addEventListener('click', function (e) {
	closeResultContainer()
})

resultContainer.addEventListener('click', function (e) {
	closeResultContainer()
})

const menuButton = document.querySelector(MENU_BUTTON_CLASS)
const aboutContainer = document.querySelector(ABOUT_CONTAINER_CLASS)
const aboutCloseButton = document.querySelector(ABOUT_CLOSE_BUTTON_CLASS)

menuButton.addEventListener('click', function (e) {
	aboutContainer.style.display = 'block'
})

aboutCloseButton.addEventListener('click', function (e) {
	aboutContainer.style.display = 'none'
})

// Variables to store touch coordinates
let startY
let endY

// Function to handle mouse down event
function handleMouseDown(event) {
	startY = event.clientY
}

// Function to handle mouse up event
function handleMouseUp(event) {
	endY = event.clientY
	checkSwipeDirection()
}

// Function to handle touch start event
function handleTouchStart(event) {
	startY = event.touches[0].clientY
}

// Function to handle touch end event
function handleTouchEnd(event) {
	endY = event.changedTouches[0].clientY
	checkSwipeDirection()
}

// Function to check the swipe direction and trigger the action
function checkSwipeDirection() {
	const swipeThreshold = 50 // Minimum distance required for a swipe

	if (endY - startY > swipeThreshold) {
		// Swipe-down action
		// Perform your desired action or call a function here
		closeResultContainer()
	}
}

// Attach touch event listeners to the target element
// const targetElement = document.getElementById(RESULT_CONTAINER_CLASS);

resultContainer.addEventListener('mousedown', handleMouseDown, false)
resultContainer.addEventListener('mouseup', handleMouseUp, false)

resultContainer.addEventListener('touchstart', handleTouchStart, false)
resultContainer.addEventListener('touchend', handleTouchEnd, false)
