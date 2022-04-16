 export default class UserInfo {
    constructor({userNameSelector, userJobSelector}){
        this._userName = document.querySelector(userNameSelector)
        this._userJob = document.querySelector(userJobSelector)
       
    }
    getUserInfo(){
        return {
           name: this._userName.textContent,
           description: this._userJob.textContent
        }
    }
    setUserInfo({Name, AboutMe}){
        this._userName.textContent = Name
        this._userJob.textContent = AboutMe

    }
}