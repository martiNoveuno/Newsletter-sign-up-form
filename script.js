"use strict";

const form = document.getElementById("subscribe-form");
const container = document.querySelector(".subscription-container");
const emailInput = document.getElementById("email");
const userEmail = document.getElementById("user-email");
const errorMessage = document.querySelector(".error-message");
const successMessage = document.querySelector(".success-container");
const dismissBtn = document.querySelector(".success-btn");

//funzione di validazione dell'email
function validateEmail(email) {
  const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return regex.test(String(email).toLowerCase());
}

//aggiunge o rimuove la classe di errore
function toggleError(isError) {
  if (isError) {
    emailInput.classList.add("error");
    errorMessage.style.display = "block";
  } else {
    emailInput.classList.remove("error");
    errorMessage.style.display = "none";
  }
}

//mostra il messaggio di sottoscrizione avvenuta e nasconde il form
function showSuccessMessage() {
  successMessage.style.display = "flex";
  container.style.display = "none";
}

//nasconde il messaggio di sottoscrizione e mostra il form
function resetForm() {
  successMessage.style.display = "none";
  container.style.display = "flex";
  emailInput.value = "";
}

//gestione dell'evento input
emailInput.addEventListener("input", function () {
  if (validateEmail(emailInput.value)) {
    toggleError(false);
  }
});

//gestione di invio del modulo
form.addEventListener("submit", function (event) {
  event.preventDefault();

  if (validateEmail(emailInput.value)) {
    console.log("Form submitted with email:", emailInput.value);
    userEmail.textContent = emailInput.value;
    showSuccessMessage();
    toggleError(false);
  } else {
    toggleError(true);
  }
});

//gestione del click 'dismiss message'
dismissBtn.addEventListener("click", function () {
  resetForm();
});
