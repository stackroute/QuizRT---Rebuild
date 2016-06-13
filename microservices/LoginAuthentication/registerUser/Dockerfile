#Pull the latest node image
FROM quizrt/base-image:0.1.0


# Create app directory
RUN mkdir -p /usr/src/register-user
WORKDIR /usr/src/register-user

# Copy and install dependencies
COPY package.json /usr/src/register-user
RUN npm install --production

# Bundle app source
COPY registerUser.js /usr/src/register-user
COPY registerUserMicroservice.js /usr/src/register-user

CMD npm start