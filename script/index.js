let openPopup = document.querySelector(".profile__info-edit");
let popup = document.querySelector(".popup");
let closePopup = popup.querySelector(".popup__button-close");
let form = document.querySelector(".form");
let nameInput = form.querySelector(".form__input_type_name");
let jobInput = form.querySelector(".form__input_type_subheading");
let profileName = document.querySelector(".profile__info-name");
let profileJob = document.querySelector(".profile__info-job");

function togglePopup() {
  popup.classList.toggle("popup_opened");
  
  if (!popup.classList.contains("popup_opened")) {
    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;
  }
}

function handleFormSubmit(evt) {
  evt.preventDefault();

  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;

  togglePopup();
}

openPopup.addEventListener("click", togglePopup);
closePopup.addEventListener("click", togglePopup);
form.addEventListener("submit", handleFormSubmit);
