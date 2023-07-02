# Image Classifier Proof of Concept using TensorFlow.js

This is a proof-of-concept project that showcases an image classifier implemented using TensorFlow.js. The application enables users to upload an image that contains handwritten numbers, and it identifies the number while providing the corresponding probability of accuracy. The project utilizes the open source MNIST Dataset.

## Installation

To use this project, please follow these steps:

1. Clone the repository to your local machine using the following command:

   ```
   git clone https://github.com/your-username/image-classifier.git
   ```

2. Install TensorFlow.js

3. Convert the TensorFlow Keras model from H5 to JSON format. Run the `convert_model.sh` script located in the project's root directory:

   ```
   ./convert_model.sh
   ```

   This script will use the `tensorflowjs_converter` tool to convert the `./data/tf-keras.h5` file to the JSON format and save it as `./converted-model/model.json`. Make sure you have TensorFlow.js installed, and the `tensorflowjs_converter` command is available in your environment.

## Usage

The project includes sample images that you can use to test the application. These images are located in the `./sample-images` folder. Please ensure that each image is in PNG format.

To run the JavaScript code in the application, you need to run a local web server. This is necessary because certain web browsers enforce security restrictions that prevent JavaScript code from accessing local files directly.

Here are the instructions to run a simple local web server with Python:

1. Open a terminal or command prompt and navigate to the project's root directory.

2. Run the following command:

```
python3 -m http.server
```

3. The server will start, and you can access the application by visiting http://localhost:8000 in your web browser.

4. Click on the `Choose File` button to upload an image from the `./sample-images` folder or any other image that meets the requirements.

5. Click the `Predict` button to process the uploaded image and display the predicted probability of the image containing a number.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please feel free to open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
