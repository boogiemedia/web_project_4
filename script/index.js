import { initialElements } from "./initialElements.js";
import FormValidator from "./formValidator.js";
import Card from "./card.js";
import PopupWithImage from "./PopupWithImage.js";
import PopupWithForm from "./PopupWithForm .js";
import UserInfo from "./UserInfo .js";
import Section from "./section.js";
//...............End Of Import Moduls....................................
const section = new Section({items: initialElements, renderer: ()=> {console.log("data", data)}}, ".elements")

const userinfo = new UserInfo({
  userNameSelector: ".profile__info", 
  userJobSelector: ".profile__sub-info" })

const editForm = document.querySelector(".popup_type_profile-edditor");
const addCardPopUp = document.querySelector(".popup_type_card-editor")
const profileName = document.querySelector(".profile__info");
const profileSubInfo = document.querySelector(".profile__sub-info");
const elementsPlace = document.querySelector(".elements");
const nameChanger = document.querySelector(".popup__input_type_name");
const descriptionChanger = document.querySelector(
  ".popup__input_type_description"
);

const cardName = document.querySelector(".popup__input_type_title");
const cardLink = document.querySelector(".popup__input_type_link");
//..................End of variables..........................................

const settings = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__save-button",
  inactiveButtonClass: "popup__save-button_disabled",
  inputErrorClass: "popup__input_error",
};
//..............End Of settings.....................


const profile = document.querySelector(".popup_type_profile-edditor")
const card = document.querySelector(".popup_type_card-editor")
const editFormValidator = new FormValidator(settings, profile);
const addCardFormValidator = new FormValidator(settings, card);
editFormValidator.enableValidation();
addCardFormValidator.enableValidation();

//profile edditor handler
const openProfileEdditorButton = document.querySelector(".profile__edit-button");
const profileForm = new PopupWithForm(".popup_type_profile-edditor", (data) => {
  userinfo.setUserInfo(data)
  //profileName.textContent = nameChanger.value;
  //profileSubInfo.textContent = descriptionChanger.value;
})
profileForm.setEventListeners()
openProfileEdditorButton.addEventListener("click", () => {
  editFormValidator.resetValidation();
  profileForm.open();
  const data =userinfo.getUserInfo()
  nameChanger.value = data.name
  descriptionChanger.value = data.description
});
//.........................end of profile edditor............................

//new Card popUp
const addCardButton = document.querySelector(".profile__add-button");
const cardForm = new PopupWithForm(".popup_type_card-editor", ()=>{renderCard({
  name: cardName.value,
  link: cardLink.value,
});})
cardForm.setEventListeners()
addCardButton.addEventListener("click", ()=> {
  editFormValidator.resetValidation()
  cardForm.open()
})

//.........................end Of Form Validation..................................
// card edditor
const openPreview = new PopupWithImage(".popup_type_preview")
openPreview.setEventListeners()
const template = document.querySelector(".elements__template");
const renderCard = (cardData) => {
  const card = new Card(cardData, template, (text, link) => {openPreview.open(text, link)
  console.log( text, link)
  }).createCardElement();
  elementsPlace.prepend(card);
};
initialElements.forEach((initialElement) => {
  renderCard(initialElement);
});
//.......................................end of cards..................................................

