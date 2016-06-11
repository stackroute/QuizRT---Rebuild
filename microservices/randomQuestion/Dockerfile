#Pull the latest node image
FROM quizrt/base-image:0.1.0


# Create app directory
RUN mkdir -p /usr/src/random-question
WORKDIR /usr/src/random-question

# Copy and install dependencies
COPY package.json /usr/src/random-question
RUN npm install --production

# Bundle app source
COPY randomQuestionPlugin.js /usr/src/random-question
COPY randomQuestionService.js /usr/src/random-question

CMD npm start
