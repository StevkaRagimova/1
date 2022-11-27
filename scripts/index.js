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

/*начинаем функции для откр.закр.окон*/

function openPopup(popupProfile) {
    popupProfile.classList.add("popup_opened");
}

function closePopup(popupProfile) {
    popupProfile.classList.remove("popup_opened");
}

function addValueInValue() {
    formInputName.value = profileName.textContent;
    formInputProfession.value = profileProfession.textContent;
}

function handleSubmitProfileForm(event) {
    event.preventDefault();
    profileName.textContent = formInputName.value;
    profileProfession.textContent = formInputProfession.value;
    closePopup(popupProfile);
}

profileEditBtn.addEventListener("click", () => {
    openPopup(popupProfile);
    addValueInValue();
});

popupForm.addEventListener("submit", handleSubmitProfileForm);

/*эта функция говорит о добавлении карточки в начало массива*/
function renderElement(container, item) {
    container.prepend(item);
}

/*эта функция позволяет присваивать новой карточке название и добавлять фото, ставить лайк и удалять фото */
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
    buttonTrash.addEventListener("click", (event) => event.target.closest(".element").remove());
    buttonLike.addEventListener("click", (event) => event.target.classList.toggle("element__button_active"));

    return elementGallery;
}

/*переделано через массив*/

popups.forEach((popup) => {
    popup.addEventListener("click", (event) => {
        if (event.target.classList.contains("popup_opened") || event.target.classList.contains("popup__button-close")) {
            closePopup(popup);
        }
    });
});

function сleanElementValue() {
    inputElementLink.value.reset;
    inputElementTitle.value.reset;
}

function formDefault(event) {
    event.preventDefault();
}

/*начинаем мучить массив, сначала переберем его через фунцкцию renderElement , то есть выводим его на экран*/
initialElements.forEach((item) => renderElement(galleryElements, createCard(item.name, item.link)));

/* ПОТОМ добавим обработчик кнопки добавления*/
const buttonAddCard = document.querySelector(".profile__add-button");
const formCard = document.querySelector('[name="place"]');

buttonAddCard.addEventListener("click", () => {
    openPopup(popupPicture);
});

/*собственно добавление карточки*/
formCard.addEventListener("submit", (event) => {
    renderElement(galleryElements, createCard(inputElementTitle.value, inputElementLink.value));
    formDefault(event);
    closePopup(popupPicture);
});
