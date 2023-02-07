# Pull image from the provider
FROM node:16.16.0

# Setup working directory on docker
WORKDIR /app

# Copy only package.json because when we change code we don't have to reinstall dependencies we can use cache in docker
COPY package.json .

# Will execute when image was create
RUN npm install

# Copy all the code from the local into working directory on docker
COPY . .

# Gave a port for docker application but it doesn't working just a best practice 
EXPOSE 3000

# Will execute when container starts
CMD ["node", "index.js"]
