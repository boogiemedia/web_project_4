const popUpPreview = document.querySelector(".popup_type_preview");
const cardName = document.querySelector(".popup__input_type_title");
const cardLink = document.querySelector(".popup__input_type_link");
const templateSelector = document
  .querySelector(".elements__template");
export default class Card {
  constructor(data, templateSelector) {
      this._name = data.name;
      this._link = data.link;
      this._templateSelector = templateSelector;
      this._cardTemplate = document
        .querySelector(this._templateSelector)
        .content
        .querySelector(".elements__block")
  }
        
  
      _getTemplate() {
        this._cardElement = this._cardTemplate.cloneNode(true);
        return this._cardElement;
      }
      _setEventListeners(){

      }

      _handleLike(){}
      _hansleDeleteCard(){}
      _handlePreviewPicture(){}

      generateCard(){
        this._element = _getTemplate();
        this._setEventListeners();

        this._element.querySelector(".elements__title").textContent = this._name;
        this._element.querySelector(".elements__cover").style.backgroundImage = `url(${this._link})`;
        return this.generateCard()
      }
    }








