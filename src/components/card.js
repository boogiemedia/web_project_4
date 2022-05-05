export default class Card {
  constructor(
    data,
    templateSelector,
    handleCardClick,
    handleDelete,
    handleLike,
    deleteLike,
    userId
  ) {
    this._name = data.name;
    this._data = data;
    this._link = data.link;
    this._likes = data.likes;
    this._ownerId = data.owner._id;
    this._userId = userId;
    this._id = data._id;
    this._templateSelector = templateSelector;
    this._elementTemplate =
      this._templateSelector.content.querySelector(".elements__block");
    this._handleCardClick = handleCardClick;
    this._handleDelete = handleDelete;
    this._handleLike = handleLike;
    this._deleteLike = deleteLike;
  }
  removeCard() {
    this._element.remove();
  }
  // updateLikes(likes) { 
  //   // set instance variable
  //      this._likes = likes; 
  //      this._renderLikes(); 
  //  } 
  //  _isLiked() {
  // if() {}
  //  }
   
  //  _renderLikes() {
  //   // set likes counter content using this._likes
   
  //    if (this._isLiked()) {
  //      // add active class to like button
  //    } else {
  //      // remove active class from like button
  //    }
  //  }


  createCardElement() {
    this._element = this._elementTemplate.cloneNode(true);
    this._element.querySelector(".elements__title").textContent = this._name;
    this._element.querySelector(
      ".elements__cover"
    ).style.backgroundImage = `url(${this._link})`;
    if (this._ownerId !== this._userId) {
      this._element.querySelector(".elements__trash").style.display = "none";
    }

    //delete btn
    this._element
      .querySelector(".elements__trash")
      .addEventListener("click", () => {
        this._handleDelete(this._id);
      });

    const counter = this._element.querySelector(".elements__like-counter");
    counter.textContent = this._likes.length;

    //like btn



    //old version
    this._element
      .querySelector(".elements__like")
      .addEventListener("click", (event) => {
        const activeLike = event.target.classList.toggle(
          "elements__like_type_active"
        );
        if (activeLike) {
          this._handleLike(this._id);
          counter.textContent = this._likes.length + 1;
        } else {
          this._deleteLike(this._id);
          counter.textContent = this._likes.length;
        }
      });
    const liked = this._likes.some((pers) => pers._id === this._userId);

    if (liked) {
      this._element
        .querySelector(".elements__like")
        .classList.add("elements__like_type_active");
    }


    //opne preview
    this._element
      .querySelector(".elements__cover")
      .addEventListener("click", () =>
        this._handleCardClick(this._name, this._link)
      );

    return this._element;
  }
}
