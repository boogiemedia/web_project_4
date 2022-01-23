const config = {
    formSelector: ".popup__form",
    inputSelector: ".popup__input",
    submitButtonSelector: ".popup__save-button",
    inactiveButtonClass: "popup__save-button_disabled",
    inputErrorClass: "popup__input_error",
}
function enableValidation(settings) {
    const { formSelector, inputSelector, submitButtonSelector, inactiveButtonClass, inputErrorClass } = settings
    const forms = [...document.querySelectorAll(formSelector)]
    forms.forEach(form => {
        addEventListener('submit', (e) => e.preventDefault())
        const inputs = [...form.querySelectorAll(inputSelector)]
        const button = form.querySelector(submitButtonSelector)
        inputs.forEach(input => {
            input.addEventListener('input', () => {
                checkValidity(input)
                toggleButtonState(inputs, button)
            })
        })
    })
    function showError(input) {
        const errorElement = document.querySelector(`#${input.id}-error`)
        errorElement.textContent = input.validationMessage
    }
    function hideError(input) {
        const errorElement = document.querySelector(`#${input.id}-error`)
        errorElement.textContent = ' '
    }
    function checkValidity(input) {
        if (input.validity.valid) {
            input.classList.remove(inputErrorClass);
            hideError(input)
        }
        else {
            input.classList.add(inputErrorClass);
            showError(input)
        }
    }
    function toggleButtonState(inputs, button) {
        const isFormValid = inputs.every(input => input.validity.valid)
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
enableValidation(config);
export { enableValidation };
