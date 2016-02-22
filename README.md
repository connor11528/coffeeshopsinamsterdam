coffeeshopsinamsterdam
=====

Angular.js, Node.js, Mongoose, Bootstrap for web app.

Satellizer for authentication.

Beautiful Soup and Python for web scraping

Tutorial thus far: https://www.gitbook.com/book/cleechtech/tutorials/edit#/edit/master/zomato_api.md

### Getting started
```
$ git clone <this_repo_url>
$ cd coffeeshopsinamsterdam
$ npm install
$ nodemon server
```

### Deploy to Heroku
```
heroku create <app_name>
heroku config:set NODE_ENV=production
heroku addons:create mongolab:sandbox 
heroku config | grep MONGOLAB_URI
git push heroku master
heroku ps:scale web=1
```
