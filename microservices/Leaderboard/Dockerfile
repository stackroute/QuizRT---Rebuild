#Pull the latest node image
FROM quizrt/base-image:0.1.0


# Create app directory
RUN mkdir -p /usr/src/leaderboard
WORKDIR /usr/src/leaderboard

# Copy and install dependencies
COPY package.json /usr/src/leaderboard
RUN npm install --production

# Bundle app source
COPY leaderboardPlugin.js /usr/src/leaderboard
COPY leaderMicroservice.js /usr/src/leaderboard

CMD npm start 
