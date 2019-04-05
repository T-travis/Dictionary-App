# Dictionary-App
What is this app?  A simple web based English dictionary application.  Why bother making such a simple application?
I designed this application to gain experience making a RESTful API, along with gaining experience using Nginx, Express.js,
MongoDB, Mongoose, AWS EC2, and ended up learning quite a bit more to say the least.  The dictionary is based on this repo [matthewreagan/WebstersEnglishDictionary](https://github.com/matthewreagan/WebstersEnglishDictionary) 
which contains Webster's Unabridged English Dictionary (from the Gutenberg Project, compiled August 22, 2009).

<br />

# Contents
* [Demo Image](https://github.com/T-travis/Dictionary-App/blob/master/README.md#demo-image)
* [Architecture and Api Design](https://github.com/T-travis/Dictionary-App/blob/master/README.md#architecture-and-api-design)
* [Built With](https://github.com/T-travis/Dictionary-App/blob/master/README.md#built-with)
* [Steps to Deploy](https://github.com/T-travis/Dictionary-App/blob/master/README.md#steps-to-deploy)

<br />

# Demo Image
![demo](https://github.com/T-travis/Dictionary-App/blob/master/www/images/demo.png)

<br />

# Architecture and Api Design
![architecture](https://github.com/T-travis/Dictionary-App/blob/master/www/images/dictionary-app.png)
![api](https://github.com/T-travis/Dictionary-App/blob/master/www/images/api.png)

<br />

# Built With
### Front-End             
* JavaScript              
* Materialize             
* HTML                    
* CSS                     
* Axios.js                  

### Back-End
* Node.js
* Express.js
* Nginx
* MongoDB
* Mongoose

<br />

# Steps to Deploy 
1) spin up an Ubuntu EC2 instance
2) update the EC2
   `sudo apt update`
   `sudo apt upgrade`
3) install Nginx
   `sudo apt install nginx`
4) check install of nginx and start it
   `sudo systemctl status nginx`
   `sudo systemctl start nginx`
5) we also want nginx to start on startup
   `sudo systemctl enable nginx`
6) install node.js and npm
   `sudo apt install nodejs`
   I recommend installing nodejs-legacy as well (this just contains the symlink so you can use the node command,
   see this link: [stackoverflow](https://stackoverflow.com/questions/20057790/what-are-the-differences-between-node-js-and-node))
   `sudo apt install nodejs-legacy`
   `sudo apt install npm`
   and check their install:
   `node -v`
   `nmp -v`
   `



