Basic React Boilerplate
====================

Problem: You want to use [React JSX](http://facebook.github.io/react) without JSXTransformer.js
---------------------

You've gone through the tutorial and you have a fair amount of knowledge about the react components. But now you want to start a new project that is production ready so that means a set-up without JSXTransformer. 

You need to get rid of this message:

> You are using the in-browser JSX transformer. Be sure to precompile your JSX for production - http://facebook.github.io/react/docs/tooling-integration.html#jsx" JSXTransformer.js:314:0

### Solution: an automated build tool that *compiles your jsx files into a single js file

<i>*compiles from jsx to plain js</i>

Please take a look at the html boilerplate below:

```
<!DOCTYPE html>
<html>
<head>
  <title></title>
</head>
<body>
  <div id="app"></div>
  <script src="js/react.min.js"></script>
  <script src="js/main.js"></script>
</body>
</html>
```

This boilerplate code html has only two javascript files 

1. The minified react library 

	```<script src="js/react.min.js"></script>```
2. Your entire react view inside the ```components/``` folder compiled into one js file.
	```<script src="js/main.js"></script>```

The folder structure is bare minimum and it has only two folders and two files.

```

rootfolder
   \--app
      \--components
         \--Child.js
      main.js
   \--js

```
The ```components/``` folder is where your React components will be located and ```app/main.js``` is where the main ```React.render()``` is called.

#### Installation
I assume that you already have installed npm and gulp. 

change the current directory to your nginx or apache document root

```$ cd <document root>``` 

create a new folder

```$ mkdir yourprojectname ```

clone this repository

```$ git clone git@github.com:jedt/basic-react-boilerplate.git .```

run npm install to install the required dependencies

```$ npm install```

After the dependencies finished downloading run gulp install

```$ gulp install```

Run gulp browserify - this will initiate a running process that checks the `components/` folder and if there are changes it recompiles the main js file instantly

```$ gulp browserify```

open your browser and enter the url pointing to the index.html page that you used above. (ex. http://localhost/yourprojectname/index.html)

the page should show this text

```
This is the parent
test and this is the Joe.
```

to test the compiler modify the file below and refresh your browser:

```app/components/Child.js```

To do:
- Flux architecture