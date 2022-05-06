const popUpPreview = document.querySelector(".popup_type_preview");
export default class FormValidator {
  constructor(settings, form) {
    this.settings = settings;
    this.form = form;
    this.inputList = [...this.form.querySelectorAll(settings.inputSelector)];
    this.button = this.form.querySelector(settings.submitButtonSelector);
    this.isFormValid = true;
  }
  resetValidation() {
    this.isFormValid = true;
    this.inputList.forEach((input) => {
      this._hideError(input);
      input.classList.remove(this.settings.inputErrorClass);
    });
  }
  enableValidation() {
    this.form.addEventListener("submit", (e) => {
      e.preventDefault();
    });
    this._setEventListeners(this.form);
  }
  _showError(input) {
    if(!this.isFormValid) {
      const errorElement = this.form.querySelector(`#${input.id}-error`);
      errorElement.textContent = input.validationMessage;
    }
  }
  _hideError(input) {
    if(!this.isFormValid) {
      const errorElement = this.form.querySelector(`#${input.id}-error`);
      errorElement.textContent = " ";      
    }
  }
  _checkValidity(input) {
    const { inputErrorClass } = this.settings;
    if (input.validity.valid) {
      input.classList.remove(inputErrorClass);
      this._hideError(input);
    } else {
      input.classList.add(inputErrorClass);
      this._showError(input);
    }
  }
  _setEventListeners = () => {
    this.inputList.forEach((input) => {
      input.addEventListener("input", () => {
        this._checkValidity(input);
        this.toggleButtonState();
      });
    });
  };
  _checkValidity(input) {
    const { inputErrorClass } = this.settings;
    if (input.validity.valid) {
      input.classList.remove(inputErrorClass);
      this._hideError(input);
    } else {
      input.classList.add(inputErrorClass);
      this._showError(input);
    }
  }
  toggleButtonState() {
    const { inactiveButtonClass } = this.settings;
    this.isFormValid = this.inputList.every((input) => input.validity.valid);
    if (this.isFormValid) {
      this.button.disabled = false;
      this.button.classList.remove(inactiveButtonClass);
    } else {
      this.button.disabled = true;
      this.button.classList.add(inactiveButtonClass);
    }
  }
}
