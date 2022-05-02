import Popup from "./popup.js";

export default class PopupWithForm extends Popup {
    constructor(popupSelector, submitHandler) {
        super(popupSelector)
        this._handleSubmit  = submitHandler
        this._form = this._popupElement.querySelector(".popup__form")
        this._saving = document.querySelector(".popup__save-button")
       
    }
    _getInputValues() {
        const inputs = [...this._form.querySelectorAll(".popup__input")]
        
        const inputValues = {}
        inputs.forEach((input) => { inputValues[input.name] = input.value })
        return inputValues
        
    }
  
    setEventListeners() {
        this._form.addEventListener("submit", (e) =>{
            e.preventDefault()
            this._handleSubmit (this._getInputValues())
            this._saving.textContent ="saving..."  
        })
        super.setEventListeners()
    }
    close() {
        super.close()
        this._form.reset()
        this._saving.textContent ="save"  
        

        
    }
   
}