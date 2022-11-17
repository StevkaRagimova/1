const profileEditBtn = document.querySelector(".profile__edit-button");
const popup = document.querySelector(".popup");
const popupBtnClose = document.querySelector(".popup__button-close");
let popupForm = document.querySelector(".form");
const profileName = document.querySelector(".profile__name");
const formInputName = document.querySelector('input[name="form__input_name"]');
const profileProfession = document.querySelector(".profile__workplace");
const formInputProfession = document.querySelector('input[name="form__input_workplace"]');




/*начинаем функции для откр.закр.окон*/

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

popupBtnClose.addEventListener("click", closePopup);
profileEditBtn.addEventListener("click", () => {
    openPopup();
    addValueInValue();
});

popupForm.addEventListener("submit", formSubmitHandler);


/*начинаем массив*/

const formElement = document.querySelector('[name="element"]');
const pictureTitle = document.querySelector('[name="pictureTitle"]');
const pictureLink = document.querySelector('[name="pictureLink"]');
const galleryElements = document.querySelector('.elements');
const popupFigure = document.querySelector('.popup__figure');
const imageFigure = document.querySelector('.figure__image');
const subtitleFigure = document.querySelector('.figure__subtitle');

const initialElements = [
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


  /*эта функция говорит о добавлении карточки в начало массива*/
  function renderElement(container, item) {
    container.prepend(item);
  }


    /*эта функция позволяет присваивать новой карточке название и добавлять фото, ставить лайк и удалять фото */
  function createElement(name, link) {
    const elementSample = document.querySelector('#element').content;
    const elementGallery = elementSample.querySelector('.element').cloneNode(true); 
    const img = elementGallery.querySelector('.element__image');
    const title = elementGallery.querySelector('.element__title');
    const buttonLike = elementGallery.querySelector('.element__like-button');
    const buttonTrash = elementGallery.querySelector('.element__trashbin-button');
   

    img.src = link;
    img.alt = name;
    title.textContent = name;


 img.addEventListener('click', (event) => {
        openPopup(popupFigure);
        imageFigure.src = img.src;
        img.alt = title.textContent;
        subtitleFigure.textContent = title.textContent;
      });
      buttonTrash.addEventListener('click', (event) => event.target.closest('.element').remove());
      buttonLike.addEventListener('click', (event) => event.target.classList.toggle('element__button_active'));
    
      return elementGallery;
    }

/*  если попап активен,  метод closest возвращает ближайший ролижайший родительский элемент (или сам элемент), который соответствует заданному CSS-селектору или null, если таковых элементов вообще нет.*/

  function handleEventClosePopup(event) {
        const popupActive = event.target.closest('.popup');
        const isTargetOverlay = event.target.classList.contains('popup_opened'); 
        const isTargetButtonClose = event.target.classList.contains('popup__button-close');
      
        if (isTargetOverlay || isTargetButtonClose) { /*если попап активен, или закрыт, то закрыть его нафиг*/
          closePopup(popupActive);
        }
      }

      /*эта функция меняет значение атрибута карточки, вставляя в текст в нужные поля*/
      function changeElementValue() {
        pictureTitle.value = '';
        pictureLink.value = '';  
      }
    
      function formDefault(event) {
        event.preventDefault();
      }

/*начинаем мучить массив, сначала переберем его через фунцкцию renderElement , то есть выводим его на экран*/
initialElements.forEach(item => renderElement(galleryElements, createElement(item.name, item.link))); 

/* ПОТОМ добавим обработчик кнопки добавления*/
const AddButton = document.querySelector('.profile__add-button');

AddButton.addEventListener('click', () => {
    openPopup(popupPicture);
    сhangeElementValue();
});