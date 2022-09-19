#--- Install node dependencies
FROM node:16.17.0-alpine
RUN echo "--- Install node dependencies  ---"
WORKDIR /app
COPY package*.json ./
COPY prisma/schema.prisma ./prisma/
RUN npm install
ARG POSTGRESQL_URL
RUN npx prisma generate
COPY . .
EXPOSE 3333
CMD ["npm", "run", "start"]