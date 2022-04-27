


export  default class Card {
  constructor(data, templateSelector, handleCardClick, handleDelete ) {
    this._name = data.name;
    this._link = data.link;
    this._id = data._id
    this._templateSelector = templateSelector;
    this._elementTemplate =
    this._templateSelector.content.querySelector(".elements__block");
    this._handleCardClick = handleCardClick;
    this._handleDelete = handleDelete;
    
    
  }

 removecard(){
   this._element.remove()
 }


  createCardElement() {
    this._element = this._elementTemplate.cloneNode(true);
    this._element.querySelector(".elements__title").textContent = this._name;
    this._element.querySelector(
      ".elements__cover"
    ).style.backgroundImage = `url(${this._link})`;
    
    //delete btn
    this._element.querySelector(".elements__trash")
    .addEventListener("click", () => {
      this._handleDelete(this._id)
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
      .addEventListener("click", () => this._handleCardClick( this._name, this._link)
      );
    return this._element;
  }
}
