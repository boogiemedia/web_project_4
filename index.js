
// text 
const profileName = document.querySelector(".profile__info");
const profileSubInfo = document.querySelector(".profile__sub-info");
//buttons
const profileEdditor = document.querySelector(".profile__edit-button");
const popup = document.querySelector(".popup");
const closeButton = document.querySelector(".popup__close-button");
const submitButton = popup.querySelector('.popup__save-button')
//text changable fields
const nameChanger = document.querySelector('.popup__input_type_name');
const descriptionChanger = document.querySelector('.popup__input_type_description');

profileEdditor.addEventListener("click", () => {
    nameChanger.value = profileName.textContent;
    descriptionChanger.value = profileSubInfo.textContent;
  openPopup();
});
submitButton.addEventListener("click", () => {
    profileName.textContent = nameChanger.value;
    profileSubInfo.textContent = descriptionChanger.value;
    closePopup();
})
function openPopup() {
  popup.classList.add("popup_oppened");
}

closeButton.addEventListener("click", () => {
    closePopup()
})

function closePopup() {
    popup.classList.remove("popup_oppened");
}
