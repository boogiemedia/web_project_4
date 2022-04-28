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
  setInitialProfile(){
    return fetch(`${this._url}/users/me`, {
      method: 'PATCH',
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
  setAvatar(){
    return fetch(`${this._url}/users/me`,{
      headers:
      {authorization: this._token}
    })
    .then(res => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Error: ${res.status}`)
    })
  }
  changeavatar(avatar){
    return fetch(`${this._url}/users/me/avatar `,{
      method: PATCH,
      headers: {authorization: this._token},
      body: JSON(avatar)
    })
    .then(res => {
      if (res.ok) {
        return {avatar}
      }
      return Promise.reject(`Error: ${res.status}`)
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
  } 


  
