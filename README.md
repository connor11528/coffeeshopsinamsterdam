coffeeshopsinamsterdam
=====

Angular.js, Node.js, Mongoose, Bootstrap for web app.

Satellizer for authentication.

Beautiful Soup and Python for web scraping

CSS for coffeeshop page lifted from [here](http://preview.byaviators.com/template/superlist/listing-detail.html#)

Star rating from [Stack Overflow](http://stackoverflow.com/questions/23646395/rendering-a-star-rating-system-using-angularjs)/[JSFiddle](http://jsfiddle.net/AhakQ/13/)


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
