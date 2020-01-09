// SwordFish.js HTTP Library WorkSheet

// Initialize swordfish
const http = new SwordFish;
// Workbench APIs
const url1 = 'https://jsonplaceholder.typicode.com/posts';
const url2 = 'https://jsonplaceholder.typicode.com/todos';
const url3 = 'https://jsonplaceholder.typicode.com/users';
const url4 = 'https://jsonplaceholder.typicode.com/users/1';
const url5 = 'https://jsonplaceholder.typicode.com/posts/1';
const url6 = 'https://reqres.in/api/users/2';

// Swordfish Error Object pattern
// const errObj = {error: 'string'} - can be returned from methods

// function definitions 
const logRes = (res) => {console.log(res)};
const progIn = () => {console.log('onprogres fired')};
const progOut = () => {console.log('onprogres finished')};
const progToggle = () => {console.log('onprogres toggled')};
const handleRes = (res) => {
    let lis = ''; 
    res.forEach(el => {
        lis += `<li>${el.email}</li><hr>`
    });
    let html = `<ul>${lis}</ul>`;
    $F('.output').innerHTML = html;
};
// function turnGreen(it){
//     it.style.color = 'white'
//     it.style.backgroundColor = 'green';
//   }
// $FX('li', turnGreen);
// Swordfish methods
// GET METHODS
// .get(url, fn) - fetch data from url and handle response with callback - fn;
// \/  \/  \/
http.get(url3).then(handleRes);

// .getProgress(url, fn1, fn2, fn3) - fetch data from url and handle onprogress function eg. loader
// fn1 - response handling cb, fn2 - loader init cb, fn3 - loader hide cb
// returns parsed response object or error obect
// \/  \/  \/
// http.getProgress('https://jsonplaceholder.typicode.com/posts', handleResponse, progIn, progOut);

// .getRaw(url, fn) - returns original response text or error string to be handled by callback: fn
// \/  \/  \/  
// http.getRaw('https://jsonplaceholder.typicode.com/posts', handleResponse);

  
  

// POST METHOD
// const newUser = {
//     name: 'Jhon',
//     job: 'swordfish library developer'
// };
// //  .post(url, data, fn) - posts a new resource to a server
// data = data object, fn = callback to handle response
// returns posted object with unique server id
// http.post('https://reqres.in/api/users/2', newUser, handleResponse);


//  .postStatus(url, data, fn) - posts a new resource to a server
// data = data object, fn = callback to handle responses
// returns http status to be handled by cb *** success post status: 201
// http.postStatus('https://reqres.in/api/users/2', newUser, handleResponse);

// http.getSome('https://jsonplaceholder.typicode.com/users', 12)
//     .then(res => console.log(res))
//     .catch(err => console.log(err));

// http.put(url, newUser, handleResponse);

//  postStatus(); posts resource and returns http status
// http.putStatus(url, newUser, handleResponse);
// // http.delete(url2, handleResponse);
//     window.$F = function(selector){
//     const el = document.querySelector(`${selector}`);
//     return el
// }

// $F('.output').innerText = 'dupa';
// document.querySelector('.output').innerText = 'dupsko';

// window.$F = function(selector){
//     const el = document.querySelector(`${selector}`);
//     return el
//   }

//   $F('.output').innerText = 'dupa';