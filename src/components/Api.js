export default class Api {
    constructor(options) {
this._url = options.baseUrl;
this._token = options.token;
    }

    _getResponceData(res){
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
          .then(res => 
           this._getResponceData(res)
          )
          
      } 
      addNewCard(data){
        return fetch(`${this._url}/cards`, {
          method: 'POST',
          headers: 
          {authorization: this._token, 'Content-Type': "application/json"},
          body: JSON.stringify (data)
        })
        .then(res => 
          this._getResponceData(res)
        )
      } 

      deleteCard(cardId){
        return fetch(`${this._url}/cards/${cardId} `,{
          method: "DELETE",
          headers: {authorization: this._token}
        })
        .then(res => 
          this._getResponceData(res)
        )
      }
      adLike(cardId){
        return fetch(`${this._url}/cards/likes/${cardId} `,{
          method: "PUT",
          headers: {authorization: this._token,'Content-Type': "application/json"},
        })
        .then(res => 
          this._getResponceData(res)
        )
      }
      deleteLike(cardId){
        return fetch(`${this._url}/cards/likes/${cardId} `,{
          method: "DELETE",
          headers: {authorization: this._token,'Content-Type': "application/json"},
        })
        .then(res => 
          this._getResponceData(res)
        )
      }
      
  //.......................End of cards api`s....................

    getProfile(){
      return fetch(`${this._url}/users/me`, {
        headers: 
        {authorization: this._token}
      })
        .then(res => 
          this._getResponceData(res)
        )
    }
  setProfile(data){
    return fetch(`${this._url}/users/me`, {
      method: 'PATCH',
      headers: {authorization: this._token,  'Content-Type': "application/json"},
      body: JSON.stringify({name: data.name, about: data.about})
    })
      .then(res => 
        this._getResponceData(res)
      )
  }
  changeAvatar(avatar){
    return fetch(`${this._url}/users/me/avatar `,{
      method: 'PATCH',
      headers: {authorization: this._token, 'Content-Type': "application/json"},
      body: JSON.stringify(avatar)
    })
    .then(res => 
      this._getResponceData(res)
    )
  }



//....................................................................end of file.................................................
  } 


  
