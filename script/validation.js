function showError(input) {
    const errorElement = document.querySelector(`#${input.id}-error`)
    console.log("invalid", errorElement)
    errorElement.textContent = input.validationMessage
}
function hideError(input) {
    const errorElement = document.querySelector(`#${input.id}-error`)
    console.log("invalid", errorElement)
    errorElement.textContent = ' '
}
//check input validity
function checkValidity(input) {
    if (input.validity.valid) { hideError(input) }
    else { showError(input) }
}
//Enable Validation
function enableValidation(settings) {
    //forms
    const forms = [...document.querySelectorAll('.popup__form')]
    //prevent default
    forms.forEach(form => {
        addEventListener('submit', (e) => e.preventDefault())
        //Inputs
        const inputs = [...form.querySelectorAll('.popup__input')]
        inputs.forEach(input => {
            input.addEventListener('input', () => {
                checkValidity(input)

            })
        })
    })
}
function toggleButtonState(inputs) {
    inputs.every(input => input.validity.valid)
}
const config = {
    formSelector: ".popup__form",
    inputSelector: ".popup__input",
    submitButtonSelector: ".popup__save-button",
    inactiveButtonClass: "popup__save-button_disabled",
    inputErrorClass: "popup__input_type_error",
    errorClass: "popup__error_visible"
}
enableValidation(config);