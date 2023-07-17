FROM python:3.9

WORKDIR /app

# Copy the shell script to the working directory
COPY scripts/convert_model.sh /app/

# Set execute permissions for the shell script
RUN chmod +x /app/convert_model.sh

# Install tensorflowjs and create a virtual environment
RUN python3 -m venv myenv
RUN /bin/bash -c "source myenv/bin/activate && pip install --upgrade pip && pip install tensorflowjs --upgrade"

# Set the entry point to execute the shell script
ENTRYPOINT ["/app/convert_model.sh"]
