/* * * * * * * * * * * * * * * * * * * * * * * 
 * * Swordfish HTTP Library
 * * @version 0.1.0
 * * @documentation: https://github.com/TomaszPietrzykowski/swordFishHTTP/blob/master/README.md
 * * @author: Tomasz Pietrzyokowski
 * * www: tomaszpietrzykowski.com
 * * * * * * * * * * * * * * * * * * * * * * * 
**/
!function(global){
/* 
 * Attach $wordFish Selector methods to window object 
 */
    global.$F = function(sel){  // returns element tagged with querySelector
        // Don't bother if no value provided
        if (sel === null || typeof sel === 'undefined') {
        return;
        }   
        const el = document.querySelector(`${sel}`);
        return el
    }
    global.$FAll = function(sel){  // returns an iterable array of elements
        if (sel === null || typeof sel === 'undefined') {
            return;
        }
        const flatArr = [];
        // Force an array if a single selector provided
        if (typeof sel !== 'object') {
          sel = [sel];
        }
        // flat out an elements array
        sel.forEach((qs) => {
          const nodeList = document.querySelectorAll(`${qs}`);
          const DOMArr = Array.from(nodeList);
          DOMArr.forEach((el) => { flatArr.push(el); });
        })
        return flatArr;
    }
    global.$FX = function(sel, cb){
        if (sel === null || typeof sel === 'undefined') {
            return;
        }
        const flatArr = [];
        if (typeof sel !== 'object') {
          sel = [sel];
        }
        sel.forEach((qs) => {
          const nodeList = document.querySelectorAll(`${qs}`);
          const DOMArr = Array.from(nodeList);
          DOMArr.forEach((el) => { flatArr.push(el); });
        })
        // execute callback on each element
        flatArr.forEach(cb); // cb fn takes an iterator (el) => {..}
    }
    global.$FE = function(sel, e, cb){
        if (sel === null || typeof sel === 'undefined') {
            return;
        }
        const flatArr = [];
        if (typeof sel !== 'object') {
          sel = [sel];
        }
        sel.forEach((qs) => {
          const nodeList = document.querySelectorAll(`${qs}`);
          const DOMArr = Array.from(nodeList);
          DOMArr.forEach((el) => { flatArr.push(el); });
        })
        // add Event Listener each element
        flatArr.forEach(el => {
            el.addEventListener(e, cb);
        });
    }
    global.$FShow = function(sel, par){
        if (sel === null || typeof sel === 'undefined') {
            return;
        }
        const flatArr = [];
        if (typeof sel !== 'object') {
          sel = [sel];
        }
        sel.forEach((qs) => {
          const nodeList = document.querySelectorAll(`${qs}`);
          const DOMArr = Array.from(nodeList);
          DOMArr.forEach((el) => { flatArr.push(el); });
        })
        // detect action required on css display attribute
        flatArr.forEach(el => {
            if(par===0){ // case: toggle
                if(el.style.display==='none'){
                    el.style.display = 'block';
                } else { 
                    el.style.display = 'none';
                }
            } else if (par){ // case: show
                console.log('show');
                if(el.style.display==='none'){
                el.style.display = 'block';
                }
            } else { // case: hide
                console.log('hide')
                el.style.display = 'none';
            }
        });
    }
    global.$FShowTO = function(to, sel, par){
        if (sel === null || typeof sel === 'undefined') {
            return;
        }
        const flatArr = [];
        if (typeof sel !== 'object') {
          sel = [sel];
        }
        sel.forEach((qs) => {
          const nodeList = document.querySelectorAll(`${qs}`);
          const DOMArr = Array.from(nodeList);
          DOMArr.forEach((el) => { flatArr.push(el); });
        })
        // detect action required on css display attribute
        flatArr.forEach(el => {
            if(par===0){ // case: toggle ---------------------------
                if(el.style.display==='none'){
                    el.style.display = 'block';
                    setTimeout(()=>{el.style.display = 'none';}, to);
                } else { 
                    let mem = el.style.display;
                    if(!mem){ mem = 'block' };
                    el.style.display = 'none';
                    setTimeout(()=>{el.style.display = mem;}, to); 
                }
            } else if (par){ // case: show ---------------------------
                if(el.style.display==='none'){
                el.style.display = 'block';
                setTimeout(()=>{el.style.display = 'none';}, to);
                } // do nothing since element already displayed
            } else { // case: hide ------------------------------------
                let mem = el.style.display;
                if(!mem){ mem = 'block'; }
                el.style.display = 'none';
                setTimeout(()=>{el.style.display = mem;}, to);
            }
        });
    }
    /* 
     *  SwordFish constructor 
     */
    class SwordFish {
        constructor() {
            this.http = new XMLHttpRequest();
        }   
        // GET request with async/await
        async get(url){
            const serverResponse = await fetch(url);
            const response = await serverResponse.json();
            return response;
        }
        // GET request with async/await with limit param
        // to be rebuilt to fetch limit rather then dislplay limit
        async getSome(url, limit){
            const serverResponse = await fetch(url);
            const response = await serverResponse.json();
            const data = Array.from(response);
            const limited = [];
            for(let i = 0; i < limit; i++){
                limited.push(data[i]);
            }
            return limited;
        }

        // Get request method .get(url, handleResponse)
        getXHR(url, callback) {
            this.http.open('GET', url, true);
            this.http.onerror = () => {
                callback({ error: `error status: ${this.http.status}` });
            };
            this.http.onload = () => {
                if (this.http.status === 200) {
                    callback(JSON.parse(this.http.responseText));
                }
            };
            this.http.send();
        }
        // Get request method with handling loader .getProgress(url, handleResponse, progIn, progOut)
        getProgress(url, callback, progIn, progOut = progIn) {
            this.http.open('GET', url, true);
            this.http.onerror = () => {
                callback({ error: `error status: ${this.http.status}` });
            };
            this.http.onprogress = () => progIn();
            this.http.onload = () => {
                if (this.http.status === 200) {
                    progOut();
                    callback(JSON.parse(this.http.responseText));
                }
            };
            this.http.send();
        }
        //  Get raw API data output
        getRaw(url, callback) {
            this.http.open('GET', url, true);
            this.http.onerror = () => { callback(`error status: ${this.http.status}`); };
            this.http.onload = () => {
            if (this.http.status === 200) {
                callback(this.http.responseText);
            }
            };
            this.http.send();
        }
        //  POST METHODS
        //  postStatus(); posts resource and returns http status
        post(url, data, callback) {
            this.http.open('POST', url, true);
            this.http.setRequestHeader('Content-type', 'application/json');
            this.http.onload = () => {
                if (this.http.status === 201) {
                    callback(JSON.parse(this.http.responseText));
                }
                else {
                    callback({ error: `status: ${this.http.status}` });
                }
            };
            this.http.send(JSON.stringify(data));
        }
        //  postStatus(); posts resource and returns http status
        postStatus(url, data, callback) {
            this.http.open('POST', url, true);
            this.http.setRequestHeader('Content-type', 'application/json');
            this.http.onerror = () => callback(this.http.status);
            this.http.onload = () => callback(this.http.status);
            this.http.send(JSON.stringify(data));
        }
        // PUT METHODS 
        // .put(); updates the resorce with id passed in url, returns updated object
        put(url, data, callback) {
            this.http.open('PUT', url, true);
            this.http.onerror = () => { callback({ error: `status: ${this.http.status}` }); };
            this.http.setRequestHeader('Content-type', 'application/json');
            this.http.onload = () => callback(JSON.parse(this.http.responseText));
            this.http.send(JSON.stringify(data));
        }
        //  patch(); updates resource and returns http status
        putStatus(url, data, callback) {
            this.http.open('PATCH', url, true);
            this.http.setRequestHeader('Content-type', 'application/json');
            this.http.onerror = () => callback(this.http.status);
            this.http.onload = () => callback(this.http.status);
            this.http.send(JSON.stringify(data));
        }
        // DELETE METHODS
        // Delete request method .delete(url, cb); id passed in url returns status
        del(url, callback) {
            this.http.open('DELETE', url, true);
            this.http.onerror = () => callback(`error status: ${this.http.status}`);
            this.http.onload = () => callback(this.http.status);
            this.http.send();
        }
    }


global.SwordFish = SwordFish;

}(this);
// ******************************************************************
