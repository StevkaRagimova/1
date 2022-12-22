import { popupFigure, openPopup, closePopup } from "./PopupUtils.js"
import { initialValue, popupCard } from "./CardsValue.js";
import { Card } from "./Card.js";
import { FormValidator } from "./FormValidator.js";

const popupConfig = {
  formSelector: '.form',
  inputSelector: '.form__input',
  submitButtonSelector: '.form__button',
  inactiveButtonClass: 'form__button_inactive',
  inputErrorClass: 'form__input_type_error',
  errorClass: 'form__input-error_active'
};

const profileEditBtn = document.querySelector('.profile__edit-button');
const profileName = document.querySelector('.profile__name');
const profileProfession = document.querySelector('.profile__workplace');
const addButton = document.querySelector('.profile__add-button');

const popupProfile = document.querySelector('.popup_profile');
const closeProfileForm = popupProfile.querySelector('.popup__button-close');
const formInputName = document.querySelector('input[name="form__input_name"]');
const formInputProfession = document.querySelector('input[name="form__input_workplace"]');
const formProfile = document.querySelector('[name="profile"]');
const popupProfileValidation = new FormValidator(popupConfig, popupProfile);

const formCard = document.querySelector('.popup_picture');
const inputElementTitle = document.querySelector('input[name="pictureTitle"]');
const inputElementLink = document.querySelector('input[name="pictureLink"]')
const closeCardForm = formCard.querySelector('.popup__button-close');
const popupCardValidation = new FormValidator(popupConfig, popupCard);

const closePopupFigure = popupFigure.querySelector('.popup__button-close');

const galleryElements = document.querySelector('.elements');
const elementSample = '#element';

function createNewCard(data) {
  const newCard = new Card(data, elementSample);
  return newCard;
};

function renderCard(card) {
  galleryElements.prepend(card.fillCard());
};

initialValue.forEach((item) => {
  const createdCard = createNewCard(item);
  renderCard(createdCard);
});

popupCardValidation.enableValidation();
popupProfileValidation.enableValidation();

formCard.addEventListener('submit', evt => {
  evt.preventDefault();
  const userValue = {
    name: inputElementTitle.value,
    link: inputElementLink.value
  };
  const userCard = createNewCard(userValue);
  createNewCard(userCard);
  renderCard(userCard);
  closePopup(popupCard);
  evt.target.reset();
});

profileEditBtn.addEventListener('click', () => {
  formInputName.value = profileName.textContent;
  formInputProfession.value = profileProfession.textContent;
  openPopup(popupProfile);
});

closeProfileForm.addEventListener('click', () => {
  closePopup(popupProfile);
});

formProfile.addEventListener('submit', (event) => {
  event.preventDefault();
  profileName.textContent = formInputName.value;
  profileProfession.textContent = formInputProfession.value;
  closePopup(popupProfile);
});

addButton.addEventListener('click', () => {
  popupCardValidation.disableCreateButton()
  openPopup(popupCard);
});

closeCardForm.addEventListener('click', () => {
  closePopup(popupCard);
});

closePopupFigure.addEventListener('click', () => {
  closePopup(popupFigure);
});