#Pull the latest node image
FROM quizrt/base-image:0.1.0


# Create app directory
RUN mkdir -p /usr/src/my-fav
WORKDIR /usr/src/my-fav

# Copy and install dependencies
COPY package.json /usr/src/my-fav
RUN npm install --production

# Bundle app source
COPY myFavPlugin.js /usr/src/my-fav
COPY myFavService.js /usr/src/my-fav

CMD npm start
