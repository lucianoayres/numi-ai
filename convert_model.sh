#!/bin/bash

# INSTRUCTIONS
# 1. Open a terminal or command prompt and navigate to the directory where the script is saved.
# 2. Make the script executable by running the following command:
# $ chmod +x convert_model.sh
# 3.Run the script by executing the following command:
# $ ./convert_model.sh

# NOTE
# Note: Before running the script, make sure you have TensorFlow.js and its dependencies 
# installed and available in your environment.

# Set the input and output paths
input_model_path="./data/tf-keras-model.h5"
output_model_path="./converted-model"

# Run the TensorFlow.js converter
tensorflowjs_converter --input_format=keras $input_model_path $output_model_path

# Check the exit code to determine if the conversion was successful
if [ $? -eq 0 ]; then
  echo "Model conversion completed successfully."
else
  echo "Model conversion failed."
fi