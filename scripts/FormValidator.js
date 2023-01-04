export class FormValidator {
  constructor(config, formElement) {
    this._config = config;
    this._formElement = formElement;

    this._inputList = Array.from(
      formElement.querySelectorAll(this._config.inputSelector)
    );
    this.buttonElement = this._formElement.querySelector(
      this._config.submitButtonSelector
    );
  }

  enableValidation() {
    this._setEventListeners();
  }

  _setEventListeners() {
    this._inputList.forEach(input => {
      input.addEventListener("input", () => {
        this._checkInputValidity(input);
        this.updateButtonState();
      });
    });
  }

  updateButtonState = () => {
    const isFormInvalid = this._checkFormValidity();
    this.buttonElement.disabled = isFormInvalid;
    this.buttonElement.classList.toggle(
      this._config.inactiveButtonClass,
      isFormInvalid
    );
  };

  _checkFormValidity = () => {
    return this._inputList.some(input => !input.validity.valid);
  };

  _checkInputValidity = input => {
    if (input.validity.valid) {
      this._hideErrorNotice(input);
    } else {
      this._showErrorNotice(input);
    }
  };

  _showErrorNotice(selectedInput) {
    const errorNotice = this._formElement.querySelector(
      `.${selectedInput.id}-error`
    );
    errorNotice.textContent = selectedInput.validationMessage;
    selectedInput.classList.add(this._config.inputErrorClass);
    errorNotice.classList.add(this._config.errorClass);
  }

  _hideErrorNotice(selectedInput) {
    const errorNotice = this._formElement.querySelector(
      `.${selectedInput.id}-error`
    );
    selectedInput.classList.remove(this._config.inputErrorClass);
    errorNotice.classList.remove(this._config.errorClass);
    errorNotice.textContent = "";
  }
}
