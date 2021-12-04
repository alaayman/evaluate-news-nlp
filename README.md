# Project evaluate news NLP

The goal of this project is to get the sentiment from (meaningcloud.com):

using

- Webpack
- Sass styles
- Webpack Loaders and Plugins
- Service workers
- Using APIs and creating requests to external urls

## Getting started

download or clone repo from github

`cd` into your new folder and run:

- `npm install`

## Setting up the API

### Step 1: Signup for an API key

go to <https://www.meaningcloud.com/developer/apis> and create an account to get api key

### Step 2: Environment Variables

- [ ] dotenv is a dependency in the project if you npm install then you have it
- [ ] Create a new `.env` file in the root of your project
- [ ] Go to your .gitignore file and add `.env` - this will make sure that we don't push our environment variables to Github!
- [ ] Fill the .env file with your API keys like this:

```
API_KEY=**************************
```

## dependencies

I used the latest version of all dependencies

"dependencies": {
"axios": "^0.24.0",
"body-parser": "^1.19.0",
"cors": "^2.8.5",
"dotenv": "^10.0.0",
"express": "^4.17.1",
"webpack": "^5.64.4",
"webpack-cli": "^4.9.1",
"workbox-webpack-plugin": "^6.4.2"
},
"devDependencies": {
"@babel/core": "^7.16.0",
"@babel/preset-env": "^7.16.4",
"babel-loader": "^8.2.3",
"clean-webpack-plugin": "^4.0.0",
"css-loader": "^6.5.1",
"css-minimizer-webpack-plugin": "^3.2.0",
"html-webpack-plugin": "^5.5.0",
"jest": "^27.4.3",
"mini-css-extract-plugin": "^2.4.5",
"node-sass": "^6.0.1",
"nodemon": "^2.0.15",
"sass-loader": "^12.3.0",
"style-loader": "^3.3.1",
"terser-webpack-plugin": "^5.2.5",
"webpack-bundle-analyzer": "^4.5.0",
"webpack-dev-server": "^4.6.0"
}

I used "css-minimizer-webpack-plugin" instead of "optimize-css-assets-webpack-plugin" because it was deprecated and only work with webpack 4

## How to run

run npm start to start the server at port 3000
then run npm run build-prod to create the dist folder
In your browser open <http://localhost:3000>
the app will start and you can enter the url to the page to be processed
You can use npm run build-dev to start the development environment on <http://localhost:8080>

## Credits

I used guidance and ideas from :

- <https://udacity.com>
- <https://developer.mozilla.org>
- <https://www.w3schools.com>
- <https://developers.google.com/web/tools/workbox>
- <https://webpack.js.org/>
- <https://webpack.js.org/>
- <https://jestjs.io/>
  and a lot more

  Watched a lot of videos and searched a lot all over the web it was a nice experience

Thank you all for helping :smile:
