import { initialElements } from "./cards.js";
import { config, enableValidation } from "./validation.js";
//...............End Of Import Moduls....................................
const profileName = document.querySelector(".profile__info");
const profileSubInfo = document.querySelector(".profile__sub-info");
//text changable fields
const nameChanger = document.querySelector(".popup__input_type_name");
const descriptionChanger = document.querySelector(
  ".popup__input_type_description"
);
const cardName = document.querySelector(".popup__input_type_title");
const cardLink = document.querySelector(".popup__input_type_link");
//buttons
const openProfileEdditor = document.querySelector(".profile__edit-button");
const profileAddCard = document.querySelector(".profile__add-button");
const closeButtonList = document.querySelectorAll(".popup__close-button");


//popups
const popUpList = document.querySelectorAll(".popup");
const popUpProfileEdditor = document.querySelector(
  ".popup_type_profile-edditor"
);
const popUpCardEdditor = document.querySelector(".popup_type_card-edditor");
const popUpPreview = document.querySelector(".popup_type_preview");

//cards elements
const elementsPlace = document.querySelector(".elements");
const elementTemplate = document
  .querySelector(".elements__template")
  .content.querySelector(".elements__block");
//end of variables*************************************************************************

//popup open
function openPopUp(popUpList) {

  popUpList.classList.add("popup_oppened");
}
// card edditor
function createCardElement(elementData) {
  const element = elementTemplate.cloneNode(true);
  element.querySelector(".elements__title").textContent = elementData.name;
  element.querySelector(".elements__cover").style.backgroundImage = `url(${elementData.link})`;
  //remove element
  element.querySelector(".elements__trash").addEventListener("click", () => {
    element.remove();
  });
  //like btn
  element
    .querySelector(".elements__like")
    .addEventListener("click", (event) => {
      event.target.classList.toggle("elements__like_type_active");
    });
  //opne preview
  element.querySelector(".elements__cover").addEventListener("click", () => {
    openPopUp(popUpPreview);
    popUpPreview.querySelector(".popup__preview-text").textContent =
      elementData.name;
    popUpPreview.querySelector(".popup__preview").alt = elementData.name;
    popUpPreview.querySelector(".popup__preview").src = elementData.link;

  });

  return element;
}

initialElements.forEach((initialElements) => {
  elementsPlace.prepend(createCardElement(initialElements));
});

function newCardElement() {
  const addNewCard = createCardElement({
    name: cardName.value,
    link: cardLink.value,
  });
  elementsPlace.prepend(addNewCard);
}
//end of functions**************************************************************************

// profile edditor btn
openProfileEdditor.addEventListener("click", () => {
  openPopUp(popUpProfileEdditor);
  nameChanger.value = profileName.textContent;
  descriptionChanger.value = profileSubInfo.textContent;
});

//card edditor btn
profileAddCard.addEventListener("click", () => {
  openPopUp(popUpCardEdditor);
});
//end of btns**************************************************************************

//submit Card
popUpCardEdditor.addEventListener("submit", (event) => {
  event.preventDefault();
  newCardElement();
  closePopUp(popUpCardEdditor);
});

//submit profile
popUpProfileEdditor.addEventListener("submit", (event) => {
  event.preventDefault();
  profileName.textContent = nameChanger.value;
  profileSubInfo.textContent = descriptionChanger.value;
  closePopUp(popUpProfileEdditor);
});

//close elements
function closePopUpEsc(evt) {
  if (evt.key === "Escape") { closePopUp(popUpList) }
}

function closePopUp(evt) {
  popUpList.forEach((pop) => pop.classList.remove("popup_oppened"));
}
//Close Button
closeButtonList.forEach((btn) => btn.addEventListener("click", closePopUp));
//overlay close
popUpList.forEach((btn) => btn.addEventListener("click", e => {
  if (e.target == e.currentTarget) closePopUp(popUpList)
}));
//ESC close
document.addEventListener("keydown", closePopUpEsc)
//end of EventListener***********************************************************************