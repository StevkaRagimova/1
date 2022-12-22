import { popupFigure, subtitleFigure, imageFigure, openPopup } from "./PopupUtils.js";
export class Card {
  constructor(data, elementSample) {
    this._name = data.name;
    this._link = data.link;
    this._cardSelector = elementSample;
  };
  _getCardTemplate() {
  const newItem = document.querySelector(this._cardSelector).content.querySelector('.element').cloneNode(true);
  return newItem;
  };
  fillCard() {
    this._item = this._getCardTemplate();
    this._item.querySelector('.element__title').textContent = this._name;
    this._item.querySelector('.element__image').src = this._link;
    this._setEventListeners();
    return this._item;
  };
  _openPopup() {
    openPopup(popupFigure);
    imageFigure.setAttribute('src', this._link);
    imageFigure.setAttribute('alt', this._name);
    subtitleFigure.innerText = this._name;
  };
  _toggleLikeButton(evt) {
    evt.target.classList.toggle('element__button_active');
  };
  _removeCard() {
    this._item.remove();
    this._item = null;
  };
  _setEventListeners() {
    this._item.querySelector('.element__image').addEventListener('click', event => {
      this._openPopup();
    });
    this._item.querySelector('.element__like-button').addEventListener('click', (evt) => {
      this._toggleLikeButton(evt);
    });
    this._item.querySelector('.element__trashbin-button').addEventListener('click', () => {
      this._removeCard();
    });
  }
};