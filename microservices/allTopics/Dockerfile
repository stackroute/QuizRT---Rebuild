#Pull the latest node image
FROM quizrt/base-image:0.1.0

 # Create app directory

RUN mkdir -p /usr/src/all-topics
WORKDIR /usr/src/all-topics

# Copy and install dependencies
COPY package.json /usr/src/all-topics
RUN npm install --production

# Bundle app source

COPY allTopicsPlugin.js /usr/src/all-topics
COPY allTopicsService.js /usr/src/all-topics



CMD npm start
