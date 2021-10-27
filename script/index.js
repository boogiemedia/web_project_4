// text
const profileName = document.querySelector(".profile__info");
const profileSubInfo = document.querySelector(".profile__sub-info");
//buttons
const profileEdditor = document.querySelector(".profile__edit-button");
const cardEdditor = document.querySelector(".profile__add-button");
const popUp = document.querySelectorAll(".popup");
const popUpPerson = document.querySelector(".popup_person");
const popupAdd = document.querySelector(".popup_card");
const closeButton = document.querySelectorAll(".popup__close-button");
//text changable fields
const nameChanger = document.querySelector(".popup__input_type_name");
const descriptionChanger = document.querySelector(".popup__input_type_description");
//end of variables*************************************************************************


function openPopupPerson() {
  popUpPerson.classList.add("popup_oppened");
}
function openPopupAdd() {
  popupAdd.classList.add("popup_oppened");
}

function closePopup() {
  popUp.classList.remove("popup_oppened");
}
//end of functions**************************************************************************

//open profile edditor
profileEdditor.addEventListener("click", () => {
  openPopupPerson();
  nameChanger.value = profileName.textContent;
  descriptionChanger.value = profileSubInfo.textContent;
});
//open Card edditor
cardEdditor.addEventListener("click", () => {
  openPopupAdd();
});

//submit the changes and close pupup
popUp.addEventListener("submit", (event) => {
  event.preventDefault();
  closePopup();
  profileName.textContent = nameChanger.value;
  profileSubInfo.textContent = descriptionChanger.value;
});
//close button
closeButton.addEventListener("click", () => {
  closePopup();
});

//end of EventListener***********************************************************************
