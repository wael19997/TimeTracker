#--- Install node dependencies
FROM node:16.17.0-alpine
RUN echo "--- Install node dependencies  ---"
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . /app
# RUN npm add -D prisma
# RUN npm add @prisma/client
RUN npx prisma generate
# RUN npm run prisma generate
EXPOSE 3333
CMD ["npm", "run", "start"]