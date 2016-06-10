#Pull the latest node image
FROM quizrt/base-image:0.1.0


# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Copy and install dependencies
 COPY package.json /usr/src/app

# Bundle app source
COPY . /usr/src/app

RUN npm install

RUN npm start
