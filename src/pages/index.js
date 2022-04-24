import avatarSrc from "../images/profile.jpg";
import "./index.css";
import Api from "../components/Api.js";
import { initialElements } from "../utils/initialElements.js";
import FormValidator from "../components/formValidator.js";
import Card from "../components/card.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm .js";
import UserInfo from "../components/UserInfo .js";
import Section from "../components/section.js";
//...............End Of Import Moduls....................................
const avatarimg = document.getElementById("profile-avatar");
avatarimg.src = avatarSrc
//..................end of src list.....................................
const elementsPlace = document.querySelector(".elements");
const nameChanger = document.querySelector(".popup__input_type_name");
const descriptionChanger = document.querySelector(".popup__input_type_description");
const cardName = document.querySelector(".popup__input_type_title");
const cardLink = document.querySelector(".popup__input_type_link");
//..................End of variables..........................................
const userInfo = new UserInfo({
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
const openProfileEditorButton = document.querySelector(".profile__edit-button");
const profileForm = new PopupWithForm(".popup_type_profile-edditor", (data) => {
  userInfo.setUserInfo(data)
})
profileForm.setEventListeners()
openProfileEditorButton.addEventListener("click", () => {
  
  editFormValidator.resetValidation();
  profileForm.open();
  const data = userInfo.getUserInfo()
  nameChanger.value = data.name
  descriptionChanger.value = data.description
});
//.........................end of profile popup............................

//add new Card popUp
const addCardButton = document.querySelector(".profile__add-button");
const cardForm = new PopupWithForm(".popup_type_card-editor", ()=>{
  const card = generateCard({
  name: cardName.value,
  link: cardLink.value,
}); 
section.addItem(card)
})
cardForm.setEventListeners()
addCardButton.addEventListener("click", ()=> {
  editFormValidator.resetValidation()
  cardForm.open()
})

// card preview popup
const openPreview = new PopupWithImage(".popup_type_preview")
openPreview.setEventListeners()
//......................................... end of popups......................................
const api = new Api({
  baseUrl: "https://around.nomoreparties.co/v1/group-12",
  token: "3b0591f5-8d80-48af-bfb2-1499d5045304",
    "Content-Type": "application/json"
}); 

api.getInitialCards()
.then((data) => new Section({items: data, renderer: (data)=> 
  {renderCard(data)}}, elementsPlace)
.render()
)
 

const template = document.querySelector(".elements__template");
const renderCard = (cardData) => {
 const card = generateCard(cardData)
  elementsPlace.prepend(card);
};
const generateCard = (cardData) =>{
  return new Card(cardData, template, (text, link) => {openPreview.open(text, link)
  }).createCardElement();
}
//.......................................end of cards rendering..................................................


