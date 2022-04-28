 export default class UserInfo {
    constructor({userNameSelector, userJobSelector, avatarSelector}){
        this._userName = document.querySelector(userNameSelector)
        this._userJob = document.querySelector(userJobSelector)
        this._userAvatar = document.getElementById(avatarSelector)
       
    }
    getUserInfo(){
        console.log("get", this._userAvatar.src)
        return {
           name: this._userName.textContent,
           aboutMe: this._userJob.textContent,
           avatar: this._userAvatar.src,
           
        }
        
    }
    setUserInfo({name, aboutMe}){
        this._userName.textContent = name
        this._userJob.textContent = aboutMe
        this._userAvatar.src = avatar
        console.log("set", this._userAvatar.src)
        
    }
}