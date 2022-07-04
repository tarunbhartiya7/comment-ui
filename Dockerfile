FROM node:lts-alpine3.15
WORKDIR /app
COPY package.json ./
COPY package-lock.json ./
RUN npm i
COPY ./ ./
CMD ["npm", "run", "start"]
EXPOSE 3000