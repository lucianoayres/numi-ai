import {
	DRAWING_AREA_CLASS,
	RESULT_CONTAINER_CLASS,
	PREDICTION_RESULT_TEXT_CLASS,
	PREDICTION_PROBABILITY_TEXT_CLASS,
	PREDICTION_PROBABILITY_PERCENTAGE_TEXT_CLASS,
	PREDICTION_PROBABILITY_HIDDEN_TEXT_CLASS,
	PROBABILITY_THRESHOLD,
	PREDICTION_ICON_CLASS,
	PREDICTION_ICON_ANIMATION_CLASS,
	DEFAULT_MESSAGE_PREDICTION_TEXT,
	DEFAULT_LOADING_PREDICTION_TEXT,
	INSTRUCTIONS_TEXT_CLASS,
	INSTRUCTIONS_HIDDEN_TEXT_CLASS,
	CANVAS_FONT_STYLE,
	CANVAS_FONT_COLOR,
	CANVAS_X_POSITION,
	CANVAS_Y_POSITION,
	RESULT_PHRASES,
} from '../constants/index.js'

export * from '../modules/classifier.js'

export * from '../modules/drawing.js'

export function updateResult(number, probability) {
	const resultText = document.querySelector(PREDICTION_RESULT_TEXT_CLASS)

	resultText.innerText = generateResultMessage(number)
	updateProbabilityText(probability)

	showPredictionIconAnimation()
}

function updateProbabilityText(probability) {
	const probabilityText = document.querySelector(
		PREDICTION_PROBABILITY_PERCENTAGE_TEXT_CLASS
	)
	showProbabilityText()
	styleProbabilityText(probabilityText, probability)
	probabilityText.innerText = formatProbabilityToPercentage(probability)
}

function styleProbabilityText(element, probability) {
	let grade = ''

	if (probability >= PROBABILITY_THRESHOLD.HIGH.value) {
		grade = PROBABILITY_THRESHOLD.HIGH.label
	} else if (probability >= PROBABILITY_THRESHOLD.MEDIUM.value) {
		grade = PROBABILITY_THRESHOLD.MEDIUM.label
	} else {
		grade = PROBABILITY_THRESHOLD.LOW.label
	}

	const formattedClassName =
		PREDICTION_PROBABILITY_PERCENTAGE_TEXT_CLASS.substring(1)
	element.classList.remove(
		`${formattedClassName}--high`,
		`${formattedClassName}--medium`,
		`${formattedClassName}--low`
	)

	element.classList.add(`${formattedClassName}--${grade}`)
}

export function closeResultContainer(elementClass = RESULT_CONTAINER_CLASS) {
	const resultContainer = document.querySelector(elementClass)
	resultContainer.style.display = 'none'
	hidePredictionIconAnimation()
}

export function setDefaultPredictionText(
	elementClass = PREDICTION_RESULT_TEXT_CLASS,
	message = DEFAULT_MESSAGE_PREDICTION_TEXT
) {
	const predictionTextElement = document.querySelector(elementClass)
	predictionTextElement.innerText = message
	hideProbabilityText()
	hidePredictionIconAnimation()
}

export function setLoadingPredictionText(
	elementClass = PREDICTION_RESULT_TEXT_CLASS,
	message = DEFAULT_LOADING_PREDICTION_TEXT
) {
	const predictionTextElement = document.querySelector(elementClass)
	predictionTextElement.innerText = message
	hideProbabilityText()
}

function showProbabilityText(elementClass = PREDICTION_PROBABILITY_TEXT_CLASS) {
	const probabilityTextElement = document.querySelector(elementClass)
	const formattedClassName =
		PREDICTION_PROBABILITY_HIDDEN_TEXT_CLASS.substring(1)
	probabilityTextElement.classList.remove(formattedClassName)
}

function hideProbabilityText(elementClass = PREDICTION_PROBABILITY_TEXT_CLASS) {
	const probabilityTextElement = document.querySelector(elementClass)
	const formattedClassName =
		PREDICTION_PROBABILITY_HIDDEN_TEXT_CLASS.substring(1)
	probabilityTextElement.classList.add(formattedClassName)
}

function formatProbabilityToPercentage(number) {
	const multipliedNumber = number * 100
	const stringNumber = multipliedNumber.toString()
	const firstSixCharacters = stringNumber.substring(0, 5)
	return `${firstSixCharacters}%`
}

export function setInstructionsText(message) {
	const instructionsTextElement = document.querySelector(
		INSTRUCTIONS_TEXT_CLASS
	)
	typeEffect(instructionsTextElement, message, 50)
}

export function hideInstructionsText() {
	const instructionsTextElement = document.querySelector(
		INSTRUCTIONS_TEXT_CLASS
	)
	const formattedClassName = INSTRUCTIONS_HIDDEN_TEXT_CLASS.substring(1)
	instructionsTextElement.classList.add(formattedClassName)
}

function showPredictionIconAnimation(
	elementClass = PREDICTION_ICON_CLASS,
	animationClass = PREDICTION_ICON_ANIMATION_CLASS
) {
	const predictionIconElement = document.querySelector(elementClass)
	const formattedClassName = animationClass.substring(1)
	predictionIconElement.classList.add(formattedClassName)
}

function hidePredictionIconAnimation(
	elementClass = PREDICTION_ICON_CLASS,
	animationClass = PREDICTION_ICON_ANIMATION_CLASS
) {
	const predictionIconElement = document.querySelector(elementClass)
	const formattedClassName = animationClass.substring(1)
	predictionIconElement.classList.remove(formattedClassName)
}

export function typeEffect(element, message, speed, initialDelay = 1000) {
	const text = message
	element.innerText = ''

	setTimeout(() => {
		let i = 0
		const timer = setInterval(function () {
			if (i < text.length) {
				element.innerHTML += text.charAt(i)
				i++
			} else {
				clearInterval(timer)
			}
		}, speed)
	}, initialDelay)
}

export function writeTextToCanvas(
	message,
	canvasElementClass = DRAWING_AREA_CLASS
) {
	const canvas = document.querySelector(canvasElementClass)
	const context = canvas.getContext('2d')

	context.font = CANVAS_FONT_STYLE // Set the font style and size
	context.fillStyle = CANVAS_FONT_COLOR // Set the text color
	context.fillText(message, CANVAS_X_POSITION, CANVAS_Y_POSITION)
}

export function createCanvas(width, height) {
	const canvas = document.createElement('canvas')
	canvas.width = width
	canvas.height = height
	return canvas
}

export function isMobileDevice() {
	const mediaQuery = window.matchMedia('(pointer:coarse)')
	return mediaQuery.matches
}

function generateResultMessage(number, phrases = RESULT_PHRASES) {
	const randomIndex = Math.floor(Math.random() * phrases.length)
	const message = phrases[randomIndex].replace('[LABEL]', number)

	return message
}
