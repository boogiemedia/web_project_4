// text
const profileName = document.querySelector(".profile__info");
const profileSubInfo = document.querySelector(".profile__sub-info");
//buttons
const profileEdditor = document.querySelector(".profile__edit-button");
const popup = document.querySelector(".popup");
const closeButton = document.querySelector(".popup__close-button");
//text changable fields
const nameChanger = document.querySelector(".popup__input_type_name");
const descriptionChanger = document.querySelector(".popup__input_type_description");

profileEdditor.addEventListener("click", () => {
  openPopup();
  nameChanger.value = profileName.textContent;
  descriptionChanger.value = profileSubInfo.textContent;
});

popup.addEventListener("submit", (Event) => {
  Event.preventDefault();
  closePopup();
  profileName.textContent = nameChanger.value;
  profileSubInfo.textContent = descriptionChanger.value;
});
function openPopup() {
  popup.classList.add("popup_oppened");
}

closeButton.addEventListener("click", () => {
  closePopup();
});

function closePopup() {
  popup.classList.remove("popup_oppened");
}
