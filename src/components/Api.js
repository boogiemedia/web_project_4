export default class Api {
    constructor(options) {
this._url = options.baseUrl;
this._token = options.token;
    }
    getInitialCards() {
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
      addNewCard(data){
        return fetch(`${this._url}/cards`, {
          method: 'POST',
          headers: 
          {authorization: this._token, 'Content-Type': "application/json"},
          body: JSON.stringify (data)
        })
        .then(res => {
          if (res.ok) {
            return res.json();
          }
          // if the server returns an error, reject the promise
          return Promise.reject(`Error: ${res.status}`);
        })
      } 

      deleteCard(cardId){
        return fetch(`${this._url}/cards/${cardId} `,{
          method: "DELETE",
          headers: {authorization: this._token}
        })
        .then(res => {
          if (res.ok) {
            return {res}
          }
          return Promise.reject(`Error: ${res.status}`)
        })
      }

      putlike(cardId){
        return fetch(`${this._url}/cards/likes/${cardId} `,{
          method: "PUT",
          headers: {authorization: this._token,'Content-Type': "application/json"},
        })
        .then(res => {
          if (res.ok) {
            return {res}
          }
          return Promise.reject(`Error: ${res.status}`)
        })
      }
      deleteLike(cardId){
        return fetch(`${this._url}/cards/likes/${cardId} `,{
          method: "DELETE",
          headers: {authorization: this._token,'Content-Type': "application/json"},
        })
        .then(res => {
          if (res.ok) {
            return {res}
          }
          return Promise.reject(`Error: ${res.status}`)
        })
      }
      
  //.......................End of cards api`s....................

    getInitialProfile(){
      return fetch(`${this._url}/users/me`, {
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
  setInitialProfile(data){
    return fetch(`${this._url}/users/me`, {
      method: 'PATCH',
      headers: {authorization: this._token,  'Content-Type': "application/json"},
      body: JSON.stringify({name: data.name, about: data.about})
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        // if the server returns an error, reject the promise
        return Promise.reject(`Error: ${res.status}`);
      })
  }
  changeavatar(avatar){
    return fetch(`${this._url}/users/me/avatar `,{
      method: 'PATCH',
      headers: {authorization: this._token, 'Content-Type': "application/json"},
      body: JSON.stringify(avatar)
    })
    .then(res => {
      if (res.ok) {
        return console.log(avatar)
      }
      return Promise.reject(`Error: ${res.status}`)
    })
  }



//....................................................................end of file.................................................
  } 


  
