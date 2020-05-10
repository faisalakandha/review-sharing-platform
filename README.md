# Social Review Sharing Network
<center><img src="https://raw.githubusercontent.com/faisalakandha/review-sharing-platform/master/client/src/graphics/android-chrome-512x512.png" height="212px" width="212px" /> </center>

### System Requirement
1. Docker and docker-compose (Optional)
2. Node.js
3. Git

### Tech Stack:
1. NodeJs
2. ExpressJs
3. MongoDB
4. MongoDB Atlas
5. React
6. React Native
7. Docker and docker-compose
 
### Installation: (Follow the steps yo)
1. Open terminal. Type and copy-paste : `git clone https://github.com/faisalakandha/review-sharing-platform.git`
2. Open two terminals and cd into review-sharing-platform in both of them. 
3. Open two terminals. In one terminal cd into client folder and also run `npm install`
4. In another terminal Run `npm install` in the root folder.  
5. After that come back to the root folder and run `npm run dev`. You should see both front end and backend are running. 
6. Enjoy.<br> 
Viola ! You got your site up and running.
### Building with Docker:
<p>Building the docker containers manually:<br> Sometimes you might want to build all of the docker containers manually. Because that would give the oppourtunity to troubleshoot the platform better. So, let's build the client container first</p>
1. cd into client folder and type the following:<br>
`docker build ./ -t revusha-client` .<br>
2. After the image is built, you have to run the docker container using the following command:<br>
`docker run -itd --rm -v ${PWD}:/app  -v /app/node_modules -p 3001:3000 revusha-client`

Visit: http://localhost:3000/ <br> <br>
Made with Love and Javascript <3
