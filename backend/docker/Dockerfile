FROM node:16.17.0-alpine  as builder

WORKDIR /app

COPY ./package.json ./

COPY prisma/schema.prisma ./prisma/

RUN npm install 


#RUN npm run prisma:generate;

#COPY . .

# Expose the port the server listens to
EXPOSE 3542 

CMD ["npx" , "prisma" ,"migrate","dev"]
