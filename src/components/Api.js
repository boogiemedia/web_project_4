export default class Api {
    constructor(options) {
this._url = options.baseUrl;
this._token = options.token;
    }
    getInitialCards() {
      console.log("api.getInitialCards()")
        return fetch(`${this._url}/cards`, {
          headers: 
          {authorization: this._token}
        })
          .then(res => {
            if (res.ok) {
              return res.json();
            }
            // if the server returns an error, reject the promise
            return Promise.reject(`Error: ${res.status}`);
          })
          
      } 
  
    // other methods for working with the API
  } 
  
