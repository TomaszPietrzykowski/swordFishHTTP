# SwordFishHTTP
#
#### custom, light-weight, frontend HTTP library
current version 0.1.0
# 
#
Provides short and convenient syntax in a form of set of methods for web API based projects. Supports fetch and xhr, offers handy way of handling onprogress method (spinners, loaders), comes with built-in loader animating data fields awaiting data.
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

### or use CDN

```javascript
<script src="https://www.barracudadev.com/swordfish/0.1.0/swordfish.min.js"></script>
```
# 
### Initialize SwordFish

```javascript
const yourVar = new SwordFish;
```
# 
___________
## Availaible methods
# 
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
_____________
# READ RESOURCE METHODS
_____________
# 
# .get(url);
#### fetch data from *url* 
#### - returns response data as a promise
#### - data handled with _.then()_
#### - takes one parameter - API url (string)
#
##### Syntax:

```javascript
const myVar = new SwordFish;
const api = 'string';

myVar.get(api)
           .then((data) => { _code to handle data_ })
```

##### Example:

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
#### you may handle errors with _.catch()_

```javascript
myVar.get(api)
           .then((data) => { _code to handle data_ })
           .catch((err) => { _code to handle err });
```
# 
#### if you don't use _.catch()_ error will be still visible in console as _Uncaught_
# 
_____________
# 
# .getXHR(url, cb);
#### fetch data from *url* 
#### - data handled with callback function
#### - takes two parameters - API url (string) and callback function for handling data
#
##### Syntax:

```javascript
const myVar = new SwordFish;
const api = 'string';
const handleData = (data) => { _code to handle data_ };

myVar.get(api, handleData);

```

##### Example:

```javascript
const myVar = new SwordFish;
const api = 'https://jsonplaceholder.typicode.com/users';
const cb = (data) => { 
      const html = "";
      data.forEach((obj) => {
           html += `<li>User: ${obj.firstName} ${obj.lastName}</li>`
           });
      document.querySelector("#users-list").innerHTML = `<ul>${html}</ul>`
}


myVar.getXHR(api,cb);

```
# 
#### error handling
in case of error _.getXHR()_ will return error object:
#### { error: _"string"_ }
you may check for errors within your callback:
```javascript
const cb = (data) => { 
       if(data.error){ 
       // don't bother:
       return
       // or handle error:
       console.log(data.error)
       } else {
       // handle data
       }
}
```
# 
### * * * DOCUMENTATION UNDER CONSTRUCTION * * *
#
[Contribute to project]('http://www.barracudadev.com')
#
