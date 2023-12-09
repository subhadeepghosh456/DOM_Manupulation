"use strict";

///////////////////////////////////////
// Modal window

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");

const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener("click", openModal);

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

///////////////////////////////////////////////////////////////
//selecting element
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

const allsections = document.querySelectorAll(".section");
//Node list
console.log(allsections);

const allButtons = document.getElementsByTagName("button");
//HTMLcollection
console.log(allButtons);
//creating new element

const message = document.createElement("div");
const header = document.querySelector(".header");
console.log(header);
message.classList.add("cookie-message");
// message.textContent = "We use cookies for improved functionality and analytics";

message.innerHTML =
  "We use cookies for improved functionality and analytics.<button class='btn btn--close-cookie'>Got it!</button>";
header.append(message);
//header.prepend(message.cloneNode(true));
/*

if you want to insert same element mutiple places then you have to use -> message.cloneNode(true);


*/
//header.before(message);
//header.after(message);

//Delete elements

document
  .querySelector(".btn--close-cookie")
  .addEventListener("click", function () {
    document.querySelector(".cookie-message").remove();
  });
