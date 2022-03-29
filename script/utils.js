

export const popUp = document.querySelectorAll(".popup");


//...........End Of Constants..................

const closeButtonList = document.querySelectorAll(".popup__close-button");
closeButtonList.forEach((popup) =>
  popup.addEventListener("mousedown", closePopUp)
);

//overlay close
popUp.forEach((btn) =>
  btn.addEventListener("click", (e) => {
    if (e.target == e.currentTarget) closePopUp(popUp);
  })
);

export function openPopUp(popUp) {
  addEscEventListener();
  popUp.classList.add("popup_oppened");
}
export function closePopUp(evt) {
  const openedPopup = document.querySelector(".popup_oppened");
  openedPopup.classList.remove("popup_oppened");
  removeEscEventListener();
  formReset();

}

export function closePopUpEsc(evt) {
  if (evt.key === "Escape") {
    closePopUp(popUp);
  }
}

function formReset() {
  document.getElementById("form").reset();
}
function addEscEventListener() {
  document.addEventListener("keydown", closePopUpEsc);
}
function removeEscEventListener() {
  document.removeEventListener("keydown", closePopUpEsc);
}