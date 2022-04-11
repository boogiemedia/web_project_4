import { openPopUp, closePopUp } from "./utils.js";
import { initialElements } from "./initialElements.js";
import FormValidator from "./formValidator.js";
import Card from "./card.js";
//...............End Of Import Moduls....................................

const editForm = document.querySelector(".popup_type_profile-edditor");
const addCardPopUp = document.querySelector(".popup_type_card-editor");

const profileName = document.querySelector(".profile__info");
const profileSubInfo = document.querySelector(".profile__sub-info");

const elementsPlace = document.querySelector(".elements");
const cardName = document.querySelector(".popup__input_type_title");
const cardLink = document.querySelector(".popup__input_type_link");

const popUpCardEditor = document.querySelector(".popup_type_card-editor");
const popupProfileEditor = document.querySelector(
  ".popup_type_profile-edditor"
);
const nameChanger = document.querySelector(".popup__input_type_name");
const descriptionChanger = document.querySelector(
  ".popup__input_type_description"
);
//..................End of variables..........................................

const settings = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__save-button",
  inactiveButtonClass: "popup__save-button_disabled",
  inputErrorClass: "popup__input_error",
};
//..............End Of settings.....................

const editFormValidator = new FormValidator(settings, editForm);
const addCardFormValidator = new FormValidator(settings, addCardPopUp);
editFormValidator.enableValidation();
addCardFormValidator.enableValidation();
//.........................end Of Form Validation..................................

//open profile edditor
const openProfileEdditorButton = document.querySelector(
  ".profile__edit-button"
);
openProfileEdditorButton.addEventListener("click", () => {
  editFormValidator.resetValidation();
  openPopUp(popupProfileEditor);
  nameChanger.value = profileName.textContent;
  descriptionChanger.value = profileSubInfo.textContent;
});

//submit profile
popupProfileEditor.addEventListener("submit", (event) => {
  event.preventDefault();
  profileName.textContent = nameChanger.value;
  profileSubInfo.textContent = descriptionChanger.value;
  closePopUp(popupProfileEditor);
});
//.........................end of profile edditor............................

//new Card popUp
const addCardButton = document.querySelector(".profile__add-button");
addCardButton.addEventListener("click", () => {
  addCardFormValidator.resetValidation();
  const formReset = addCardPopUp.querySelector('form').reset()
  addCardFormValidator.toggleButtonState()
  openPopUp(popUpCardEditor);
});

// card edditor
const template = document.querySelector(".elements__template");
const renderCard = (cardData) => {
  const card = new Card(cardData, template).createCardElement();
  elementsPlace.prepend(card);
};
initialElements.forEach((initialElement) => {
  renderCard(initialElement);
});

popUpCardEditor.addEventListener("submit", (event) => {
  event.preventDefault();
  renderCard({
    name: cardName.value,
    link: cardLink.value,
  });
  closePopUp(popUpCardEditor);
});
//.......................................end of cards..................................................
