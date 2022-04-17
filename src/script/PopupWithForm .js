import Popup from "./popup.js";

export default class PopupWithForm extends Popup {
    constructor(popupSelector, submitHandler) {
        super(popupSelector)
        this._submitHandler = submitHandler
        this._form = this._popupElement.querySelector(".popup__form")
       
    }
    _getInputValues() {
        const inputs = [...this._form.querySelectorAll(".popup__input")]
        
        const inputValues = {}
        inputs.forEach((input) => { inputValues[input.name] = input.value })
        return inputValues
        
    }
    close() {
        super.close()
        this._form.reset()
    }
    setEventListeners() {
        this._form.addEventListener("submit", (e) =>{
            e.preventDefault()
            this._submitHandler(this._getInputValues())
            this.close()
        })
        super.setEventListeners()
    }
    close() {
        super.close()
        this._form.reset()
    }
}