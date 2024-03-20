In this assignment, I learned how to better use git as a tool to backup my work.

IP Address to Remote server: http://44.212.167.81/

Domain name: https://shareyourbookshareyourthoughts.click/

Remote shell into server command:  ssh -i [key pair file] ubuntu@[ip address]
                                
                                ssh -i CS260\$Reviewer260$.pem ubuntu@44.212.167.81
                                
                                ls -l

To make changes in security for a secure connection, edit the Caddyfile file -- use https now

link to codePen code for HTML, CSS, and JavaScript practice https://codepen.io/Lily-Hill/pen/NWJXemp

Deployment: use git bash not powershell

 ./deployFiles.sh -k ~/CS260/\$Reviewer260\$.pem -h shareyourbookshareyourthoughts.click -s startup

 ./deployService.sh -k ~/CS260/\$Reviewer260\$.pem -h shareyourbookshareyourthoughts.click -s startup

 chmod 600 $Reviewer260$.pem     ------- change access for public 
 


 node.js

1. Move all the previous deliverable code files (_.html, _.js, *.css, favicon.ico, and assets) into a sub-directory named public. We will use the HTTP Node.js based service to host the frontend application files. This is done with the static file middleware that we will add our service index.js.

2. Within the project directory run npm init -y. This configures the directory to work with node.js.

3. Modify or create .gitignore to ignore node_modules.

4. Install the Express package by running npm install express. This will write the Express package dependency in the package.json file and install all the Express code to the node_modules directory.

5. Create a file named index.js in the root of the project. This is the entry point that node.js will call when you run your web service.

6. to debug, hit f5 while looking at index.js



