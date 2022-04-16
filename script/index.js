import { initialElements } from "./initialElements.js";
import FormValidator from "./formValidator.js";
import Card from "./card.js";
import PopupWithImage from "./PopupWithImage.js";
import PopupWithForm from "./PopupWithForm .js";
import UserInfo from "./UserInfo .js";
import Section from "./section.js";
//...............End Of Import Moduls....................................
const elementsPlace = document.querySelector(".elements");
const nameChanger = document.querySelector(".popup__input_type_name");
const descriptionChanger = document.querySelector(".popup__input_type_description");
const cardName = document.querySelector(".popup__input_type_title");
const cardLink = document.querySelector(".popup__input_type_link");
//..................End of variables..........................................
const userinfo = new UserInfo({
  userNameSelector: ".profile__info", 
  userJobSelector: ".profile__sub-info" })
  //......................End of user Info......................................
const settings = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__save-button",
  inactiveButtonClass: "popup__save-button_disabled",
  inputErrorClass: "popup__input_error",
};
//..............End Of settings................................................
const profile = document.querySelector(".popup_type_profile-edditor")
const card = document.querySelector(".popup_type_card-editor")
const editFormValidator = new FormValidator(settings, profile);
const addCardFormValidator = new FormValidator(settings, card);
editFormValidator.enableValidation();
addCardFormValidator.enableValidation();
//........................End of form Validator..............................................


//profile popup
const openProfileEdditorButton = document.querySelector(".profile__edit-button");
const profileForm = new PopupWithForm(".popup_type_profile-edditor", (data) => {
  userinfo.setUserInfo(data)
})
profileForm.setEventListeners()
openProfileEdditorButton.addEventListener("click", () => {
  
  editFormValidator.resetValidation();
  profileForm.open();
  const data = userinfo.getUserInfo()
  nameChanger.value = data.name
  descriptionChanger.value = data.description
});
//.........................end of profile popup............................

//add new Card popUp
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

// card preview popup
const openPreview = new PopupWithImage(".popup_type_preview")
openPreview.setEventListeners()
//......................................... end of popups......................................

const template = document.querySelector(".elements__template");
const renderCard = (cardData) => {
  const card = new Card(cardData, template, (text, link) => {openPreview.open(text, link)
  }).createCardElement();
  elementsPlace.prepend(card);
};


const section = new Section({items: initialElements, renderer: (data)=> 
  {renderCard(data)}}, elementsPlace)
section.render()
//.......................................end of cards rendering..................................................

