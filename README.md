# SwordFishHTTP
#
#### custom, light-weight, frontend HTTP library
current version 0.1.0
# 
Provides short and convenient syntax in a form of set of methods for web API based projects. Supports fetch and xhr, offers handy way of handling onprogress method (spinners, loaders), comes with built-in loader and toolbox of DOM manippulation methods.
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
DOM manipulation methods:
* $F()
* $FAll()
* $FX()
* $FE()
* $FShow()
* $FClass()
# 
HTTP methods:
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
# DOM METHODS
# SwordFish Selectors: $F
All of **$F** methods are availaible without initializing new SwordFish
_____________
# 
# $F(selector);
handy syntax for grabbing DOM elements by class, id or element name
* takes querySelector string as an argument
* returns a DOM element
##### Syntax:

```javascript
$F('querySelector');
```

##### Examples:

```javascript

$F('#title').style.color = 'white;

$F('.buy-btn').addEventListener('click', cb); // this can be better done with --> $FE method

this.email = $F('#email-input').value;

const commment = $F('#input-field').value;
```
**$F(id)** is basicly convenience syntax for **document.querySelector(id)**. Just like querySelector, takes string with **.class** or **#id** notation. Single DOM element can be passed as well: **$F('h1')**. If passed element appears in DOM more then ones, only the first element will be returned. That allows you to grab first element of many if you wish so. For handling multiple elements we recommend using other **$F_()** methods.
# 
_____________
# 
# $FAll(selector);
* takes querySelector or an array of querySelectors as an argument
* returns an array of DOM elements
##### Syntax:

```javascript
$FAll('querySelector');
```

##### Examples:

```javascript

const array = $FAll('.completed');

array.forEach(markDone); // this can be better done with $FX() method...

$FAll('.input-field').forEach(field => field.style.borderColor = 'red';) // ...so can this
```
**$FAll(id)** method is more then convenience syntax. It returns a flat array of DOM elements, as oposed to  **document.querySelectorAll(id)** returning DOM Node List. Iterable array will be returned regardless of how many querySelectors were passed. If only single element can be targeted method will return an array with single element. If multiple elements can be targeted with a single selector all of them will be returned in an array. If no argument is passed method will return without executing. Array of queries should be passed like this: **$F(['h4', '.delete', '#submmit'])**. 

##### Examples:

```javascript

arr1 = $FAll('#title');

           // will return:

arr1 = [
         <h1 id="title">...</h1>
       ]


arr2 = $FAll(['#title', 'div']);

           // will return:

arr2 = [
         <h1 id="title">..</h1>,
         <div>..</div>,
         <div>..</div>,
         <div>..</div>,
         <div>..</div>,
         <div>..</div>
       ]

```
# 
_____________
# READ RESOURCE METHODS
_____________
# 
# .get(url);
#### get data from api 
#### - returns response data as a promise
#### - data handled with _.then()_
#### - takes one parameter: API's url
#
##### Syntax:

```javascript
const myVar = new SwordFish;
const url = 'string';

myVar.get(url)
           .then((data) => { _code to handle data_ })
```

##### Example:

```javascript
const myVar = new SwordFish;
const api = 'https://jsonplaceholder.typicode.com/users';
const emails = [];

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
myVar.get(url)
           .then((data) => { _code to handle data_ })
           .catch((err) => { _code to handle err });
```
# 
if you don't use _.catch()_ error will be still visible in console as _Uncaught_
# 
_____________
# 
# .getXHR(url, cb);
#### get data from api 
#### - data handled with callback function
#### - takes two parameters: API's url and callback function for handling data
#
##### Syntax:

```javascript
const myVar = new SwordFish;
const url = 'string';
const cb = (data) => { _code to handle data_ };

myVar.get(url, cb);

```

##### Example:

```javascript
const myVar = new SwordFish;
const api = 'https://jsonplaceholder.typicode.com/users';
const showUsers = (data) => { 
      const html = "";
      data.forEach((obj) => {
           html += `<li>User ${obj.id}: ${obj.firstName} ${obj.lastName}</li>`
           });
      document.querySelector("#users-list").innerHTML = `<ul>${html}</ul>`;
}


myVar.getXHR(api,showUsers);

```
# 
#### error handling with .getXHR()
in case of error _.getXHR()_ will return error object:
```javascript
 { error: "string" }
 ```
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
_____________
# 
# .getProgress(url, cb, sp);
#### get data from api with onprogress event
#### - data and spinner event handled with callback functions
#### - takes 3 to 4 parameters: API's url and callback functions for handling data and spinner event
#
since fetch technology doesn't support onprogres method at this point, _.getProgress()_ uses callback function for handling response data, just like _.getXHR()_ 
##### Syntax:

```javascript
const myVar = new SwordFish;
const url = 'string';
const cb = (data) => { _code to handle data_ };
const sp = () => { _code to toggle spinner event_ }

myVar.getProgress(url, cb, sp);

```
# 
##### Example:

```javascript
const spinner = () => {
    document.getElementById('spinner').classList.toggle('hide');
    document.getElementById('data-output').classList.toggle('hide');
}


myVar.getProgress(api, showUsers, spinner);

```
#
function _spinner_ is being called twice: by onreadystate: 3 and by onreadystate: 4
# 
if you whant to use different code to trigger and stop onprogress event simply pass additional callback as a 4th argument:
```javascript
const sp1 = () => { _code to fire spinner event_ };
const sp2 = () => { _code to stop spinner and perhaps execute sth else_ };

myVar.getProgress(url, cb, sp1, sp2);

```
function _sp1_ will be called by onreadystate: 3, and function _sp2_ by onreadystate: 4
# 
# 
#### error handling
similar to  _.getXHR()_ method, returns an error object
#
### * * * DOCUMENTATION UNDER CONSTRUCTION * * *
#
[Contribute to project]('http://www.barracudadev.com')
#
