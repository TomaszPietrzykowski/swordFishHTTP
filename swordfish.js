// *********************************
// ** Swordfish HTTP Library *******
// **** version 0.1.0 **************
// ** barracudadev.com/swordfish/ **
// ** Barracuda Development ********
// ** barracudadev.com *************
// *********************************
function SwordFish(){
    this.http = new XMLHttpRequest();
}
// Get request method .get(url, handleResponse)
SwordFish.prototype.getXHR = function(url, callback){
        this.http.open('GET', url, true);    
        this.http.onerror = () => {
            callback({error: `error status: ${this.http.status}`})
        }
        this.http.onload = () => {
            if(this.http.status === 200){
            callback(JSON.parse(this.http.responseText));
        } 
    }
    this.http.send();
}
// Get request method with handling loader .getProgress(url, handleResponse, progIn, progOut)
SwordFish.prototype.getProgress = function(url, callback, progIn, progOut){
        this.http.open('GET', url, true);    
        this.http.onerror = () => {
            callback({error: `error status: ${this.http.status}`})
        }
        this.http.onprogress = () => progIn();
        this.http.onload = () => {
            if(this.http.status === 200){
            progOut();
            callback(JSON.parse(this.http.responseText));
        } 
    }
    this.http.send();
}
//  Get raw API data output
SwordFish.prototype.getRaw = function(url, callback){
    this.http.open('GET', url, true);    
    this.http.onerror = () => {callback(`error status: ${this.http.status}`)}
    this.http.onload = () => {if(this.http.status === 200){callback(this.http.responseText);}}
    this.http.send();
}
//  POST METHODS
//  postStatus(); posts resource and returns http status
SwordFish.prototype.post = function(url, data, callback){
    this.http.open('POST', url, true);
    this.http.setRequestHeader('Content-type', 'application/json');
    this.http.onload = () => {
        if(this.http.status === 201)
        {callback(JSON.parse(this.http.responseText))
        } else {callback({error: `status: ${this.http.status}`})}}
    this.http.send(JSON.stringify(data));
};
//  postStatus(); posts resource and returns http status
SwordFish.prototype.postStatus = function(url, data, callback){
    this.http.open('POST', url, true);
    this.http.setRequestHeader('Content-type', 'application/json');
    this.http.onerror = () => callback(this.http.status);
    this.http.onload = () => callback(this.http.status);   
    this.http.send(JSON.stringify(data));
};

// PUT METHODS 
// .put(); updates the resorce with id passed in url, returns updated object
SwordFish.prototype.put = function(url, data, callback){
    this.http.open('PUT', url, true);
    this.http.onerror = () => {callback({error: `status: ${this.http.status}`});}
    this.http.setRequestHeader('Content-type', 'application/json');
    this.http.onload = () => callback(JSON.parse(this.http.responseText));
    this.http.send(JSON.stringify(data));
};
//  patch(); updates resource and returns http status
SwordFish.prototype.putStatus = function(url, data, callback){
    this.http.open('PATCH', url, true);
    this.http.setRequestHeader('Content-type', 'application/json');
    this.http.onerror = () => callback(this.http.status);
    this.http.onload = () => callback(this.http.status);   
    this.http.send(JSON.stringify(data));
};

// DELETE METHODS
// Delete request method .delete(url, cb); id passed in url returns status
SwordFish.prototype.delete = function(url, callback){
    this.http.open('DELETE', url, true);    
    this.http.onerror = () => callback(`error status: ${this.http.status}`);
    this.http.onload = () => callback(this.http.status);
    this.http.send();
}
// ******************************************************************
// SwordFish.loader();
// simple loader with a text output into a span of passed selector
//  to be used with fields awaiting for data 
// can be used with .getProgress method as a cb
// static mathod called on a class SwordFish
// .loader() takes 4 parameters;
// to stop the loader call it with two arguments, querySelector and 'clear'
// !!! idea .loaders()- let it takke an array of qSelectors loop through an alow multiplw outputs
//   Arry.forEach(obj)

function loader(qS, s, t, l){
    if(s === "clear"){
    const clear = (qS)=>{
        clearInterval(this.draw);
        document.querySelector(qS).innerText  = '';
    };
    clear(qS);
    }else{
    let str = '';
    this.draw = setInterval(()=>{
        if(str.length >= l){
            str = '';
            str += `${s}`;
        } else {
            str += `${s}`;
                }
        document.querySelector(qS).innerText  = str;
    }, t);
}}
let qSelector = '#sfish-loader'; // querySelector of output span, type: string
let qSelector2 = '.sfl3'; // querySelector of output span, type: string
let separator = '*'; // drawn element, type: string;
let delay = 80; // drawing delay in msec, type: nummber
let length = 30; // length of a loader in string signs, type: number;

// !!! idea .loaders()- let it takke an array of qSelectors loop through an alow multiplw outputs
//   Arry.forEach(obj)

// function loaders(qSs, s, t, l){
//     let arr = qSs
//     if(s === "clear"){
//     const clear = (arr)=>{
//         clearInterval(this.draw);
//         arr.forEach(el=>{
//         document.querySelector(el).innerText  = '';
//         }
//     };
//     clear(arr);
//     }else{
//     let str = '';
//     this.draw = setInterval(()=>{
//         if(str.length >= l){
//             str = '';
//             str += `${s}`;
//         } else {
//             str += `${s}`;
//                 }
//         arr.forEach(el=>{
//         document.querySelector(el).innerText  = str;
//     })
//     }, t);
// }}
// let qSs = '#sfish-loader'; // array of querySelectors of output spans, type: array of strings
// let separator = '*'; // drawn element, type: string;
// let delay = 80; // drawing delay in msec, type: nummber
// let length = 30; // length of a loader in string signs, type: number;