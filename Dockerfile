# Base image 
#does not work
FROM node:20

# Get the latest version of Playwright
FROM mcr.microsoft.com/playwright:v1.41.0-jammy

# Set the working directory
WORKDIR /volvo

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npx -y playwright@1.41.0 install --with-deps

# Copy the rest of the application files
COPY . .

# Set the entry point for the container
CMD ["npx", "playwright", "test"]