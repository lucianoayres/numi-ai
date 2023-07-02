import {
	STROKE_STYLE,
	LINE_WIDTH,
	LINE_CAP_STYLE,
	DRAWING_AREA_CLASS,
	CLEAR_CANVAS_BUTTON_CLASS,
	EXPORTED_IMAGE_PADDING,
} from './constants.js'

import {
	getPredictionResult,
	hideInstructionsText,
	setDefaultPredictionText,
	setLoadingPredictionText,
	updateResult,
} from './utils.js'

let isCanvasEmpty = true

// Set the initial position for drawing
let isDrawing = false
let lastX = 0
let lastY = 0

// Get the drawing area element
const drawingArea = document.querySelector(DRAWING_AREA_CLASS)
const context = drawingArea.getContext('2d')

// Set the drawing area dimensions
resizeCanvasToWindow(drawingArea)

// Event listeners for mouse and touch events
drawingArea.addEventListener('mousedown', startDrawing)
drawingArea.addEventListener('mousemove', draw)
drawingArea.addEventListener('mouseup', stopDrawing)

drawingArea.addEventListener('touchstart', startDrawing, { passive: true })
drawingArea.addEventListener('touchmove', touchMoveHandler, { passive: false })
drawingArea.addEventListener('touchend', stopDrawing)

drawingArea.addEventListener('mouseleave', disableDrawingMode)

// Attach the function to the 'resize' event of the window
window.addEventListener('resize', windowResizeHandler)

function windowResizeHandler() {
	resizeCanvasToWindow(drawingArea)
	clearCanvas()
}

function resizeCanvasToWindow(element) {
	element.width = window.innerWidth
	element.height = window.innerHeight
}

// Function to start drawing
function startDrawing(e) {
	enableDrawingMode()

	if (isCanvasEmpty) {
		hideInstructionsText()
		isCanvasEmpty = false
	}

	;[lastX, lastY] = [getCurrentX(e), getCurrentY(e)]
}

// Function to draw
function draw(e, strokeStyle = STROKE_STYLE, lineWidth = LINE_WIDTH) {
	if (!isDrawing) return
	const currentX = getCurrentX(e)
	const currentY = getCurrentY(e)

	// Set drawing styles
	context.strokeStyle = strokeStyle
	context.lineWidth = lineWidth
	context.lineCap = LINE_CAP_STYLE // Ensure smooth line endings

	// Draw a line from the last position to the current position
	context.beginPath()
	context.moveTo(lastX, lastY)
	context.lineTo(currentX, currentY)
	context.stroke()
	;[lastX, lastY] = [currentX, currentY]
}

function getCurrentX(e) {
	return e.offsetX || e.touches[0].clientX
}

function getCurrentY(e) {
	return e.offsetY || e.touches[0].clientY
}

function enableDrawingMode() {
	isDrawing = true
}

function disableDrawingMode() {
	isDrawing = false
}

// Function to stop drawing
function stopDrawing() {
	disableDrawingMode()

	// Save the drawing as an Image object
	const drawingImage = new Image()
	drawingImage.src = getDrawingCanvas(drawingArea).toDataURL()

	setLoadingPredictionText()

	if (!isCanvasEmpty) {
		convertCanvasToImage(drawingImage.src)
			.then(async (convertedImage) => {
				if (isCanvasEmpty) return

				const result = await getPredictionResult(convertedImage)

				updateResult(result.index, result.probability)
			})
			.catch((error) => {
				console.error(error)
			})
	} else {
		setDefaultPredictionText()
	}
}

// convert canvas to image with symmetric dimensions
function convertCanvasToImage(canvasDataURL) {
	return new Promise((resolve, reject) => {
		const canvasImage = new Image()

		canvasImage.onload = function () {
			const canvas = document.createElement('canvas')
			const context = canvas.getContext('2d')

			const canvasWidth = canvasImage.width
			const canvasHeight = canvasImage.height
			const maxDimension =
				Math.max(canvasWidth, canvasHeight) + EXPORTED_IMAGE_PADDING

			// Set the canvas dimensions based on the maximum dimension
			canvas.width = maxDimension
			canvas.height = maxDimension

			// Set the canvas background style

			context.fillStyle = 'black'
			context.fillRect(0, 0, maxDimension, maxDimension)

			// Calculate the position to center the canvas drawing
			const offsetX = (maxDimension - canvasWidth) / 2
			const offsetY = (maxDimension - canvasHeight) / 2

			// Draw the canvas image onto the new canvas preserving the aspect ratio
			context.drawImage(canvasImage, offsetX, offsetY)

			// Create a new Image object with the converted dimensions
			const convertedImage = new Image()
			convertedImage.src = canvas.toDataURL()

			resolve(convertedImage)
		}

		canvasImage.onerror = function () {
			reject(new Error('Failed to load canvas image.'))
		}

		canvasImage.src = canvasDataURL
	})
}

// Get a new canvas with the exact dimensions of the drawing in the canvas passed as parameter
function getDrawingCanvas(canvas) {
	const context = canvas.getContext('2d')
	const imageData = context.getImageData(0, 0, canvas.width, canvas.height)
	const pixels = imageData.data

	let minX = canvas.width
	let minY = canvas.height
	let maxX = 0
	let maxY = 0

	for (let i = 0; i < pixels.length; i += 4) {
		const alpha = pixels[i + 3]
		if (alpha !== 0) {
			const x = (i / 4) % canvas.width
			const y = Math.floor(i / 4 / canvas.width)

			if (x < minX) minX = x
			if (x > maxX) maxX = x
			if (y < minY) minY = y
			if (y > maxY) maxY = y
		}
	}

	const drawingWidth = maxX - minX
	const drawingHeight = maxY - minY

	const drawingCanvas = document.createElement('canvas')
	drawingCanvas.width = drawingWidth
	drawingCanvas.height = drawingHeight

	const drawingContext = drawingCanvas.getContext('2d')
	drawingContext.drawImage(
		canvas,
		minX,
		minY,
		drawingWidth,
		drawingHeight,
		0,
		0,
		drawingWidth,
		drawingHeight
	)

	return drawingCanvas
}

// Prevent scrolling while drawing on touch devices
function touchMoveHandler(e) {
	e.preventDefault()
	draw(e)
}

// Button to erase the canvas
const clearCanvasButton = document.querySelector(CLEAR_CANVAS_BUTTON_CLASS)
clearCanvasButton.addEventListener('click', clearCanvas)

// Function to erase the canvas
function clearCanvas() {
	context.clearRect(0, 0, drawingArea.width, drawingArea.height)
	setDefaultPredictionText()
	isCanvasEmpty = true
}
