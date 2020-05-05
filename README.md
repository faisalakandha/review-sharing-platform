# Social Review Sharing Network

### System Requirement
1. Docker and docker-compose (Optional)
2. Node.js
3. Git

### Installation: (Follow the steps yo)
1. Open terminal. Type and copy-paste : `git clone https://github.com/faisalakandha/review-sharing-platform.git`
2. cd into review-sharing-platform
3. Open two terminals
5. cd into server folder, type `cp ./.env.example ./.env`<br>
Then type `npm install` and press enter.<br>
6. type `npm run backend` and press enter. 
7. In another terminal cd into client folder. This is our frontend.
8. type `npm install`
9. type `npm start` 
10. Enjoy. 

Viola ! You got your site up and running.
Make sure you keep open the two terminals. 

### Building with Docker:
<p>Building the docker containers manually:<br> Sometimes you might want to build all of the docker containers manually. Because that would give the oppourtunity to troubleshoot the platform better. So, let's build the client container first</p><br>
1. cd into client folder and type the following:<br>
`docker build ./ -t revusha-client` .<br>
2. After the image is built, you have to run the docker container using the following command:<br>
` docker run -itd --rm -v ${PWD}:/app  -v /app/node_modules -p 3001:3000 revusha-client`

Visit: http://localhost:3000/ <br> <br>
Made with Love and Javascript <3
