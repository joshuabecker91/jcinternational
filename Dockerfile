# Stage 1: Build Stage, use a smaller base image for building
FROM node:18-alpine as build

# Set the working directory
WORKDIR /app

# Copy only the package.json and package-lock.json to leverage Docker layer caching
COPY package*.json ./

# Install dependencies
RUN npm install --force

# Copy the rest of the application files
COPY . .

# Build the React app
RUN npm run build

# Remove unnecessary files
# RUN rm -rf node_modules && npm prune --production

# Stage 2: Production Stage, use a smaller base image for the final image
FROM nginx:alpine

# Copy NGINX configuration file to set the root directory
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy the built assets from the previous stage
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Command to run the Nginx server
CMD ["nginx", "-g", "daemon off;"]