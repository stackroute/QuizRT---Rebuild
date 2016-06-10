#Pull the latest node image
FROM mhart/alpine-node:6.2.1


# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Copy and install dependencies
RUN apk update
RUN apk add python build-base
RUN npm install seneca seneca-balance-client seneca-mesh
