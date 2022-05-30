FROM node:14.15.0
WORKDIR /app
COPY ["package.json", "package-lock.json", "./"]
RUN npm install && npm audit fix
COPY . .
EXPOSE 80
CMD ["npm", "start"]
