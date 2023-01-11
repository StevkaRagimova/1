const popupFigure = document.querySelector(".popup_figure");
const subtitleFigure = document.querySelector(".figure__subtitle");
const imageFigure = document.querySelector(".figure__image");

function openPopup(popup) {
  document.addEventListener("keydown", closePopupByEsc);
  popup.classList.add("popup_opened");
}

function closePopup(popup) {
  document.removeEventListener("keydown", closePopupByEsc);
  popup.classList.remove("popup_opened");
}

function closePopupByOverlay(event) {
  if (event.target.classList.contains("popup_opened")) {
    closePopup(event.target);
  }
}

function closePopupByEsc(event) {
  if (event.key === "Escape") {
    const activePopup = document.querySelector(".popup_opened");
    closePopup(activePopup);
  }
}

export {
  popupFigure,
  subtitleFigure,
  imageFigure,
  closePopupByOverlay,
  openPopup,
  closePopup
};
