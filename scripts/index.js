const popups = Array.from(document.querySelectorAll(".popup"));

const profileEditBtn = document.querySelector(".profile__edit-button");
const popupProfile = document.querySelector(".popup_profile");
const popupForm = document.querySelector('[name="profile"]');

const profileName = document.querySelector(".profile__name");
const formInputName = document.querySelector('input[name="form__input_name"]');
const profileProfession = document.querySelector(".profile__workplace");
const formInputProfession = document.querySelector('input[name="form__input_workplace"]');

const popupPicture = document.querySelector(".popup_picture");
const inputElementTitle = document.querySelector('input[name="pictureTitle"]');
const inputElementLink = document.querySelector('input[name="pictureLink"]');
const galleryElements = document.querySelector(".elements");
const popupFigure = document.querySelector(".popup_figure");
const imageFigure = document.querySelector(".figure__image");
const subtitleFigure = document.querySelector(".figure__subtitle");
const buttonAddCard = document.querySelector(".profile__add-button");
const formCard = document.querySelector('[name="place"]');
const submitButton = popupPicture.querySelector('.form__button');

/*функция открытия окна*/

function openPopup(popupProfile) {
    popupProfile.classList.add("popup_opened");
	 document.addEventListener('keydown', closePopupByEsc);
}

/*функция закрытия окна по Escape*/
function closePopupByEsc (event) {
  if (event.key === 'Escape') {
    const activePopup = document.querySelector('.popup_opened');
    closePopup(activePopup);
  };
}; 

/* функция закрытия окна*/
function closePopup(popup) {
    popup.classList.remove("popup_opened");
	document.removeEventListener('keydown', closePopupByEsc);
}

/*функция подстановки данных профиля в форму*/
function fillInFormInputs() {
    formInputName.value = profileName.textContent;
    formInputProfession.value = profileProfession.textContent;
}

/*функция изменения формы профиля*/
function handleSubmitProfileForm(event) {
    event.preventDefault();
    profileName.textContent = formInputName.value;
    profileProfession.textContent = formInputProfession.value;
    closePopup(popupProfile);
}

/*функция добавления карточки в начало массива*/
function renderElement(container, item) {
    container.prepend(item);
}

/*изменение данных карточки*/
function createCard(name, link) {
    const elementSample = document.querySelector("#element").content;
    const elementGallery = elementSample.querySelector(".element").cloneNode(true);
    const img = elementGallery.querySelector(".element__image");
    const title = elementGallery.querySelector(".element__title");
    const buttonLike = elementGallery.querySelector(".element__like-button");
    const buttonTrash = elementGallery.querySelector(".element__trashbin-button");

    img.src = link;
    img.alt = name;
    title.textContent = name;

    img.addEventListener("click", (event) => {
        openPopup(popupFigure);
        imageFigure.src = img.src;
        img.alt = title.textContent;
        subtitleFigure.textContent = title.textContent;
    });

    /*удаление карточки*/
    buttonTrash.addEventListener("click", (event) => event.target.closest(".element").remove());

    /*лайк*/
    buttonLike.addEventListener("click", (event) => event.target.classList.toggle("element__button_active"));

    return elementGallery;
}

/*закрытие любого попапа крестиком и по оверлею*/

popups.forEach((popup) => {
    popup.addEventListener("click", (event) => {
        if (event.target.classList.contains("popup_opened") || event.target.classList.contains("popup__button-close")) {
            closePopup(popup);
        }
    });
   
});

/*очищаем поля*/
function сleanElementValue() {
    inputElementLink.value = "";
    inputElementTitle.value = "";
}

/*вывод данных из массива*/
initialElements.forEach((item) => renderElement(galleryElements, createCard(item.name, item.link)));

/*вызов формы профиля*/
profileEditBtn.addEventListener("click", () => {
    openPopup(popupProfile);
    fillInFormInputs();
});

/*отправки формы профиля*/
popupForm.addEventListener("submit", handleSubmitProfileForm);


/*открытие формы*/
buttonAddCard.addEventListener("click", () => {
    openPopup(popupPicture);
	сleanElementValue();
    disableSubmitButton();
});

/*добавление карточки*/
formCard.addEventListener("submit", (event) => {
    renderElement(galleryElements, createCard(inputElementTitle.value, inputElementLink.value));
    event.preventDefault();;
    closePopup(popupPicture);
});