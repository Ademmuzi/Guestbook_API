FROM node:15
WORKDIR /app
COPY . .
ARG NODE_ENV
WORKDIR /app/api
RUN npm install
EXPOSE 3000
CMD ["node", "index"]