import { MODEL_PATH } from './constants.js'
import { createCanvas } from './utils.js'

async function loadModel(modelPath) {
	return tf.loadLayersModel(modelPath)
}

function preprocessImage(imageData) {
	const input = tf.browser
		.fromPixels(imageData)
		.mean(2)
		.toFloat()
		.div(tf.scalar(255))
	return input.reshape([1, 28, 28, 1])
}

async function predict(model, input) {
	return model.predict(input)
}

async function classifyImage(model, file) {
	try {
		const img = file

		const canvas = createCanvas(28, 28)
		const context = canvas.getContext('2d')
		context.drawImage(img, 0, 0, 28, 28)
		const imageData = context.getImageData(0, 0, 28, 28)
		const input = preprocessImage(imageData)

		return predict(model, input)
	} catch (error) {
		console.error('Error occurred while processing the image:', error)
	}
}

function getTopPrediction(predictions) {
	const highestIndex = predictions.argMax(1).dataSync()[0]
	const highestProbability = predictions.dataSync()[highestIndex]
	return { index: highestIndex, probability: highestProbability }
}

export async function getPredictionResult(drawingImage) {
	const modelPath = MODEL_PATH

	const model = await loadModel(modelPath)
	const predictions = await classifyImage(model, drawingImage)
	const result = getTopPrediction(predictions)

	return result
}
