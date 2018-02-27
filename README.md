# Fridge meal

An app made for matching a list of products with a list of recipes. 

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

What things you need to install the software and how to install them

[npm](https://www.npmjs.com/get-npm)/[Yarn](https://yarnpkg.com/fr/docs/install)
, [python3.5](https://www.python.org/downloads/)
, [curl](https://curl.haxx.se/download.html)
, [screen](https://doc.ubuntu-fr.org/screen)

### Installing

back dependencies :

```
pip install -r requirements.txt
```

front dependencies :
```
yarn install (getting dependencies)
```
or
```
npm install (getting dependencies)
```

launch server :
```
yarn build (it launch a bash script for backend and front servers)
```
or
```
npm run build (it launch a bash script for backend and front servers)
```

You can now see the result at http://localhost:8080
The proxy is configured on the port 5000 (if u changed it, u have to change the getterSvc.js)
