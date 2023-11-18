FROM node:18-alpine
WORKDIR /rentals-v2/
COPY public/ /rentals-v2/public
COPY src/ /rentals-v2/src
COPY package.json /rentals-v2/
RUN npm install
CMD ["npm", "start"]