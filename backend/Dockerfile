#--- Install node dependencies
FROM node:16.17.0-alpine
RUN echo "--- Install node dependencies  ---"
WORKDIR /app
COPY package*.json ./
COPY prisma/schema.prisma ./prisma/
RUN npm install

RUN npm add -D prisma
RUN npm add @prisma/client
RUN npx prisma generate
# RUN npx prisma migrate dev 
# RUN npx prisma migrate dev --name migrationdata
COPY . .
EXPOSE 3333
CMD ["npm", "run", "start"]