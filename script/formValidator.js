class FormValidator {
    constructor(settings, formElement) {
        this.settings = settings
        this.formElement = formElement
    }
    setEventListeners = (formElement, inputSelector, submitButtonSelector, inactiveButtonClass, inputErrorClass)

    enableValidation() {
        this.formElement.addEventListener('submit', (e) => {
            e.preventDefault();
        })

    }
}

const settings = {
    inputSelector: ".popup__input",
    submitButtonSelector: ".popup__save-button",
    inactiveButtonClass: "popup__save-button_disabled",
    inputErrorClass: "popup__input_error",
}

const editForm = document.querySelector(".popup__form")
const addCardForm = document.querySelector(".popup__form")

const editFormValidator = new FormValidator(settings, editForm);
const addCardFormValidator = new FormValidator(settings, addCardForm);
