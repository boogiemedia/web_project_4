export default class FormValidator {
    constructor(settings, form) {
        this.settings = settings;
        this.form = form;
    }
    resetValidation() {
        this.inputList.forEach(input => {
            this._hideError(input)
            input.classList.remove(this.settings.inputErrorClass);

        })
    }
    enableValidation() {
        this.form.addEventListener('submit', (e) => {
            e.preventDefault()
        });
        this._setEventListeners(this.form);
    }
    _showError(input) {
        const errorElement = this.form.querySelector(`#${input.id}-error`)
        errorElement.textContent = input.validationMessage
    }
    _hideError(input) {
        const errorElement = this.form.querySelector(`#${input.id}-error`)
        errorElement.textContent = ' '
    }
    _checkValidity(input) {
        const { inputErrorClass } = this.settings;
        if (input.validity.valid) {
            input.classList.remove(inputErrorClass);
            this._hideError(input)
        }
        else {
            input.classList.add(inputErrorClass);
            this._showError(input)
        }
    }
    _setEventListeners = () => {
        const { inputSelector, submitButtonSelector, formSelector } = this.settings
        this.inputList = [...this.form.querySelectorAll(inputSelector)]
        const button = this.form.querySelector(submitButtonSelector)
        this.inputList.forEach(input => {
            input.addEventListener('input', () => {
                this._checkValidity(input)
                this._toggleButtonState(this.inputList, button)
            });
        });

    };
    _checkValidity(input) {
        const { inputErrorClass } = this.settings;
        if (input.validity.valid) {
            input.classList.remove(inputErrorClass);
            this._hideError(input)
        }
        else {
            input.classList.add(inputErrorClass);
            this._showError(input)
        }
    }
    _toggleButtonState(inputList, button) {
        const { inactiveButtonClass } = this.settings;
        const isFormValid = this.inputList.every(input => input.validity.valid)
        if (isFormValid) {
            button.disabled = false
            button.classList.remove(inactiveButtonClass)
        }
        else {
            button.disabled = true
            button.classList.add(inactiveButtonClass)
        }
    }
}