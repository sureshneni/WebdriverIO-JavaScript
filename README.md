# WebdriverIO-Javascript
This project demonstrates on how to use WebdriverIO with Javascript in automation

*************************************************************************************



1.	Create workspace folder 

2.	Open that folder in VSCode (If it prompts for any config file -  click on Don’t save)

3.	In the VSCode terminal  npm init
	NOTE: And provide the below details, but all these details are optional so we can click on ENTER for every option either providing input or not
	
	package name: (webdriverio_javascript) com.app.auto
	version: (1.0.0)
	description:
	entry point: (index.js)
	test command:
	git repository:
	keywords:
	author: Suresh Babu
	license: (ISC)

	Whenever we click ENTER, it will create package.json file and add above details to it.
	
	About to write to C:\code\WebdriverIO_JS\WebdriverIO_Javascript\package.json:
	{
 	 "name": "com.qa.auto",
  	"version": "1.0.0",
  	"description": "This is WebdriverIO project",
  	"main": "index.js",
  	"scripts": {
   		 "test": "echo \"Error: no test specified\" && exit 1"
  	},
 	 "author": "Suresh Babu",
  	"license": "ISC"
	}
	Is this OK? (yes) yes   


4: 
	Run the below command to add WebdriverIO dependencies and create package-lock.json file
	C:\code\WebdriverIO_JS\WebdriverIO_Javascript> npm install webdriverio --save-dev
	#To make sure above step is successful, we can check below dependency in package.json file been added.
	//This will download the latest webdriverio
	"devDependencies": {
   		 "webdriverio": "^6.4.1"
  	}


Step 5: 
	//Create wdio config file
	C:\code\WebdriverIO_JS\WebdriverIO_Javascript> npm install @wdio/cli

	C:\code\WebdriverIO_JS\WebdriverIO_Javascript> .\node_modules\.bin\wdio config

	Just fallow the instructions, it will create wdio config file for us.

	Step 6 : 
	//Install Chai 
	npm install chai --save-dev

	npm install chai-webdriverio --save-dev

	npm install local-runner --save-dev



Erros encountered while setup/run the project: Not sure for project setup on everytime we gets this issue.

	PS C:\code\WebdriverIO_JS> npm run test

	> webdriverio_js@1.0.0 test C:\code\WebdriverIO_JS
	> node ./node_modules/.bin/wdio ./wdio.conf.js

	C:\code\WebdriverIO_JS\node_modules\.bin\wdio:2
	basedir=$(dirname "$(echo "$0" | sed -e 's,\\,/,g')")
          ^^^^^^^

	SyntaxError: missing ) after argument list
    	at wrapSafe (internal/modules/cjs/loader.js:1054:16)       
    	at Module._compile (internal/modules/cjs/loader.js:1102:27)


Solution:
In wdio.conf.js file:

Previous:
"scripts": {
    "test": "node ./node_modules/.bin/wdio ./wdio.conf.js"
  },

Updated: Just remove ‘node'

"scripts": {
    "test": "node_modules/.bin/wdio ./wdio.conf.js"
  },


