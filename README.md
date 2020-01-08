# SwordFishHTTP
#
#### custom, frond-end only, light-weight HTTP library
current version 0.1.0
# 
#
Provides short and convenient syntax in a form of set of methods for web API based projects. Supports fetch and xhr, offers handy way of handling onprogress method (spinners, loaders..), comes with built-in loader animating data filds awaiting data.
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
* .getXHR()
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
# READ RESOURCE METHODS
_____________
# 
# .get();
#### fetch data from *url* 
#### takes one parameter - API url (type: string)
#### returns response data as a promise
#### data handled by __.then__

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
#### you may handle errors with __.catch__

```javascript
myVar.get(api)
           .then((data) => { _code to handle data_ })
           .catch((err) => { _code to handle err });
```
# 
#### if you don't use **.catch()** error will be still visible in console as _Uncaught_
 *** DOCUMENTATION UNDER CONSTRUCTION ***
 # 
 # 
[contribute to project](http://www.barracudadev.com)
