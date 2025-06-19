# Example Dockerfile
FROM node:18

# Set working directory
WORKDIR /usr/src/app

# Copy only package.json and package-lock.json
COPY package*.json ./

# Install dependencies (inside container)
RUN npm install

# Now copy the rest of your code
COPY . .

# Expose service port (e.g., 5010 for SysAdmin Service)
EXPOSE 5010

# # Run DB sync before starting the app
# CMD ["sh", "-c", "npm run sync && npm start"]

# ensure we can run entrypoint .
RUN chmod +x entrypoint.sh

ENTRYPOINT ["./entrypoint.sh"]
