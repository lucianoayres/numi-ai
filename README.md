# NUMI AI - Single Digit Hand-drawn Number Recognition

NUMI AI is an interactive web application that allows you to draw single-digit numbers on a canvas and receive real-time predictions for the drawn digits. Powered by a Convolutional Neural Network (CNN), NUMI AI accurately recognizes hand-drawn numbers. With its user-friendly interface and responsive design, NUMI AI provides an intuitive and seamless experience across web and mobile devices.

## Project Highlights

- **Single Digit Number Recognition:** NUMI AI specializes in recognizing hand-drawn single-digit numbers, including fully rotated digits. Its CNN architecture ensures accurate predictions.

- **Real-time Prediction:** As you draw a number, NUMI AI provides immediate predictions, offering a responsive and interactive user experience.

- **Cross-Device Compatibility:** NUMI AI supports a wide range of devices, including web browsers on desktop computers, laptops, tablets, and mobile phones.

## Technologies Used

- **Frontend**: The frontend of NUMI AI is built with Vanilla JavaScript, HTML, and CSS. It utilizes the TensorFlow.js library, enabling the integration of pre-trained machine learning models in the browser for real-time predictions.

- **Backend**: The backend of NUMI AI is powered by Python and the TensorFlow library. Python provides a robust environment for model creation and training, while TensorFlow offers a comprehensive framework for developing and deploying machine learning models.

## Model Training

The NUMI AI model was trained using the MNIST dataset, which is the largest dataset of hand-drawn numbers in the world. The Python backend script used for training the model can be viewed on Google Colab. You can access the script [here](https://colab.research.google.com/drive/1VbnsdVftu8n-4u-nGLdSLMFeJHlT9LPr?usp=sharing).

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

## Contributing

Contributions to NUMI AI are highly appreciated! If you encounter any issues, have suggestions for improvements, or would like to contribute code, please feel free to open an issue or submit a pull request on the project's GitHub repository.

## License

NUMI AI is released under the [MIT License](https://opensource.org/licenses/MIT), allowing you to use, modify, and distribute the code for both commercial and non-commercial purposes.

## Acknowledgments

We extend our gratitude to the open-source community and the contributors who made this project possible. Their dedication and efforts have played a vital role in shaping NUMI AI.

If you have any questions or require further assistance, please don't hesitate to reach out. Enjoy using NUMI AI to recognize hand-drawn single-digit numbers!
