# SwordFishHTTP
current version 0.1.0

## custom, frond-end only, light-weight HTTP library

## Setup

### Import SwordFish

[Download SwordFish](http://www.barracudadev.com)

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
* .loader()

## XML Http Request

### .get();
 .get(url) - fetch data from *url* returns resopnse data as a prommise

> `const myVar = new SwordFish`
> `const api = 'https://jsonplaceholder.typicode.com/posts'`

> `myVar.get('api')`

> `.then((data) => { *code to handle data* })`


 *** DOCUMENTATION UNDER CONSTRUCTION ***
