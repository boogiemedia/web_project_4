


export  default class Card {
  constructor(data, templateSelector, handleCardClick, handleDelete, userId,  ) {
    this._name = data.name;
    this._data = data
    this._link = data.link;
    this._likes =data.likes
    this._ownerId = data.owner._Id
    this._userId =userId
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
    //if ( this._ownerId !== this._userId){
      //this._element.querySelector(".elements__trash").style.display = "none";
    //}
    //delete btn
    this._element.querySelector(".elements__trash")
    .addEventListener("click", () => {
      this._handleDelete(this._id)
    });





    this._element.querySelector(".elements__like-counter").textContent= this._likes.length;

    //like btn
    this._element
      .querySelector(".elements__like")
      .addEventListener("click", (event) => {
        event.target.classList.toggle("elements__like_type_active");
        console.log(this._data, "user", this._userId)
      });

    //opne preview
    this._element
      .querySelector(".elements__cover")
      .addEventListener("click", () => this._handleCardClick( this._name, this._link)
      );
      console.log(this._userId)
    return this._element;
  }

}
