#--- Install node dependencies 
FROM node:16.17.0-alpine 
RUN echo "--- Install node dependencies  ---"
WORKDIR /app
COPY package.json ./
RUN npm install 
COPY . /app
EXPOSE 8080
CMD ["npm", "run", "serve"]
