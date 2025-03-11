# Node.js image for building
FROM node:alpine AS builder

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install all dependencies
RUN npm install

# Copy the entire project
COPY . .

# Build the Vite project
RUN npm run build

# Use Nginx image to serve the built files
FROM nginx:alpine

# Copy built files from the builder stage to Nginx's HTML directory
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
