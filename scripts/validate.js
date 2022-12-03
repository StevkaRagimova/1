const showError = (selectedForm, selectedInput, validationConfig) => {
  const error = selectedForm.querySelector(`.${selectedInput.id}-error`);
  error.textContent = selectedInput.validationMessage;
  selectedInput.classList.add(validationConfig.inputErrorClass);
  error.classList.add(validationConfig.errorClass);
};


const hideError = (selectedForm, selectedInput, validationConfig) => {
  const error = selectedForm.querySelector(`.${selectedInput.id}-error`);
  selectedInput.classList.remove(validationConfig.inputErrorClass);
  error.classList.remove(validationConfig.errorClass);
  error.textContent = '';
};


const checkInputValidity = (selectedForm, selectedInput, validationConfig) => {
  if (!selectedInput.validity.valid) {
    showError(selectedForm, selectedInput, validationConfig);
  } else {
    hideError(selectedForm, selectedInput, validationConfig);
  }
};

const hasInvalidInput = (inputsList) => {
  return inputsList.some((selectedInput) => {
    return !selectedInput.validity.valid;
  })
};

const toggleButtonState = (inputsList, submitButton, validationConfig) => {
  if (hasInvalidInput(inputsList)) {
    submitButton.setAttribute('disabled', true);
    submitButton.classList.add(validationConfig.inactiveButtonClass);
  } else {
    submitButton.removeAttribute('disabled', true);
    submitButton.classList.remove(validationConfig.inactiveButtonClass);
  }
};

const setEventListeners = (selectedForm, validationConfig) => {
  const inputsList = Array.from(selectedForm.querySelectorAll(validationConfig.inputSelector));
  const submitButton = selectedForm.querySelector(validationConfig.submitButtonSelector);
  inputsList.forEach((selectedInput) => {
    selectedInput.addEventListener('input', () => {
      checkInputValidity(selectedForm, selectedInput, validationConfig);
      toggleButtonState(inputsList, submitButton, validationConfig);
    });
  });
};


const enableValidation = (validationConfig) => {
  const formsList = Array.from(document.querySelectorAll(validationConfig.formSelector));
  formsList.forEach((selectedForm) => {
    selectedForm.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
    setEventListeners(selectedForm, validationConfig);
  });
};

function disableSubmitButton () {
	submitButton.disabled = true;
    submitButton.classList.add('form__button_inactive');
};

enableValidation({
  formSelector: '.form',
  inputSelector: '.form__input',
  submitButtonSelector: '.form__button',
  inactiveButtonClass: 'form__button_inactive',
  inputErrorClass: 'form__input_type_error',
  errorClass: 'form__input-error_active'
});