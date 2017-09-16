
BOTL Code
--

# Prerequisites
Please download and install Node JS and NPM.The instructions will vary based on OS.
- For MacOS, Please follow the instructions [here](http://blog.teamtreehouse.com/install-node-js-npm-mac)
- For Windows, please follow the instructions [here](http://blog.teamtreehouse.com/install-node-js-npm-windows)
- 

# Getting and installing the project
- Click the 'Clone or Download' green coloured button above
- Unarchive to a directory
- Open up terminal or cmd (if on windows) in the new directory
- Type the following commands

`
npm i -g bower
npm i & bower install
`

# Running the project
Once all packages are installed, use `gulp serve` to open the project on localhost

# Building & Deploying
To deploy the site to a server, like Amazon S3, you will need to build the project.To deploy this site you will need a file called credentials.json in the project root directory.

This file will have the following content:
`
{ 
    "accessKeyId": "<your s3 access id>", 
    "secretAccessKey": "<your s3 access key>", 
    "region": "us-east-1" 
}
`

- To build the project and deploy to your test site, type `npm run stage`
- To build the project and deploy to live site, type `npm run prod`
- To only build the project use `gulp`
- To only deploy the contents of `dist/` folder, type `gulp deploytest` or `gulp deployprod` as the case may be

# Changing the HTML content
- To change the HTML content, use an editor like vim, sublime text or textmate. Please ensure that no unnecessary use of tab / spaces are there. All HTML related changes are to be made in the files in the app/includes directory.
These files are PUG files, and you will need to learn this language.
- Scripts can be found in the `scripts/` folder
- Styles in the `styles/` folder

# Author Info
This code was developed for Meso Design Works LLP by Blue Cheese Foods Pvt. Ltd.