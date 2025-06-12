# Multi-stage Dockerfile for SvelteKit frontend

# Build stage
FROM node:22-alpine AS builder

RUN apk add --no-cache git

WORKDIR /app

# Copy package files
COPY package*.json ./
RUN npm ci

# Copy source code
COPY . .

# Generate protocol buffers
RUN npm run generate-proto

# Build the application
RUN npm run build

# Production stage - just copy the built files
FROM alpine:latest
COPY --from=builder /app/build /app/build
WORKDIR /app