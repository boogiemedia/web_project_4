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
  updateLikes(likes) {
    // set instance variable
    this._likes = likes;
    this._renderLikes();
  }
  _isLiked() {
    return this._likes.some((pers) => pers._id === this._userId);
  }

  _renderLikes() {
    if (this._isLiked()) {
      this._element
        .querySelector(".elements__like")
        .classList.add("elements__like_type_active");
    } else {
      this._element
        .querySelector(".elements__like")
        .classList.remove("elements__like_type_active");
    }
    const counter = this._element.querySelector(".elements__like-counter");
    counter.textContent = this._likes.length;
  }

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
    const likeButton = this._element.querySelector(".elements__like");
    // set _handleLike in the constructor
    likeButton.addEventListener("click", () => {
      if (this._isLiked()) {
        this._deleteLike(this._id);
      } else {
        this._handleLike(this._id);
      }
    });

    this._renderLikes();

    //opne preview
    this._element
      .querySelector(".elements__cover")
      .addEventListener("click", () =>
        this._handleCardClick(this._name, this._link)
      );

    return this._element;
  }
}
