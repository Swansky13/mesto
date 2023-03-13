let openPopup = document.querySelector('.profile__info_edit_button');
let popup = document.querySelector('.popup');
let closePopup = popup.querySelector('.popup__button-close');
let form = document.querySelector('.popup__form');
let nameInput = form.querySelector('.popup__form-item_name');
let jobInput = form.querySelector('.popup__form-item_job');
let saveButton = form.querySelector('.popup__form-button-save');
let profileName = document.querySelector('.profile__info-name');
let profileJob = document.querySelector('.profile__info-job');

function togglePopup() {
  popup.classList.toggle('popup_opened');
}

function handleFormSubmit(evt) {
  evt.preventDefault();

  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;

  togglePopup();
}

openPopup.addEventListener('click', togglePopup);
closePopup.addEventListener('click', togglePopup);
saveButton.addEventListener('click', handleFormSubmit);
form.addEventListener('submit', handleFormSubmit);
