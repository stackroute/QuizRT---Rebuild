#Pull the latest node image
FROM quizrt/base-image:0.1.0


# Create app directory
RUN mkdir -p /usr/src/verify-token
WORKDIR /usr/src/verify-token

# Copy and install dependencies
COPY package.json /usr/src/verify-token
RUN npm install --production

# Bundle app source
COPY verifyToken.js /usr/src/verify-token
COPY verifyTokenMicroservice.js /usr/src/verify-token

CMD npm start