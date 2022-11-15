const profileEditBtn = document.querySelector(".profile__edit-button");
const popup = document.querySelector(".popup");
const profileName = document.querySelector(".profile__name");
const formInputName = document.querySelector('input[name="form__input_name"]');
const profileProfession = document.querySelector(".profile__workplace");
const formInputProfession = document.querySelector('input[name="form__input_workplace"]');
const formPlace = document.querySelector(".element");
const pictureTitle = document.querySelector('[name="pictureTitle]');
const pictureLink = document.querySelector('[name="pictureLink"]');
const elements = document.querySelector('.elements');
const AddButton = document.querySelector('.profile__add-button');
const editButton = document.querySelector('.profile__edit-button');
const popupAddPicture = document.querySelector('.popup_picture');
const likeButton = document.querySelectorAll('.element__like-button');
const popupPicture = document.querySelector('.popup__photo');
const imageFigure = document.querySelector('.figure__imgage');
const subtitleFigure = document.querySelector('.figure__subtitle');

const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
  ];

  function renderCard(container, item) {
    container.prepend(item);
  }
  
  function createCard(name, link) {
    const elementSample = document.querySelector('#element').content;
    const element = elementSample.querySelector('.elements').cloneNode(true);
    const image = element.querySelector('.element__image');
    const info = element.querySelector('.element__info');
    const buttonLike = element.querySelector('.element__like-button');
    const buttonTrash = element.querySelector('.element__trashbin-button');
  




function openPopup() {
    popup.classList.add("popup_opened");
}

function closePopup() {
    popup.classList.remove("popup_opened");
}

function addValueInValue() {
    formInputName.value = profileName.textContent;
    formInputProfession.value = profileProfession.textContent;
}

function formSubmitHandler(form) {
    form.preventDefault();
    profileName.textContent = formInputName.value;
    profileProfession.textContent = formInputProfession.value;
    closePopup();
}

popupButtontnClose.addEventListener("click", closePopup);
profileEditButton.addEventListener("click", () => {
    openPopup();
    addValueInValue();
});

popupForm.addEventListener("submit", formSubmitHandler);
