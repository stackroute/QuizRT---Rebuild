#Pull the latest node image
FROM quizrt/base-image:0.1.0


# Create app directory
RUN mkdir -p /usr/src/gameplay
WORKDIR /usr/src/gameplay

# Copy and install dependencies
COPY package.json /usr/src/gameplay
RUN npm install --production

# Bundle app source
COPY gameManagerPlugin.js /usr/src/gameplay
COPY gameplayProvisionerPlugin.js /usr/src/gameplay
COPY gameplayProvisionerMicroservice.js /usr/src/gameplay

CMD ["npm", "start"]
