const profileEditButton = document.querySelector(".profile__edit-button");
const popup = document.querySelector(".popup");
const profileName = document.querySelector(".profile__name");
const formInputName = document.querySelector('input[name="form__input_name"]');
const profileProfession = document.querySelector(".profile__workplace");
const formInputProfession = document.querySelector('input[name="form__input_workplace"]');
const formElement = document.querySelector('[name="element"]');
const pictureTitle = document.querySelector('[name="pictureTitle"]');
const pictureLink = document.querySelector('[name="pictureLink"]');
const elements = document.querySelector('.elements');
const AddButton = document.querySelector('.profile__add-button');
const editButton = document.querySelector('.profile__edit-button');
const popupAddPicture = document.querySelector('.popup_picture');
const likeButton = document.querySelectorAll('.element__like-button');
const popupPicture = document.querySelector('.popup__photo');
const imageFigure = document.querySelector('.figure__image');
const subtitleFigure = document.querySelector('.figure__subtitle');

const initial

Cards = [
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
  
  function createElement(name, link) {
    const elementSample = document.querySelector('#element').content;
    const element = elementSample.querySelector('.elements').cloneNode(true);
    const image = element.querySelector('.element__image');
    const info = element.querySelector('.element__info');
    const buttonLike = element.querySelector('.element__like-button');
    const buttonTrash = element.querySelector('.element__trashbin-button');
  
    image.src = link;
    image.alt = name;
    title.textContent = name;

    image.addEventListener('click', (event) => {
        openPopup(popupPicture);
        imageFigure.src = image.src;
        image.alt = title.textContent;
        subtitleFigure.textContent = title.textContent;
      });
      buttonTrash.addEventListener('click', (event) => event.target.closest('.element').remove());
      buttonLike.addEventListener('click', (event) => event.target.classList.toggle('element__button_active'));
    
      return element;
    }


    function handleEventClosePopup(event) {
        const popupActive = event.target.closest('.popup');
        const isTargetOverlay = event.target.classList.contains('popup_active');
        const isTargetButtonClose = event.target.classList.contains('popup__button-close');
      
        if (isTargetOverlay || isTargetButtonClose) {
          closePopup(popupActive);
        }
      }


function openPopup() {
    popup.classList.add("popup_opened");
    document.addEventListener('click', handleEventClosePopup);
}

function closePopup() {
    popup.classList.remove("popup_opened");
    document.removeEventListener('click', handleEventClosePopup);
}

function addValueInValue() {
    formInputName.value = profileName.textContent;
    formInputProfession.value = profileProfession.textContent;
    closePopup(popupProfile);
}


function changeValueElement() {
    inputPictureTitle.value = '';
    inputPictureTitle = '';
  
  }

  function formDefault(e) {
    e.preventDefault();
  }

  initialCards.forEach(item => renderCard(elements,  createElement(item.name, item.link)));



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


addButton.addEventListener('click', () => {
    openPopup(popupPicture);
    changeValueElement();
  });
  

  formCard.addEventListener('submit', (event) => {
    renderElement(galleryCards, createCard(inputCardName.value, inputCardUrl.value));
    formDefault(event);
    closePopup(popupCard);
  });