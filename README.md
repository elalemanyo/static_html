# HTML Starter kit

## Overview

Starter kit for static HTML Project, using [Gulp](http://gulpjs.com) and [Bower](http://bower.io).

Here a good article about Bower: [What’s So Great About Bower? [Chris Coyier]](http://css-tricks.com/whats-great-bower/)

Bower add for the moment Normalize.css and jQuery.

Gulp do:

* SASS tasks
* Concat and minify all css
* Minify images
* Concat and minify all js


## Project Tree

<pre>
static_html
│
├── assets
│   ├── img
│   ├── scripts
│   └── styles 
│		   ├── css
│	   	   └── scss
│	   		 ├── includes
│   		 │	    ├── mixins.scss
│   		 │	    └── variables.scss
│	   		 └── main.scss
│
│
├── public
│     ├── css
│     ├── img
│     ├── scripts
│     └── index.php
│
├── .gitignore
├── .bowerrc
├── bower.json
├── gulpfile.js
├── package.json
├── composer.json
└── composer.lock	
</pre>

##Getting Started

#### 1. Install Bower:

`$ npm install -g bower` 

Bower requires [Node and npm](http://nodejs.org) and [Git](http://git-scm.com).

#### 2. Install all packages:

`$ bower install` 


#### 3. Install gulp globally:

`$ npm install --global gulp` 


#### 4. Install gulp devDependencies:

`$ npm install`

#### 5. Run Composer:

1. Get [Composer](http://getcomposer.org/)
2. Installs the project dependencies `php composer.phar install`

#### 6. Run gulp and start Working:
`$ gulp` 

##Add packages with Bower

`bower install [<options>]`

`bower install <endpoint> [<endpoint> ..] [<options>]`

Endpoints can have multiple forms:

* `<package>`

* `<package>#<version>`

* `<name>=<package>#<version>`     

Where:

* `<package>` is a package URL, physical location or registry name

* `<version>` is a valid range, commit, branch, etc.

* `<name>` is the name it should have locally.
  

__Caution:__ do not forget to add `--save-dev`, save installed packages into the project’s bower.json devDependencies.

##Dependencies

* NodeJS (npm)

* Bower

* Gulp


