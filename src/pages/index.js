//import avatarSrc from "../images/profile.jpg";
import "./index.css";
import Api from "../components/Api.js";
import FormValidator from "../components/formValidator.js";
import  Card  from "../components/card.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm .js";
import UserInfo from "../components/UserInfo .js";
import Section from "../components/section.js";
import PopupWithSubmit from "../components/popupWithSubmit.js";
//...............End Of Import Moduls....................................

const elementsPlace = document.querySelector(".elements");
const nameChanger = document.querySelector(".popup__input_type_name");
const descriptionChanger = document.querySelector(
  ".popup__input_type_description"
);
const template = document.querySelector(".elements__template");
const profile = document.querySelector(".popup_type_profile-edditor");
const cardEditor = document.querySelector(".popup_type_card-editor");
const avatar = document.querySelector(".popup_type_change-profile-picture");
const trash = document.querySelector(".popup_type_delete-card");
let userId =""
//..................End of selectors..........................................
const settings = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__save-button",
  inactiveButtonClass: "popup__save-button_disabled",
  inputErrorClass: "popup__input_error",
};
//..............End Of settings................................................
const editFormValidator = new FormValidator(settings, profile);
const addCardFormValidator = new FormValidator(settings, cardEditor);
const avatarFormValidator = new FormValidator(settings, avatar);
const deleteFormValidator = new FormValidator(settings, trash);
editFormValidator.enableValidation();
addCardFormValidator.enableValidation();
avatarFormValidator.enableValidation();
deleteFormValidator.enableValidation();
//........................End of form Validator..............................................
const userInfo = new UserInfo({
  userNameSelector: ".profile__info",
  userJobSelector: ".profile__sub-info",
});
//......................End of user Info......................................
const cardSection = new Section((data)=>  
  {
    const card = new Card(data,
       template,
        (name, link) => {openPreview.open(name, link);}, 
    (id) => { 
      const deleteForm = new PopupWithSubmit(".popup_type_delete-card", () =>{
        api.deleteCard(id)
        .then(res =>{
          card.removecard()
        })
      });
deleteForm.setEventListeners()
deleteForm.open()

    },
    userId );
  return card.createCardElement()
}
,elementsPlace)

const api = new Api({
  baseUrl: "https://around.nomoreparties.co/v1/group-12",
  token: "3b0591f5-8d80-48af-bfb2-1499d5045304",
  "Content-Type": "application/json",
});
api.getInitialCards()
.then((res) =>{
  cardSection.renderItems(res)
}
)
//add new Card popUp
const addCardButton = document.querySelector(".profile__add-button");
const cardForm = new PopupWithForm(".popup_type_card-editor", (data) => {
  api.addNewCard(data)
  .then((res) => {
    const addCard = new Card(
        res,
        template,
        () => {
          openPreview.open(data)
        },
        (id) =>{const deleteForm = new PopupWithSubmit(".popup_type_delete-card", () =>{
          api.deleteCard(id)
          .then(res =>{
            addCard.removecard()
          })
        });
  deleteForm.setEventListeners()
  deleteForm.open()});
        cardSection.addItem(addCard.createCardElement());   
  },
  userId);
  cardForm.close()
});
cardForm.setEventListeners();
addCardButton.addEventListener("click", () => {
  editFormValidator.resetValidation();
  cardForm.open();
});

// card preview popup
const openPreview = new PopupWithImage(".popup_type_preview");
openPreview.setEventListeners();
//.................end of Cards....................................

//Get profile info
let avatarImg = document.getElementById("profile-avatar");

api.getInitialProfile().then((profile) => {
  userInfo.setUserInfo({ name: profile.name, about: profile.about });
avatarImg.src = profile.avatar
userId = profile._id
});
//set profile info
const openProfileEditorButton = document.querySelector(".profile__edit-button");
const profileForm = new PopupWithForm(".popup_type_profile-edditor", (profile) => {
  api.setInitialProfile(profile).then((profile)=>{
    userInfo.setUserInfo(profile);
    profileForm.close()
 })

});
profileForm.setEventListeners();
openProfileEditorButton.addEventListener("click", () => {
  editFormValidator.resetValidation();
  profileForm.open();
  const data = userInfo.getUserInfo();
  nameChanger.value = data.name;
  descriptionChanger.value = data.description;
});

// change avatar popup
const changeAvatarButton = document.querySelector(".profile__avatar");
const avatarForm = new PopupWithForm(
  ".popup_type_change-profile-picture",
  (avatar) => {
    api.changeavatar(avatar)
.then((res)=>{
  avatarImg.src = res.avatar
  avatarForm.close()
})
  }
);
avatarForm.setEventListeners();
changeAvatarButton.addEventListener("click", () => {
  editFormValidator.resetValidation();
  avatarForm.open();
});
//..................end of profile.............................................

