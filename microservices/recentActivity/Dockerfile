#Pull the latest node image
FROM quizrt/base-image:0.1.0


# Create app directory
RUN mkdir -p /usr/src/recent-activity
WORKDIR /usr/src/recent-activity

# Copy and install dependencies
COPY package.json /usr/src/recent-activity
RUN npm install --production

# Bundle app source
COPY recentPagePlugin.js /usr/src/recent-activity
COPY recentPageService.js /usr/src/recent-activity

CMD npm start
