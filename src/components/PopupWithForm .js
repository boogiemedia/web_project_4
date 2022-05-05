import Popup from "./popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, buttonText, loadingButtonText, handleSubmit) {
    super(popupSelector);
    this._handleSubmit = handleSubmit;
    this._form = this._popupElement.querySelector(".popup__form");
    this._submitButton = this._popupElement.querySelector(
      ".popup__save-button"
    );
    this._buttonText = buttonText;
    this._loadingButtonText = loadingButtonText;
  }
  _getInputValues() {
    const inputs = [...this._form.querySelectorAll(".popup__input")];

    const inputValues = {};
    inputs.forEach((input) => {
      inputValues[input.name] = input.value;
    });
    return inputValues;
  }

  setEventListeners() {
    this._form.addEventListener("submit", (e) => {
      e.preventDefault();
      this._handleSubmit(this._getInputValues());
    });
    super.setEventListeners();
  }
  close() {
    super.close();
    this._form.reset();
  }
  showLoading() {
    this._submitButton.textContent = this._loadingButtonText;
  }
  hideLoading() {
    this._submitButton.textContent = this._buttonText;
  }
}
