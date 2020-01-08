# SwordFishHTTP
#
#### custom, frond-end only, light-weight HTTP library
current version 0.1.0
# 
#
Provides extremely short and convenient syntax in a form of set of methods for web API based frond-end projects. Suports fetch and xhr, offers handy way of handling onprogress method (spinners, loaders..), comes with built-in loader animating data filds awaiting data.
# 
##### at a current stage SwordFish project is a part of education curve, every input very much welcomme
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
# 
_____________
## .get();
#### fetch data from *url* 
#### returns resopnse data as a promise
#### data handled by .tnen

```javascript
const myVar = new SwordFish;
const api = 'https://jsonplaceholder.typicode.com/posts';

myVar.get(api)
           .then((data) => { _code to handle data_ })
```

##### example:

```javascript
const myVar = new SwordFish;
const api = 'https://jsonplaceholder.typicode.com/users';
const emails = []:

myVar.get(api)
   .then((data) => { 
      data.forEach((obj) => {
           emails.push(obj.email);
           });
      })
```
# 
#### you may handle errors with .catch

```javascript
myVar.get(api)
           .then((data) => { _code to handle data_ })
           .catch((err) => { _code to handle err });
```
# 
 *** DOCUM0ENTATION UNDER CONSTRUCTION ***
 # 
 # 
[contribute to project](http://www.barracudadev.com)
