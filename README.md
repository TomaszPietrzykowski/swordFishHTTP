# SwordFishHTTP
current version 0.1.0

## custom, frond-end only, light-weight HTTP library

## Setup

[Download SwordFish](http://www.barracudadev.com)

### Import SwordFish

> `<script>sworfish.min.js</script>`
> `<script>myApp.js</script>`

### or Use CDN

> `<script src="https://www.barracudadev.com/sworfish/0.1.0/swordfish.min.js"></script>`

### Initialize SwordFish

> const yourVar = new SwordFish;

## Availaible methods
* .get()
* .getSome()
* .getRaw()
* .getProgress()
* .getKeys()
* .post()
* .put()
* .patch()
* .del()
* *built-in loader function .loader()

## XML Http Request

### .get();
 .get(url, fn) - fetch data from url and handle response with callback - fn;

 yourVar.get('https://jsonplaceholder.typicode.com/posts', handleResponse);

 *** DOCUMENTATION UNDER CONSTRUCTION ***
