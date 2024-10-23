# Stage 1: Build the application
FROM node:20-alpine AS build

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and yarn.lock to the container
COPY package.json yarn.lock ./

# Install app dependencies using yarn
RUN yarn install --frozen-lockfile

# Copy the rest of the application code to the container
COPY . .

# Build the Next.js app
RUN yarn build

# Stage 2: Create the production image
FROM node:20-alpine AS production

# Set the working directory in the container
WORKDIR /app

# Copy only the production-ready files from the previous stage
COPY --from=build /app/package.json /app/yarn.lock ./
COPY --from=build /app/.next ./.next
COPY --from=build /app/public ./public
COPY --from=build /app/node_modules ./node_modules

# Expose the port that the app will run on
EXPOSE 3030

# Start the Next.js app using yarn
CMD ["yarn", "run", "start-prd"]
