




export const editForm = document.querySelector(".popup_type_profile-edditor");
export const addCardForm = document.querySelector(".popup_type_card-editor");

export const profileName = document.querySelector(".profile__info");
export const profileSubInfo = document.querySelector(".profile__sub-info");

export const elementsPlace = document.querySelector(".elements");
export const cardName = document.querySelector(".popup__input_type_title");
export const cardLink = document.querySelector(".popup__input_type_link");

export const popUpcardEditor = document.querySelector(".popup_type_card-editor");
export const popUpProfileEdditor = document.querySelector(".popup_type_profile-edditor");
export const popUpPreview = document.querySelector(".popup_type_preview");
export const popUpList = document.querySelectorAll(".popup");

export const nameChanger = document.querySelector(".popup__input_type_name");
export const descriptionChanger = document.querySelector(".popup__input_type_description");


//...........End Of Constants..................

const closeButtonList = document.querySelectorAll(".popup__close-button");
closeButtonList.forEach((btn) => btn.addEventListener("click", closePopUp));

//overlay close
popUpList.forEach((btn) => btn.addEventListener("click", e => {
  if (e.target == e.currentTarget) closePopUp(popUpList)
}));




export function openPopUp(popUpList) {
  addEsc()
  popUpList.classList.add("popup_oppened");
}

function addEsc() {
  document.addEventListener("keydown", closePopUpEsc)
}
function removeEsc() {
  document.removeEventListener("keydown", closePopUpEsc 
  )
}

export function closePopUp(evt) {
  popUpList.forEach((pop) => pop.classList.remove("popup_oppened"));
  removeEsc()
}
export function closePopUpEsc(evt) {
  if (evt.key === "Escape") {
    closePopUp(popUpList)
  }
}