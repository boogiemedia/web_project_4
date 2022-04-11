import Popup from "./popup";

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
    setEventListeners() {
        super.setEventListeners()
        this._popupElement.querySelector(this._form).addEventListener("submit", this._submitHandler)
    }
    close() {

        super.close()
        this._form.reset()
    }
}