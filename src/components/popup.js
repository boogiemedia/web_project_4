export default class Popup {
  constructor(popupSelector) {
    this._popupElement = document.querySelector(popupSelector);
    this._handleEscClose = this._handleEscClose.bind(this);
  
  }
  _handleEscClose(evt) {
    if (evt.key === "Escape") {
      this.close();
    }
  }

  open() {
    this._popupElement.classList.add("popup_oppened");
    document.addEventListener("keyup", this._handleEscClose);
  }
  close() {
    this._popupElement.classList.remove("popup_oppened");
    document.removeEventListener("keyup", this._handleEscClose);
  }
  setEventListeners() {
    this._popupElement
      .querySelector(".popup__close-button")
      .addEventListener("click", () => {
        this.close();
      });
    this._popupElement.addEventListener("mousedown", (e) => {
      if (e.target == e.currentTarget) {
        this.close();
      }
    });
  }
  
}
