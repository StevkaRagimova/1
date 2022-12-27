const popupFigure = document.querySelector(".popup_figure");
const subtitleFigure = document.querySelector(".figure__subtitle");
const imageFigure = document.querySelector(".figure__image");

function addOverlayListener(popup) {
    if (!popup.overlayListenerAdded) {
        popup.addEventListener("mouseup", closePopupByOverlay);
        popup.overlayListenerAdded = true;
    }
}

function openPopup(popup) {
    addOverlayListener(popup);
    popup.classList.add("popup_opened");
}

function closePopup(popup) {
    popup.removeEventListener("mouseup", closePopupByOverlay);
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

document.addEventListener("keydown", closePopupByEsc);

export { popupFigure, subtitleFigure, imageFigure, openPopup, closePopup };
