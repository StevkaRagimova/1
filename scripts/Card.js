import { popupFigure, subtitleFigure, imageFigure, openPopup } from "./PopupUtils.js";
export class Card {
  constructor(data, elementSample) {
    this._name = data.name;
    this._link = data.link;
    this._cardSelector = elementSample;
    this._item = this._getCardTemplate();
    this._buttonLike = this._item.querySelector('.element__like-button');
    this._title = this._item.querySelector('.element__title');
    this._image = this._item.querySelector('.element__image');
    this._trashbinButton = this._item.querySelector('.element__trashbin-button');
  }
  
  _getCardTemplate() {
  const newItem = document.querySelector(this._cardSelector).content.querySelector('.element').cloneNode(true);
  return newItem;
  };
  fillCard() {
    this._title.textContent = this._name;
    this._image.src = this._link;
    this._image.alt = this._name;
    this._setEventListeners();
    return this._item;
  }
  
  _openPopup() {
    openPopup(popupFigure);
    imageFigure.setAttribute('src', this._link);
    imageFigure.setAttribute('alt', this._name);
    subtitleFigure.innerText = this._name;
  }
  _toggleLikeButton() {
    this._buttonLike.classList.toggle('element__button_active');
  };
  _removeCard() {
    this._item.remove();
    this._item = null;
  };
  _setEventListeners() {
    this._image.addEventListener('click', _event => {
      this._openPopup();
    });
    this._buttonLike.addEventListener('click', (evt) => {
      this._toggleLikeButton(evt);
    });
    this._trashbinButton.addEventListener('click', () => {
      this._removeCard();
    });
  }
};