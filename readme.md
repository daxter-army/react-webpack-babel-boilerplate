# react-webpack-babel boilerplate

## 👾 Babel
* Babel is a toolchain that is used to convert ES6+ JS code into backwards compatible versions of JS so that it do not breaks in current as well as in old web browsers.

* **.babelrc :** It is a config file that is used by us to config, which presets to load, which settings to apply on the react application. 

## 🛫 Webpack
* Our browsers do not understand react, they only understand HTML, CSS & JS, here comes the webpack.
* Webpack is code bundler, which converts our React code into plain HTML, CSS, JS so that it can be interpreted by our browsers, and we do not need to modify/upgrade our browsers to run/view our react code.

* **webpack.config.js :** It is file, which contains rules for parsing every type of file you want to include and configurations for the build version of react

### 🏃‍♂️ Run
* To run in development mode
```sh
npm run start
```

* To create build pack for your application
```
npm run build
```

* and then go to http://localhost:3010

### 📂 Directories
* **/dist :** Folder contains the compiled, minified version of react app

* **App.js :** It is the starting point of our application, can start developing from there

**NOTE : If you are starting with your development, you can delete the /dist folder from the directory, can rebuild a updated build version of your application, later.**