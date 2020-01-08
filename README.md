# SwordFishHTTP
#
#### custom, frond-end only, light-weight HTTP library
current version 0.1.0
# 
#
______________
## Setup

### Import SwordFish

Download minified file localy:
[Download SwordFish](http://www.barracudadev.com)

Paste reference above your scripting file:
```javascript
<script> sworfish.min.js </script>
<script> myApp.js </script>
```

### or Use CDN

```javascript
<script src="https://www.barracudadev.com/sworfish/0.1.0/swordfish.min.js"></script>
```
# 
### Initialize SwordFish

```javascript
const yourVar = new SwordFish;
```
# 
# 
# 
___________
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
#
### .get();
 .get(url) - fetch data from *url* returns resopnse data as a promise

```javascript
const myVar = new SwordFish;
const api = 'https://jsonplaceholder.typicode.com/posts';

myVar.get('api')`
    .then((data) => { _code to handle data_ })
```
# 
# 
 *** DOCUMENTATION UNDER CONSTRUCTION ***
 # 
 # 
[contribute to project](http://www.barracudadev.com)
