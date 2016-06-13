#Pull the latest node image
FROM quizrt/base-image:0.1.0


# Create app directory
RUN mkdir -p /usr/src/base-node
WORKDIR /usr/src/base-node

# Copy and install dependencies
COPY package.json /usr/src/base-node
RUN npm install --production

# Bundle app source
COPY baseMicroservice.js /usr/src/base-node

CMD node baseMicroservice.js
