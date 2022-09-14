#--- Install node dependencies 
FROM node:16.17.0-alpine
RUN echo "--- Install node dependencies  ---"
WORKDIR /app
COPY package.json ./
RUN npm install 
COPY . /app
RUN npm install @prisma/client
EXPOSE 3333
CMD ["npm", "run", "start"]