// text
const profileName = document.querySelector(".profile__info");
const profileSubInfo = document.querySelector(".profile__sub-info");
//buttons
const profileEdditor = document.querySelector(".profile__edit-button");
const popUp = document.querySelector(".popup");
const closeButton = document.querySelector(".popup__close-button");
//text changable fields
const nameChanger = document.querySelector(".popup__input_type_name");
const descriptionChanger = document.querySelector(".popup__input_type_description");
//end of variables*************************************************************************


function openPopup() {
  popUp.classList.add("popup_oppened");
}

function closePopup() {
  popUp.classList.remove("popup_oppened");
}
//end of functions**************************************************************************

//open profile edditor
profileEdditor.addEventListener("click", () => {
  openPopup();
  nameChanger.value = profileName.textContent;
  descriptionChanger.value = profileSubInfo.textContent;
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
