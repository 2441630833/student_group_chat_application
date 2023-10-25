# Use an official Node.js runtime as a base image
FROM node:20.5-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy the entire application source to the container
COPY . /app

RUN npm install -S faiss-node

# Install application dependencies inside the container
RUN npm install

# Expose port 30000 since your app runs on this port
EXPOSE 30000
EXPOSE 8082

# The command to run your application when the container starts
CMD [ "node", "index.js" ]
