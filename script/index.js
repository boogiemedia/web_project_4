import {editForm, elementsPlace,addCardForm, popUpcardEditor, profileName, popUpProfileEdditor, profileSubInfo, cardName, cardLink, openPopUp, closePopUp, popUpList, nameChanger, descriptionChanger } from "./utils.js"
import {initialElements} from "./initialElements.js";
import FormValidator from "./formValidator.js";
import Card from "./cards.js";

//...............End Of Import Moduls....................................
const settings = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__save-button",
  inactiveButtonClass: "popup__save-button_disabled",
  inputErrorClass: "popup__input_error",}
//..............End Of settings.....................

const editFormValidator = new FormValidator(settings, editForm);
const addCardFormValidator = new FormValidator(settings, addCardForm);
editFormValidator.enableValidation()
addCardFormValidator.enableValidation()
//.........................end Of Form Validation..................................


 //open profile edditor
const openProfileEdditorButton = document.querySelector(".profile__edit-button");
openProfileEdditorButton.addEventListener("click", () => {
  editFormValidator.resetValidation()
  openPopUp(popUpProfileEdditor);
  nameChanger.value = profileName.textContent;
  descriptionChanger.value = profileSubInfo.textContent;});

  //submit profile
popUpProfileEdditor.addEventListener("submit", (event) => {
  event.preventDefault();
  profileName.textContent = nameChanger.value;
  profileSubInfo.textContent = descriptionChanger.value;
  closePopUp(popUpProfileEdditor);});
//.........................end of profile edditor............................

//new Card popUp
const profileAddCardButton = document.querySelector(".profile__add-button");
profileAddCardButton.addEventListener("click", () => {
  addCardFormValidator.resetValidation()
  openPopUp(popUpcardEditor);
});

// card edditor
const templateSelector = document
  .querySelector(".elements__template");
initialElements.forEach((initialElement) => {
  elementsPlace.prepend(new Card(initialElement,templateSelector).createCardElement());
});
  function addNewCardElement() {
    const addNewCard = new Card({
      name: cardName.value,
      link: cardLink.value,
    }, templateSelector );
    elementsPlace.prepend(addNewCard.createCardElement())}

    popUpcardEditor.addEventListener("submit", (event) => {
      event.preventDefault();
      addNewCardElement();
      closePopUp(popUpcardEditor);});
  //.......................................end of cards..................................................