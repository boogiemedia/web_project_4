export default class Api {
    constructor(options) {
this._url = options.baseUrl;
this._token = options.token;
    }

    _getResponseData(res){
      if (res.ok) {
        return res.json();
      }
      // if the server returns an error, reject the promise
      return Promise.reject(`Error: ${res.status}`);
    }
    getInitialCards() {
        return fetch(`${this._url}/cards`, {
          headers: 
          {authorization: this._token}
        })
          .then(this._getResponseData)
          
      } 
      addNewCard(data){
        return fetch(`${this._url}/cards`, {
          method: 'POST',
          headers: 
          {authorization: this._token, 'Content-Type': "application/json"},
          body: JSON.stringify (data)
        })
        .then(this._getResponseData)
      } 

      deleteCard(cardId){
        return fetch(`${this._url}/cards/${cardId} `,{
          method: "DELETE",
          headers: {authorization: this._token}
        })
        .then(this._getResponseData)
      }
      addLike(cardId){
        return fetch(`${this._url}/cards/likes/${cardId} `,{
          method: "PUT",
          headers: {authorization: this._token,'Content-Type': "application/json"},
        })
        .then(this._getResponseData)
      }
      deleteLike(cardId){
        return fetch(`${this._url}/cards/likes/${cardId} `,{
          method: "DELETE",
          headers: {authorization: this._token,'Content-Type': "application/json"},
        })
        .then(this._getResponseData)
      }  
  //.......................End of cards api`s...................
    getProfile(){
      return fetch(`${this._url}/users/me`, {
        headers: 
        {authorization: this._token}
      })
        .then(this._getResponseData)
    }
  setProfile(data){
    return fetch(`${this._url}/users/me`, {
      method: 'PATCH',
      headers: {authorization: this._token,  'Content-Type': "application/json"},
      body: JSON.stringify({name: data.name, about: data.about})
    })
      .then(this._getResponseData)
  }
  changeAvatar(avatar){
    return fetch(`${this._url}/users/me/avatar `,{
      method: 'PATCH',
      headers: {authorization: this._token, 'Content-Type': "application/json"},
      body: JSON.stringify(avatar)
    })
    .then(this._getResponseData)
  }
//....................................................................end of file.................................................
  } 


  
