#Pull the latest node image
FROM quizrt/base-image:0.1.0


# Create app directory
RUN mkdir -p /usr/src/express-server
WORKDIR /usr/src/express-server

# Copy and install dependencies
COPY package.json /usr/src/express-server

RUN npm install --production

# Bundle app source
COPY index.js /usr/src/express-server

CMD ["npm", "start"]
