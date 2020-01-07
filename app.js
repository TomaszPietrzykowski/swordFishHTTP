// SwordFish.js HTTP Library Documentation

// Initialize swordfish
const http = new SwordFish;

// Swordfish Error Object pattern
// const errObj = {error: 'string'} - can be returned from methods

// function definitions 
const handleResponse = (res) => {console.log(res)};
const progIn = () => {console.log('onprogres fired')};
const progOut = () => {console.log('onprogres finished')};

const handleRes = (res) => {
    let lis = ''; 
    res.data.forEach(el => {
        lis += `<li>${el.first_name}: ${el.email}</li>`
    });
    let html = `<ul>${lis}</ul>`;
    document.querySelector('.output').innerHTML = html;
};

// Swordfish methods
// GET METHODS
// .get(url, fn) - fetch data from url and handle response with callback - fn;
// \/  \/  \/
// http.get('https://jsonplaceholder.typicode.com/posts', handleResponse);

// .getProgress(url, fn1, fn2, fn3) - fetch data from url and handle onprogress function eg. loader
// fn1 - response handling cb, fn2 - loader init cb, fn3 - loader hide cb
// returns parsed response object or error obect
// \/  \/  \/
// http.getProgress('https://jsonplaceholder.typicode.com/posts', handleResponse, progIn, progOut);

// .getRaw(url, fn) - returns original response text or error string to be handled by callback: fn
// \/  \/  \/  
// http.getRaw('https://jsonplaceholder.typicode.com/posts', handleResponse);


// POST METHOD
const newUser = {
    name: 'Jhon',
    job: 'swordfish library developer'
};
//  .post(url, data, fn) - posts a new resource to a server
// data = data object, fn = callback to handle response
// returns posted object with unique server id
// http.post('https://reqres.in/api/users/2', newUser, handleResponse);
const url = 'https://reqres.in/api/users/2';
const url2 = 'https://jsonplaceholder.typicode.com/posts/1';

//  .postStatus(url, data, fn) - posts a new resource to a server
// data = data object, fn = callback to handle responses
// returns http status to be handled by cb *** success post status: 201
// http.postStatus('https://reqres.in/api/users/2', newUser, handleResponse);

http.getSome('https://jsonplaceholder.typicode.com/users', 12)
    .then(res => console.log(res))
    .catch(err => console.log(err));

// http.put(url, newUser, handleResponse);

//  postStatus(); posts resource and returns http status
// http.putStatus(url, newUser, handleResponse);
// http.delete(url2, handleResponse);
