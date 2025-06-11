# Multi-stage Dockerfile for SvelteKit frontend

# Build stage
FROM node:22-alpine AS builder
WORKDIR /app

# Copy package files
COPY package*.json ./
RUN npm ci --only=production

# Copy source code
COPY . .

# Generate protocol buffers
RUN npm run generate-proto

# Build the application
RUN npm run build

# Production stage - nginx to serve static files
FROM nginx:stable-alpine
COPY --from=builder /app/build /usr/share/nginx/html

# Copy custom nginx configuration for SPA
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]