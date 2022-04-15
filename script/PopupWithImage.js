import Popup from "./popup.js";

export default class PopupWithImage extends Popup {

    open(text, link) {
        this._popupElement.querySelector(".popup__preview").src = link;
        this._popupElement.querySelector(".popup__preview-text").textContent = text;
        super.open()
    }
}