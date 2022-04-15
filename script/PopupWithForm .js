import Popup from "./popup.js";

export default class PopupWithForm extends Popup {
    constructor(popupSelector, submitHandler) {
        super(popupSelector)
        this._submitHandler = submitHandler
        this._form = this._popupElement.querySelector(".popup__form")
    }
    _getInputValues() {
        const inputs = [...this._form.querySelector(".popup__input")]
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
            this._submitHandler(this._getInputValues)
            this.close()
        })
        super.setEventListeners()
        //this._popupElement.querySelector(this._form).addEventListener("submit", this._submitHandler)
    }
    close() {

        super.close()
        this._form.reset()
    }
}