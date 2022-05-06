import Popup from "./popup.js";

export default class PopupWithSubmit extends Popup {
    constructor(popupSelector, buttonText, loadingButtonText) {
        super(popupSelector)
        this._form = this._popupElement.querySelector(".popup__form")
        this._submitButton = this._popupElement.querySelector(
            ".popup__save-button");
        this._buttonText = buttonText
        this._loadingButtonText = loadingButtonText
    }   
    setEventListeners() {
        this._form.addEventListener("submit", (e) =>{
            e.preventDefault()
            this._handleSubmit()
        })
        super.setEventListeners()
    }
        setHandleSubmit(handleSubmit) {
            this._handleSubmit  = handleSubmit
        }
        showLoading() {
           this._submitButton.textContent = this._loadingButtonText;
           console.log(this._loadingButtonText)  
        }


          hideLoading() {
            this._submitButton.textContent = this._buttonText;
          }
}