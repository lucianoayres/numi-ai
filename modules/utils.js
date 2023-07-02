import {
	DRAWING_AREA_CLASS,
	RESULT_CONTAINER_CLASS,
	PREDICTION_RESULT_TEXT_CLASS,
	PREDICTION_PROBABILITY_TEXT_CLASS,
	PREDICTION_PROBABILITY_PERCENTAGE_TEXT_CLASS,
	PREDICTION_PROBABILITY_HIDDEN_TEXT_CLASS,
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
} from './constants.js'

export * from './classifier.js'

export * from './drawing.js'

export function updateResult(number, probability) {
	const resultText = document.querySelector(PREDICTION_RESULT_TEXT_CLASS)
	const probabilityText = document.querySelector(
		PREDICTION_PROBABILITY_PERCENTAGE_TEXT_CLASS
	)

	resultText.innerText = generateResultMessage(number)
	showProbabilityText()
	probabilityText.innerText = formatProbabilityToPercentage(probability)
	showPredictionIconAnimation()
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

function generateResultMessage(number) {
	const phrases = [
		`Hooray! The number is ${number}!`,
		`Wowza! We've got ${number}!`,
		`Drumroll, please! The chosen number is ${number}!`,
		`Hold your breath... it's ${number}!`,
		`Incredible! We've got ourselves a ${number}!`,
		`Behold! The magic number is ${number}!`,
		`Guess what? It's none other than ${number}!`,
		`Ta-da! Feast your eyes on ${number}!`,
		`Eureka! We've uncovered ${number}!`,
		`Unbelievable! The number ${number} has been revealed!`,
		`Bingo! It's ${number}!`,
		`Abracadabra! Watch out for ${number}!`,
		`No way! We've got ${number}!`,
		`Hold onto your hats, it's ${number}!`,
		`By George, it's ${number}!`,
		`Look what we found... ${number}!`,
		`You won't believe it, but it's ${number}!`,
		`Prepare to be amazed... it's ${number}!`,
		`Voilà! Behold ${number}!`,
		`Can you believe your luck? It's ${number}!`,
		`Drumroll, please... ${number}!`,
		`It's like magic, ${number} has appeared!`,
		`Get ready for a surprise... ${number}!`,
		`Hold onto your socks, it's ${number}!`,
		`Well, well, well... ${number} it is!`,
		`You guessed it right, it's ${number}!`,
		`Brace yourself... ${number}!`,
		`Check this out, it's ${number}!`,
		`Who would've thought? It's ${number}!`,
		`Stop the presses, it's ${number}!`,
		`We've hit the jackpot with ${number}!`,
		`Guess what? It's a smashing ${number}!`,
		`We're in luck, it's ${number}!`,
		`Hold your horses, it's ${number}!`,
		`Incredible! We've got ${number} in our hands!`,
		`Goodness gracious, it's ${number}!`,
		`Hip hip hooray, it's ${number}!`,
		`Ladies and gentlemen, presenting ${number}!`,
		`A round of applause for ${number}!`,
		`It's official, it's ${number}!`,
		`Fantastic news, it's ${number}!`,
		`Oh yeah, it's ${number}!`,
		`Check it out: ${number}!`,
		`Whoa! We hit ${number}!`,
		`No kidding, it's ${number}!`,
		`Boom! ${number} is here!`,
		`Look here, it's ${number}!`,
		`We struck gold, it's ${number}!`,
		`Oh my, it's ${number}!`,
		`Jump for joy, it's ${number}!`,
		`Lucky us, it's ${number}!`,
		`We've got the prize: ${number}!`,
		`Oh snap, it's ${number}!`,
		`Step aside, it's ${number}!`,
		`Oh baby, ${number} is here!`,
		`Incredible news, it's ${number}!`,
		`Yahoo! ${number} is the one!`,
		`Hey hey! We've got ${number}!`,
		`Woo-hoo! It's ${number}!`,
		`Giddy up, it's ${number}!`,
		`Hold the phone, it's ${number}!`,
		`Oh yeah, baby! It's ${number}!`,
	]
	const randomIndex = Math.floor(Math.random() * phrases.length)
	return phrases[randomIndex]
}
