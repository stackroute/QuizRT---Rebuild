#Pull the latest node image
FROM quizrt/base-image:0.1.0

# Create app directory
RUN mkdir -p /usr/src/express-server/secrets
WORKDIR /usr/src/express-server

# Copy and install dependencies
COPY rest-server/package.json /usr/src/express-server
RUN npm install --production

# Bundle app source
COPY rest-server/index.js /usr/src/express-server

COPY rest-server/gameplayMiddlewarePlugin.js /usr/src/express-server

COPY rest-server/secrets/* /usr/src/express-server/secrets/

# Copy Static files
COPY common-ui /usr/src/common-ui/

CMD ["npm", "start"]
