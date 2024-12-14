FROM node:17-alpine

# Set a working directory inside the container
WORKDIR /app

# Copy only package.json and package-lock.json first to leverage Docker caching
COPY package.json package-lock.json ./

# Set npm timeout to prevent socket timeout errors
RUN npm config set timeout 600000

# Use a faster npm registry (optional, but recommended in case of slow network issues)
RUN npm config set registry https://registry.npmmirror.com

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Expose the port your app runs on
EXPOSE 3000

# Command to run your app
CMD ["npm", "start"]
