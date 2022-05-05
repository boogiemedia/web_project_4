import Popup from "./popup.js";

export default class PopupWithSubmit extends Popup {
    constructor(popupSelector) {
        super(popupSelector)
        this._form = this._popupElement.querySelector(".popup__form")
       
    }
    setEventListeners() {
        this._form.addEventListener("submit", (e) =>{
            e.preventDefault()
            this._submitHandler()
        })
        super.setEventListeners()
    }
        setHandleSubmit(handleSubmit) {
            this._submitHandler  = handleSubmit
        }
  
}