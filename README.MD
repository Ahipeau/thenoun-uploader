# thenoun uploader
A tool that helps you upload to Wikimedia Commons icons that were previously downloaded from [The Noun Project](https://thenounproject.com).

## Description

On The Noun Project icon page url follow a certain pattern. Eg: https://thenounproject.com/icon/145926 with the digit part of the url being the unique ID of the icon. The page contains description such as author name, author url, license, etc.

`thenoun uploader` is a tool that helps people upload to Commons icons previously downloaded from The Noun Project. The tool should allow to upload one or many icons as needed whilst making sure the upload adds relevant information to the file on Commons. 

When downloaded from The Noun Project, icons in SVG format or PNG have file names with the following a certain pattern. Eg:  `noun_145926.svg`

## Requirements
You need to have `npm` installed. You can get npm [from here](https://www.npmjs.com/get-npm)
## Install

``` bash
# clone the repository
git clone https://github.com/samuelguebo/thenoun-uploader.git

# install dependencies
npm install
```

## Start the tool

``` bash
# instead, you can specify wich script to run
npm start
```

## Development stages (List of todos)
1. Set up a basic Nodejs server using Express
    - Add a minimalist HTML5 layout with an upload form or area, maybe use [awmd stats layout](https://github.com/ch3nkula/awmd-stats)
2. Implement file upload in form and validation logic
    - Add drag and drop feature for 1 or more images
    - Extract image ID from its title
    - Preliminary validation on drag and drop: check title and file format.
    - Second validation: make sure image does not already exist on Commons
    - Third licence check: if image has CC BY-SA credit within the file SVG file, remove it as the info added to the icon during upload already includes credit: name, author, link, etc. 
3. Fetch details for each image, based on its ID, by querying thenounproject.com (eg:https://thenounproject.com/icon/145926)
4. Implement image upload to Commons
    - Upload to Commons
    - Notify user regarding the upload status
    - Add necessary description to image, similarly to [what wikibot-nodejs used to do](https://github.com/samuelguebo/wikibot-nodejs/blob/47a425102dfbdb0f446c7ca1d8f566109a2d479c/upload-from-thenoun.js#L158-L179).
    - Notify user regarding the description update process
    - Notify user regarding the final upload url on Commons
5. Allow user to start another process
6. Unit tests with [Mocha](https://github.com/mochajs/mocha) or [Jazmine](https://github.com/jasmine/jasmine)


## links
* File uploading in Node: https://coligo.io/building-ajax-file-uploader-with-node/
* Image uploading to Commons: https://github.com/samuelguebo/wikibot-nodejs
* [File pond](https://github.com/pqina/jquery-filepond): a JavaScript library that can upload anything you throw at it

## Coding convention
This project will use the [Airbnb javascript style guide](https://github.com/nmussy/javascript-style-guide)
# Contributors

* [Samuel Guébo](https://github.com/samuelguebo) - Project Lead
* [Mukaram Ahipeau Salimonu](https://github.com/Ahipeau) - Contributor
* [Botche Philippe](https://github.com/philbotche) - Contributor
* [Add-your-name](your-url) - Contributor

