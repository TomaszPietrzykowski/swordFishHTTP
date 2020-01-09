/* * * * * * * * * * * * * * * * * * * * * * * 
 * * Swordfish HTTP Library
 * * @version 0.1.0
 * * @documentation: https://github.com/TomaszPietrzykowski/swordFishHTTP/blob/master/README.md
 * * @author: Tomasz Pietrzyokowski
 * * www: tomaszpietrzykowski.com
 * * * * * * * * * * * * * * * * * * * * * * * 
**/
!function(global){
// Attach $wordFishSelector method to window object:
    global.$F = function(sel){
      const el = document.querySelector(`${sel}`);
      return el
    }
    // SwordFish constructor
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
