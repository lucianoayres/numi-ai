import {
	PREDICT_BUTTON_CLASS,
	RESULT_CONTAINER_CLASS,
} from '../constants/index.js'

import {
	setDefaultPredictionText,
	closeResultContainer,
} from '../utils/index.js'

const resultButton = document.querySelector(PREDICT_BUTTON_CLASS)
const resultContainer = document.querySelector(RESULT_CONTAINER_CLASS)

let swipeStartY = null
let swipeEndY = null

export function resultView() {
	resultButton.addEventListener('click', handleResultButtonClick)
	resultContainer.addEventListener('click', handleResultContainerClick)
	resultContainer.addEventListener('mousedown', handleMouseDown, false)
	resultContainer.addEventListener('mouseup', handleMouseUp, false)
	resultContainer.addEventListener('touchstart', handleTouchStart, false)
	resultContainer.addEventListener('touchend', handleTouchEnd, false)

	setDefaultPredictionText()
}

function handleResultButtonClick(e) {
	e.stopPropagation()
	resultContainer.style.display = 'block'
}

function handleResultContainerClick(e) {
	closeResultContainer()
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
