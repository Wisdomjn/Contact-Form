// ALWAYS USE STRICT
"use strict";

const userInput = document.querySelectorAll(".input");
const btn = document.querySelector(".button");
const hidden = document.querySelector(".hidden");
const container = document.querySelector(".container");
const redText = document.querySelectorAll(".red-text");
const checkBox = document.querySelector(".checkbox");

// DISPLAY OVERLAY AND NOTIFICATION
const openModal = function () {
  hidden.style.display = "block";
  container.style.display = "block";
};

// CLOSING THE MODAL OPPOSITE OF THIS 👆
const closeModal = function () {
  hidden.style.display = "none";
  container.style.display = "none";
};

// RED BORDER OUTLINE ON INPUT AND TEXT
const borderRed = function () {
  for (let i = 0; i < userInput.length; i++) {
    userInput[i].style.border = "1px solid red";
  }
  for (let i = 0; i < redText.length; i++) {
    redText[i].style.display = "block";
  }
};

// ADDING FUNCTIONALITY TO THE BUTTON
btn.addEventListener("click", function () {
  const inputValue = String(userInput.value);
  const boxChecked = Boolean(checkBox.value);
  // console.log(typeof inputValue, inputValue, boxChecked);

  // WHEN THE USER CLICKS THE BUTTON WITHOUT INPUTTING ANYTHINGS
  if (inputValue === !inputValue || boxChecked) {
    borderRed();
  }
  // DISPLAY THE OVERLAY AND THE MESSAGE WHEN THE USER FILLS THE FORM
  openModal();
});

// CLOSING THE MODAL WITH THE ESCAPE KEY
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && openModal) {
    closeModal();
  }
});
