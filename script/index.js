// text
const profileName = document.querySelector(".profile__info");
const profileSubInfo = document.querySelector(".profile__sub-info");
//buttons
const popup =document.querySelector("popup");
const profileEdditor = document.querySelector(".profile__edit-button");
const ProfileAddCard = document.querySelector(".profile__add-button")
const closeButton = document.querySelectorAll(".popup__close-button");

//popups
const popUp =document.querySelectorAll(".popup");
const popUpProfileEdditor = document.querySelector(".popup_type_profile-edditor");
const popUpCardEdditor = document.querySelector(".popup_type_card-edditor");
//text changable fields
const nameChanger = document.querySelector(".popup__input_type_name");
const descriptionChanger = document.querySelector(".popup__input_type_description");
//end of variables*************************************************************************

//profile edditor oppener
function openProfileEdditor() {
  popUpProfileEdditor.classList.add("popup_oppened");
}
//card edditor oppener
function openCardEdditor() {
  popUpCardEdditor.classList.add("popup_oppened");
}

//end of functions**************************************************************************

// profile edditor btn
profileEdditor.addEventListener("click", () => {
  openProfileEdditor();
  nameChanger.value = profileName.textContent;
  descriptionChanger.value = profileSubInfo.textContent;
});

//card edditor btn
ProfileAddCard.addEventListener("click", () => {
  openCardEdditor();
  
});

//submit the changes and close pupup
//submit profile
popUpProfileEdditor.addEventListener("submit", (event) => {
  event.preventDefault();
  profileName.textContent = nameChanger.value;
  profileSubInfo.textContent = descriptionChanger.value;
});
//submit profile
popUpCardEdditor.addEventListener("submit", (event) => {
  event.preventDefault();
});
//close button
closeButton.forEach(btn => btn.addEventListener("click",() => {
  popUp.forEach(pop => pop.classList.remove("popup_oppened"))
  
}));

//end of EventListener***********************************************************************
