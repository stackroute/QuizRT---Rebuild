#Pull the latest node image
FROM quizrt/base-image:0.1.0


# Create app directory
RUN mkdir -p /usr/src/mostpopular-topics
WORKDIR /usr/src/mostpopular-topics

# Copy and install dependencies
COPY package.json /usr/src/mostpopular-topics
RUN npm install --production

# Bundle app source
COPY mostPopularTopicPlugin.js /usr/src/mostpopular-topics
COPY popularTopicservice.js /usr/src/mostpopular-topics

CMD npm start
