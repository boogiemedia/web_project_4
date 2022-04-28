import Popup from "./popup.js";

export default class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector)
        this._popupPreview = ".popup__preview"
         
    }
    open(text, link) {
        this._popupElement.querySelector(this._popupPreview).src = link;
        this._popupElement.querySelector(".popup__preview-text").textContent = text;
        this._popupElement.querySelector(this._popupPreview).alt = text;
        super.open()
    }
}