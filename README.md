# HTML Starter kit

## Overview

Starter kit for static HTML Project, using Gulp and Bower.

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
├── config
│     ├── .bowerrc
│     ├── bower.json
│     ├── gulpfile.j
│     └── package.json
│
├── public
│   	├── css
│   	├── img
│   	└── scripts
│
└── .gitignore
</pre>

##Getting Started

#### 1. Install Bower:

`npm install -g bower` 

Bower requires [Node and npm](http://nodejs.org) and [Git](http://git-scm.com).

#### 2. Install all packages:

`bower install` 


#### 3. Install gulp globally:

`npm install --global gulp` 


#### 4. Install gulp devDependencies:

`cd config` 

`npm install` 

#### 5. Run gulp and start Working:
`gulp` 

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


