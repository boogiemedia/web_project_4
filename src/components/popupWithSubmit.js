import Popup from "./popup.js";

export default class PopupWithSubmit extends Popup {
    constructor(popupSelector, submitHandler) {
        super(popupSelector)
        this._handleSubmit  = submitHandler
        this._form = this._popupElement.querySelector(".popup__form")
       
    }
    setEventListeners() {
        this._form.addEventListener("submit", (e) =>{
            e.preventDefault()
            this._handleSubmit()
            this.close()
        })
        super.setEventListeners()
    }
    close() {
        super.close()
        
    }
}