import {openPopUp } from "./utils.js";
const popUpPreview = document.querySelector(".popup_type_preview");

export default class Card {
  constructor(data, templateSelector) {
    this._name = data.name;
    this._link = data.link;
    this._templateSelector = templateSelector;
    this._elementTemplate =
    this._templateSelector.content.querySelector(".elements__block");
  }

  createCardElement() {
    this._element = this._elementTemplate.cloneNode(true);
    this._element.querySelector(".elements__title").textContent = this._name;
    this._element.querySelector(
      ".elements__cover"
    ).style.backgroundImage = `url(${this._link})`;

    //remove element
    this._element
      .querySelector(".elements__trash")
      .addEventListener("click", () => {
        this._element.remove();
      });

    //like btn
    this._element
      .querySelector(".elements__like")
      .addEventListener("click", (event) => {
        event.target.classList.toggle("elements__like_type_active");
      });

    //opne preview
    this._element
      .querySelector(".elements__cover")
      .addEventListener("click", () => {
        openPopUp(popUpPreview);
        popUpPreview.querySelector(".popup__preview-text").textContent =
          this._name;
        popUpPreview.querySelector(".popup__preview").alt = this._name;
        popUpPreview.querySelector(".popup__preview").src = this._link;
      });
    return this._element;
  }
}
