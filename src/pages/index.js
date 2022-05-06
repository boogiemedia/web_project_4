//import avatarSrc from "../images/profile.jpg";
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

const elementsPlace = document.querySelector(".elements");
const nameChanger = document.querySelector(".popup__input_type_name");
const descriptionChanger = document.querySelector(
  ".popup__input_type_description"
);
const template = document.querySelector(".elements__template");
const profile = document.querySelector(".popup_type_profile-edditor");
const cardEditor = document.querySelector(".popup_type_card-editor");
const avatar = document.querySelector(".popup_type_change-profile-picture");
let userId = "";
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
editFormValidator.enableValidation();
addCardFormValidator.enableValidation();
avatarFormValidator.enableValidation();
//........................End of form Validator..............................................
const userInfo = new UserInfo({
  userNameSelector: ".profile__info",
  userJobSelector: ".profile__sub-info",
});
//......................End of user Info......................................
const deleteForm = new PopupWithSubmit(".popup_type_delete-card",  "yes","saving...",);

function createCard(data) {
  const card = new Card(
    data,
    template,
    (name, link) => {
      openPreview.open(name, link);
    },
    (id) => {
     deleteForm.setHandleSubmit(() => {
       deleteForm.showLoading()
        api.deleteCard(id).then((res) => {
          card.removeCard(res);
          deleteForm.close();
        })
        .catch((res)=> {console.log("we have a problem", res)})
        .finally(()=> deleteForm.hideLoading());
      });
      deleteForm.setEventListeners();
      deleteForm.open();
    },
    (id) => {
      api
        .addLike(id)
        .then((res)=> card.updateLikes(res.likes))
        .catch((id) => console.log("error in adding like", id));
    },
    (id) => {
      api
        .deleteLike(id)
        .then((res)=> card.updateLikes(res.likes))
        .catch((id) => console.log("error in removing  like",id));
    },
    userId
  );

  return card.createCardElement();
}

const cardSection = new Section((data) => {
  return createCard(data);
}, elementsPlace);
//..........................................
const api = new Api({
  baseUrl: "https://around.nomoreparties.co/v1/group-12",
  token: "3b0591f5-8d80-48af-bfb2-1499d5045304",
  "Content-Type": "application/json",
});
//initialization of cards
api.getInitialCards().then((res) => {
  cardSection.renderItems(res);
})
.catch((res)=> {console.log("error", res)})

//add new Card popUp
const addCardButton = document.querySelector(".profile__add-button");
const cardForm = new PopupWithForm(
  ".popup_type_card-editor",
  "Create",
  "Creating...",
  (data) => {
    cardForm.showLoading();
    api
      .addNewCard(data)
      .then((res) => {
        cardSection.addItem(createCard(res));
        cardForm.close();
      })
      .catch((res) => console.log("there is error in adding card", res ))
      .finally(() => {
        addCardFormValidator.toggleButtonState()
        cardForm.hideLoading();
      
      });
  }
);
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

api.getProfile().then((profile) => {
  userInfo.setUserInfo({ name: profile.name, about: profile.about });
  avatarImg.src = profile.avatar;
  userId = profile._id;
})
.catch((res)=> {console.log("error in getting profile info", res)})
//set profile info
const avatarImg = document.getElementById("profile-avatar");
const openProfileEditorButton = document.querySelector(".profile__edit-button");
const profileForm = new PopupWithForm(
  ".popup_type_profile-edditor",
  "save",
  "saving...",
  (profile) => {
    profileForm.showLoading();
    api
      .setProfile(profile)
      .then((profile) => {
        userInfo.setUserInfo(profile);
        profileForm.close();
      })
      .catch((res) => console.log("error in setting profile info", res))
      .finally(() => {
        profileForm.hideLoading();
       
      });
  }
);
profileForm.setEventListeners();
openProfileEditorButton.addEventListener("click", () => {
  editFormValidator.resetValidation();
  profileForm.open();
  const data = userInfo.getUserInfo();
  nameChanger.value = data.name;
  descriptionChanger.value = data.description;
});

// change avatar popup
const changeAvatarButton = document.querySelector(".profile__avatar-middle");
const avatarForm = new PopupWithForm(
  ".popup_type_change-profile-picture",
  "save",
  "saving...",

  (avatar) => {
    avatarForm.showLoading();
    api
      .changeAvatar(avatar)
      .then((res) => {
        avatarImg.src = res.avatar;
        avatarForm.close();
      })
      .catch((res) => console.log("houston we have a problem", res))
      .finally(() => {
        avatarForm.hideLoading();
        avatarFormValidator.toggleButtonState()
      });
  }
);
avatarForm.setEventListeners();
changeAvatarButton.addEventListener("click", () => {
  avatarFormValidator.resetValidation();
  avatarForm.open();
});

//..................end of profile....................................
