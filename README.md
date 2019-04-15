# Dictionary-App
This is a simple English dictionary web application.  I designed this application to gain experience making 
a RESTful API, along with gaining experience using Nginx, Node.js, Express.js, MongoDB, Mongoose, AWS EC2, and ended 
up learning quite a bit more to say the least.  The dictionary is based on this repo [matthewreagan/WebstersEnglishDictionary](https://github.com/matthewreagan/WebstersEnglishDictionary) which contains 
Webster's Unabridged English Dictionary (from the Gutenberg Project, compiled August 22, 2009).

<br />

# Contents
* [Demo Image](https://github.com/T-travis/Dictionary-App/blob/master/README.md#demo-image)
* [Architecture and Api Design](https://github.com/T-travis/Dictionary-App/blob/master/README.md#architecture-and-api-design)
* [Built With](https://github.com/T-travis/Dictionary-App/blob/master/README.md#built-with)
* [Steps to Deploy](https://github.com/T-travis/Dictionary-App/blob/master/README.md#steps-to-deploy)

<br />

# Demo Image
![demo](https://github.com/T-travis/Dictionary-App/blob/master/images/demo.png)

<br />

# Architecture and Api Design
![architecture](https://github.com/T-travis/Dictionary-App/blob/master/images/dictionary-app.png)
![api](https://github.com/T-travis/Dictionary-App/blob/master/images/api.png)

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
2) update the EC2 <br />
   `sudo apt update` <br />
   `sudo apt upgrade`
3) install Nginx <br />
   `sudo apt install nginx`
4) check install of nginx and start it <br />
   `sudo systemctl status nginx` <br />
   `sudo systemctl start nginx`
5) we also want nginx to start on startup <br />
   `sudo systemctl enable nginx`
6) install node.js and npm <br />
   `curl -sL https://deb.nodesource.com/setup_11.x | sudo -E bash -`<br />
   `sudo apt-get install -y nodejs` <br />
   I recommend installing nodejs-legacy as well (this just contains the symlink so you can use the node command,
   see this link: [stackoverflow](https://stackoverflow.com/questions/20057790/what-are-the-differences-between-node-js-and-node))
   `sudo apt install nodejs-legacy` <br />
   `sudo apt install npm`
   and check their install: <br />
   `node -v` <br />
   `nmp -v`
7) setup Nginx to serve static html or reverse proxy for node application

*** in progress

