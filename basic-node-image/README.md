<h3>How to create docker node containers and images</h3>

<p>
    1. Create <b>Dockerfile</b> and assign environment.
    <ul>
       <li><p>FROM is where image from</p></li>
       <li><p>WORKDIR to create working directory in docker</p></li>
       <li><p>COPY to move <u>package.json</u> from local to /app on docker</p></li>
       <li><p>RUN to tell docker to run the command (Install node dependency)</p></li>
       <li><p>COPY to move all code from local to /app on docker</p></li>
       <li>
       <p>CMD to tell docker to start this command after built</p>
       </li>
    </ul>
</p>

```
FROM node@16.6.0
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
CMD ["node", "index.js"]
```

<br />
<p>2. Run build command on terminal to create docker image.</p>

```
docker build -t node:16.6.0 <Dockerfile_located_path>
```

<br />
<p>3. Run images command to check docker image and copy <b>ImageID</b></p>

```
docker images
```

<br />
<p>4. Create docker container
<ul>
<li>--name is container name</li>
<li>
-p local port : docker port</li>
<li>
--interactive run with docker attach mode</li></ul></p>

```
docker run --name basic-node-container -p 3000:3000 --interactive <ImageID>
```

<br />
<br />

- check all image ```docker images```
- check running container ```docker ps```
- check all container ```docker ps --all```
- start docker ```docker start <containerID OR container name>```
- stop docker ```docker stop <containerID> OR <container name>```
- .dockerignore file working like .gitignore