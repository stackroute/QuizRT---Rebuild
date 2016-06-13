#Pull the latest node image
FROM quizrt/base-image:0.1.0


# Create app directory
RUN mkdir -p /usr/src/common-ui
WORKDIR /usr/src/common-ui

# Copy and install dependencies
COPY package.json /usr/src/common-ui
RUN npm install --production

# Bundle app source
COPY . /usr/src/ common-ui

CMD ["npm", "start"]
