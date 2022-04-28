import "./index.css";
import Api from "../components/Api.js";
import FormValidator from "../components/formValidator.js";
import Card from "../components/card.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm .js";
import UserInfo from "../components/UserInfo .js";
import Section from "../components/section.js";
import PopupWithSubmit from "../components/popupWithSubmit.js";
//...............End Of Import Moduls....................................
//const avatarSrc =
  "https://pictures.s3.yandex.net/frontend-developer/common/ava.jpg";
//const avatarimg = document.getElementById("profile-avatar");
//avatarimg.src = avatarSrc;
//..................end of src list.....................................
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
  avatarSelector: "profile-avatar",
  avatar: avatar
});

//......................End of user Info......................................

const cardSection = new Section((data) => {
  const card = new Card(
    data,
    template,
    (name, link) => {
      openPreview.open(name, link);
    },
    (id) => {
      const deleteForm = new PopupWithSubmit(".popup_type_delete-card", () => {
        api.deleteCard(id).then((res) => {
          addCard.removecard();
        });
      });
      deleteForm.setEventListeners();
      deleteForm.open();
    }
  );
  return card.createCardElement();
}, elementsPlace);

const api = new Api({
  baseUrl: "https://around.nomoreparties.co/v1/group-12",
  token: "3b0591f5-8d80-48af-bfb2-1499d5045304",
  "Content-Type": "application/json",
});
//.................end of api config....................................
api.getInitialCards().then((res) => {
  cardSection.renderItems(res);
});
api.getInitialProfile().then((profile) => {
  console.log(profile.avatar, profile.name, profile.about)
  userInfo.setUserInfo({ name: profile.name, aboutMe: profile.about, avatar: profile.avatar });
  console.log(userInfo)
})

//profile popup
const openProfileEditorButton = document.querySelector(".profile__edit-button");
const profileForm = new PopupWithForm(".popup_type_profile-edditor", (data) => {
  userInfo.setUserInfo(data);
});
profileForm.setEventListeners();
openProfileEditorButton.addEventListener("click", () => {
  editFormValidator.resetValidation();
  profileForm.open();
  const data = userInfo.getUserInfo();
  nameChanger.value = data.name;
  descriptionChanger.value = data.aboutMe;
});

//add new Card popUp
const addCardButton = document.querySelector(".profile__add-button");
const cardForm = new PopupWithForm(".popup_type_card-editor", (data) => {
  api.addNewCard(data).then((res) => {
    const addCard = new Card(
      res,
      template,
      () => {
        openPreview.open(data);
      },
      (id) => {
        const deleteForm = new PopupWithSubmit(
          ".popup_type_delete-card",
          () => {
            api.deleteCard(id).then((res) => {
              addCard.removecard()();
            });
          }
        );
        deleteForm.setEventListeners();
        deleteForm.open();
      }
    );
    cardSection.addItem(addCard.createCardElement());
  });
});
cardForm.setEventListeners();
addCardButton.addEventListener("click", () => {
  editFormValidator.resetValidation();
  cardForm.open();
});

// card preview popup
const openPreview = new PopupWithImage(".popup_type_preview");
openPreview.setEventListeners();

// change avatar popup
const changeAvatarButton = document.querySelector(".profile__avatar");
const avatarForm = new PopupWithForm(
  ".popup_type_change-profile-picture",
  () => {}
);
avatarForm.setEventListeners();
changeAvatarButton.addEventListener("click", () => {
  editFormValidator.resetValidation();
  avatarForm.open();
});


userInfo.getUserInfo()