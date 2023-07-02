import {
	INSTRUCTIONS_TEXT,
	PREDICT_BUTTON_CLASS,
	RESULT_CONTAINER_CLASS,
	MENU_BUTTON_CLASS,
	ABOUT_CONTAINER_CLASS,
	ABOUT_CLOSE_BUTTON_CLASS,
} from './constants.js'

import {
	setInstructionsText,
	setDefaultPredictionText,
	closeResultContainer,
} from './utils.js'

let swipeStartY = null
let swipeEndY = null

const resultButton = document.querySelector(PREDICT_BUTTON_CLASS)
const resultContainer = document.querySelector(RESULT_CONTAINER_CLASS)
const menuButton = document.querySelector(MENU_BUTTON_CLASS)
const aboutContainer = document.querySelector(ABOUT_CONTAINER_CLASS)
const aboutCloseButton = document.querySelector(ABOUT_CLOSE_BUTTON_CLASS)

function init() {
	resultButton.addEventListener('click', handleResultButtonClick)
	resultContainer.addEventListener('click', handleResultContainerClick)

	menuButton.addEventListener('click', handleMenuButtonClick)
	aboutCloseButton.addEventListener('click', handleAboutCloseButtonClick)

	resultContainer.addEventListener('mousedown', handleMouseDown, false)
	resultContainer.addEventListener('mouseup', handleMouseUp, false)
	resultContainer.addEventListener('touchstart', handleTouchStart, false)
	resultContainer.addEventListener('touchend', handleTouchEnd, false)

	setInstructionsText(INSTRUCTIONS_TEXT)
	setDefaultPredictionText()
}

function handleResultButtonClick(e) {
	e.stopPropagation()
	resultContainer.style.display = 'block'
}

function handleResultContainerClick(e) {
	closeResultContainer()
}

function handleMenuButtonClick() {
	aboutContainer.style.display = 'block'
}

function handleAboutCloseButtonClick(e) {
	aboutContainer.style.display = 'none'
}

function handleMouseDown(event) {
	swipeStartY = event.clientY
}

function handleMouseUp(event) {
	swipeEndY = event.clientY
	checkSwipeDirection()
}

function handleTouchStart(event) {
	swipeStartY = event.touches[0].clientY
}

function handleTouchEnd(event) {
	swipeEndY = event.changedTouches[0].clientY
	checkSwipeDirection()
}

function checkSwipeDirection() {
	const swipeThreshold = 50

	if (swipeEndY - swipeStartY > swipeThreshold) {
		closeResultContainer()
	}
}

init()
