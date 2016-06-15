#Pull the latest node image
FROM quizrt/base-image:0.1.0


# Create app directory
RUN mkdir -p /usr/src/account-info
WORKDIR /usr/src/account-info

# Copy and install dependencies
COPY package.json /usr/src/account-info
RUN npm install --production

# Bundle app source
COPY accountInfoPlugin.js /usr/src/account-info
COPY accountInfoService.js /usr/src/account-info

CMD npm start
