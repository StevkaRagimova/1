const popupFigure = document.querySelector('.popup_figure');
const subtitleFigure = document.querySelector('.figure__subtitle');
const imageFigure = document.querySelector('.figure__image');

function openPopup(popup) { 
  popup.classList.add('popup_opened');
  document.addEventListener('mouseup', closePopupByOverlay);
  document.addEventListener('keydown', closePopupByEsc);
};
  
function closePopup(popup) { 
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closePopupByEsc);
  document.removeEventListener('mouseup', closePopupByOverlay);
};
  
function closePopupByOverlay(event) {
  if(event.target.classList.contains('popup_opened')) { 
    closePopup(event.target);
  };
};
  
function closePopupByEsc(event) {
  if (event.key === 'Escape') {
    const activePopup = document.querySelector('.popup_opened');
    closePopup(activePopup);
  };
};

export { popupFigure, subtitleFigure, imageFigure, openPopup, closePopup};