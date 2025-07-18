# Use an official Node.js image as the base image
FROM node:18-alpine AS builder

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy the rest of the application code
COPY . .

# Build the Next.js app
RUN npm run build

# Create a new, smaller stage for running the app
FROM node:18-alpine

# Set the working directory
WORKDIR /app

# Copy only necessary files from the builder stage
COPY --from=builder /app/public public
COPY --from=builder /app/.next .next
COPY --from=builder /app/next.config.ts .
COPY --from=builder /app/package*.json ./

# Install production dependencies only
RUN npm ci --only=production

# Expose the port the app runs on
EXPOSE 3000
EXPOSE 3100

# Start the Next.js production server
CMD ["npm", "start"]