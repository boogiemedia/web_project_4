import Popup from "./popup";

export default class PopupWithImage extends Popup {

    open(link, text) {
        const popupImage = popupElement.querySelector(".popup__preview").src = link;
        const popupCaption = popupElement.querySelector(".popup__preview").alt = text;
        super.open()
    }
}