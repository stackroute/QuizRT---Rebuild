#Pull the latest node image
FROM quizrt/base-image:0.1.0


# Create app directory
RUN mkdir -p /usr/src/all-tournaments
WORKDIR /usr/src/all-topics

# Copy and install dependencies
COPY package.json /usr/src/all-tournaments
RUN npm install --production

# Bundle app source
COPY allTournamentsPlugin.js /usr/src/all-tournaments
COPY allTournamentsService.js /usr/src/all-tournaments

CMD npm start
