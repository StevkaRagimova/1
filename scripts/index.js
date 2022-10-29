const profileEditBtn = document.querySelector(".profile__edit-button");
const popup = document.querySelector(".popup");
const popupBtnClose = document.querySelector(".popup__button-close");
let popupForm = document.querySelector(".form");
const profileName = document.querySelector(".profile__name");
const formInputName = document.querySelector('input[name="form__input_name"]');
const profileProfession = document.querySelector(".profile__workplace");
const formInputProfession = document.querySelector('input[name="form__input_workplace"]');

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
