#Pull the latest node image
FROM quizrt/base-image:0.1.0


# Create app directory
RUN mkdir -p /usr/src/tournament-section
WORKDIR /usr/src/all-topics

# Copy and install dependencies
COPY package.json /usr/src/tournament-section
RUN npm install --production

# Bundle app source
COPY randTournamentPlugin.js /usr/src/tournament-section
COPY tournamentService.js /usr/src/tournament-section

CMD npm start
