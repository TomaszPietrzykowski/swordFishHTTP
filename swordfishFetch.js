class SwordFish{
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
    // POST request with async/await
    async post(url, data){
        const serverResponse = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        const response = await serverResponse.json();
        return response;
    }
    // PUT request with async/await
    async put(url, data){
        const serverResponse = await fetch(url, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        const response = await serverResponse.json();
        return response;
    }
    // DELETE request with async/await
    async delete(url, data){
        const serverResponse = await fetch(url, {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        const response = await serverResponse.status;
        return response;
    }
}
