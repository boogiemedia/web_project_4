// text
const profileName = document.querySelector(".profile__info");
const profileSubInfo = document.querySelector(".profile__sub-info");
//text changable fields
const nameChanger = document.querySelector(".popup__input_type_name");
const descriptionChanger = document.querySelector(".popup__input_type_description");
//buttons
const popup =document.querySelector("popup");
const profileEdditor = document.querySelector(".profile__edit-button");
const ProfileAddCard = document.querySelector(".profile__add-button")
const closeButton = document.querySelectorAll(".popup__close-button");
//popups
const popUp =document.querySelectorAll(".popup");
const popUpProfileEdditor = document.querySelector(".popup_type_profile-edditor");
const popUpCardEdditor = document.querySelector(".popup_type_card-edditor");

//Cards
const initialElements = [
  {
    name: "Yosemite Valley",
    link: "https://code.s3.yandex.net/web-code/yosemite.jpg"
  },
  {
    name: "Lake Louise",
    link: "https://code.s3.yandex.net/web-code/lake-louise.jpg"
  },
  {
    name: "Bald Mountains",
    link: "https://code.s3.yandex.net/web-code/bald-mountains.jpg"
  },
  {
    name: "Latemar",
    link: "https://code.s3.yandex.net/web-code/latemar.jpg"
  },
  {
    name: "Vanoise National Park",
    link: "https://code.s3.yandex.net/web-code/vanoise.jpg"
  },
  {
    name: "Lago di Braies",
    link: "https://code.s3.yandex.net/web-code/lago.jpg"
  }
]; 
//cards elements
const elementsPlace = document.querySelector(".elements");
const elementTemplate = document.querySelector(".elements__template").content.querySelector(".elements__block");
//end of variables*************************************************************************

//profile edditor oppener
function openProfileEdditor() {
  popUpProfileEdditor.classList.add("popup_oppened");
}
//card edditor oppener
function openCardEdditor() {
  popUpCardEdditor.classList.add("popup_oppened");
}

function addCardElement (cardData) { //card {title, link}
  const element = elementTemplate.cloneNode(true);
  element.querySelector(".elements__title").textContent = elementData.name;
  element.querySelector(".elements__cover").style.backgorundImage = url`(${elementData.link})`;
  
  return element;
}
initialElements.forEach(initialElements =>{
  elementsPlace.prepend(addCardElement(initialElements));

})
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
//submit Card
popUpCardEdditor.addEventListener("submit", (event) => {
  event.preventDefault();
});
//close button
closeButton.forEach(btn => btn.addEventListener("click",() => {
  popUp.forEach(pop => pop.classList.remove("popup_oppened"))
  
}));

//end of EventListener***********************************************************************
