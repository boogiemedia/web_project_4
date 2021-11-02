// text
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
const profileEdditor = document.querySelector(".profile__edit-button");
const ProfileAddCard = document.querySelector(".profile__add-button");
const closeButton = document.querySelectorAll(".popup__close-button");
const SubmitBtn = document.querySelectorAll(".popup__save-button");
const trash = document.querySelectorAll(".elements__trash");
//popups
const popUp = document.querySelectorAll(".popup");
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

//Cards
const initialElements = [
  {
    name: "Yosemite Valley",
    link: "https://code.s3.yandex.net/web-code/yosemite.jpg",
  },
  {
    name: "Lake Louise",
    link: "https://code.s3.yandex.net/web-code/lake-louise.jpg",
  },
  {
    name: "Bald Mountains",
    link: "https://code.s3.yandex.net/web-code/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://code.s3.yandex.net/web-code/latemar.jpg",
  },
  {
    name: "Vanoise National Park",
    link: "https://code.s3.yandex.net/web-code/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://code.s3.yandex.net/web-code/lago.jpg",
  },
];

// end of card list****************************************************************************

//popyp open
function openPopUp(popUp) {
  popUp.classList.add("popup_oppened");
}

// card edditor
function addCardElement(elementData) {
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
  elementsPlace.prepend(addCardElement(initialElements));
});

function newCardElement() {
  const addNewCard = addCardElement({
    name: cardName.value,
    link: cardLink.value,
  });
  elementsPlace.prepend(addNewCard);
}
//end of functions**************************************************************************

// profile edditor btn
profileEdditor.addEventListener("click", () => {
  openPopUp(popUpProfileEdditor);
  nameChanger.value = profileName.textContent;
  descriptionChanger.value = profileSubInfo.textContent;
});

//card edditor btn
ProfileAddCard.addEventListener("click", () => {
  openPopUp(popUpCardEdditor);
});

//end of btns**************************************************************************

//submit Card
popUpCardEdditor.addEventListener("submit", (event) => {
  event.preventDefault();
  newCardElement();
});

//submit profile
popUpProfileEdditor.addEventListener("submit", (event) => {
  event.preventDefault();
  profileName.textContent = nameChanger.value;
  profileSubInfo.textContent = descriptionChanger.value;
});

//close elements
SubmitBtn.forEach((btn) =>
  btn.addEventListener("click", () => {
    popUp.forEach((pop) => pop.classList.remove("popup_oppened"));
  })
);
closeButton.forEach((btn) =>
  btn.addEventListener("click", () => {
    popUp.forEach((pop) => pop.classList.remove("popup_oppened"));
  })
);

//end of EventListener***********************************************************************
