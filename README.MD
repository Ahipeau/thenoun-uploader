# thenoun uploader
A tool that hepls you upload to Wikimedia Commons icons that were previously downloaded from The Noun Project. 

## Description

On The Noun Project icon page url follow a certain patter. Eg: https://thenounproject.com/icon/145926 with the digit part of the url being the unique ID of the icon. The page contains description such as author name, author url, license, etc.

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

## Todo
* Allow users to to upload one or many files
* Extract image ID from its title
* Remove unncessary  CC BY-SA credit within the file SVG file as the info added to the icon during upload already includes credit: name, author, link, etc. 
* Fetch details for each image, based on its ID, by querying thenounproject.com (eg:https://thenounproject.com/icon/145926)
* Upload image to Commons
* Add necessary info to image, similarly to [what wikibot-nodejs used to do](https://github.com/samuelguebo/wikibot-nodejs/blob/47a425102dfbdb0f446c7ca1d8f566109a2d479c/upload-from-thenoun.js#L158-L179).

## links
* File uploading in Node: https://coligo.io/building-ajax-file-uploader-with-node/
* Image uploading to Commons: https://github.com/samuelguebo/wikibot-nodejs

# Contributors

* [Samuel Guébo](https://github.com/samuelguebo) - Project Lead
* [Derick Alangi](https://github.com/ch3nkula) - Supporter