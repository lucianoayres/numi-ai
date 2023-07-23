<p align="center"><img src="https://github.com/lucianoayres/numi-ai/assets/20209393/4de2d339-4edc-4b8e-8016-24e9555439e0" />
</p>

<h2 align="center">NUMI - AI-Powered Hand-drawn Digit Recognition</h2>

`NUMI AI` is an interactive web application that allows you to draw single-digit numbers on a canvas and receive real-time predictions for the drawn digits. Powered by a [Convolutional Neural Network (CNN)](https://en.wikipedia.org/wiki/Convolutional_neural_network), NUMI AI accurately recognizes hand-drawn numbers.

## Features

- **Single Digit Number Recognition:** NUMI AI specializes in recognizing hand-drawn single-digit numbers, including fully rotated digits. Its CNN architecture ensures accurate predictions.

- **Real-time Prediction:** As you draw a number, NUMI AI provides immediate predictions, offering a responsive and interactive user experience.

- **Cross-Device Compatibility:** NUMI AI supports a wide range of devices, including web browsers on desktop computers, laptops, tablets, and mobile phones.

## Screenshots

![numi-ai-demo](https://github.com/lucianoayres/numi-ai/assets/20209393/0b963f92-1aa3-41da-ae81-59d97e74f6f3)

## Model Training

The NUMI AI model was trained using the MNIST dataset, which is the largest dataset of hand-drawn numbers in the world. The Python backend script used for training the model can be [viewed on Google Colab](https://colab.research.google.com/drive/1VbnsdVftu8n-4u-nGLdSLMFeJHlT9LPr?usp=sharing).

## Technologies Used

* **Frontend**:
   * Vanilla JavaScript, HTML, and CSS
   * [TensorFlow.js](https://www.tensorflow.org/js) library  (for integrating pre-trained machine learning models in the browser for real-time predictions)

* **Backend**:
   * Python (for model creation and training)
   * [TensorFlow](https://tensorflow.org/) library (for developing and deploying machine learning models)
   * Docker (for running a container to convert the tensorflow keras model to .JSON)
   * GitHub Actions (for minifying the JavaScript files, building and deploying to GitHub pages)

## Getting Started

To set up and run NUMI AI locally, follow these steps:

1. **Data Conversion using Docker**:

   - Build the Docker image:
     ```bash
     docker build -t tensorflowjs-converter .
     ```
   - Run the Docker container with the image:
     ```bash
     docker run -v "${PWD}/model:/app/model" -v "${PWD}/src/data:/app/src/data" tensorflowjs-converter
     ```
     These commands will build the Docker image and execute the data conversion process.

2. **Run the Application Locally**:
   - Start a local web server with Python's Simple HTTP Server:
     ```bash
     python -m SimpleHTTPServer 5500
     ```
   - Access the application by navigating to `http://localhost:5500` or the specified local web server URL in your browser.

## Design Assets
The logo and prototype design assets created for the project can be [accessed on Figma](https://www.figma.com/file/qCDHbXLVQoG7QHLCfbtRcG/NUMI-AI-Prototype?type=design&node-id=0%3A1&mode=design&t=4JJfUqlPXEcaXueT-1).

## Contributing

Contributions to NUMI AI are highly appreciated! If you encounter any issues, have suggestions for improvements, or would like to contribute code, please feel free to open an issue or submit a pull request on the project's GitHub repository.

## License

NUMI AI is released under the [MIT License](https://opensource.org/licenses/MIT), allowing you to use, modify, and distribute the code for both commercial and non-commercial purposes.

## Acknowledgments

We extend our gratitude to the open-source community and the contributors who made this project possible. Their dedication and efforts have played a vital role in shaping NUMI AI.

If you have any questions or require further assistance, please don't hesitate to reach out.
