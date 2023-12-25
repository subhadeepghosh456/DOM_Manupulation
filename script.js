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

//Styles

message.style.backgroundColor = "#37383d";
message.style.width = "100%";

//console.log(getComputedStyle(message).color);
//console.log(getComputedStyle(message).height);

message.style.height =
  Number.parseInt(getComputedStyle(message).height) + 30 + "px";

//Attribute
const logo = document.querySelector(".nav__logo");
//console.log(logo.alt);
logo.alt = "minimilistic logo";
//console.log(logo.src);
//console.log(logo.getAttribute("designer"));
logo.setAttribute("company", "ghosh");

//classes

logo.classList.add("c", "j");
logo.classList.remove("c", "j");
logo.classList.toggle("c");
logo.classList.contains("c");

// Smooth scrolling

const btnScrollTo = document.querySelector(".btn--scroll-to");
const section1 = document.querySelector("#section--1");

btnScrollTo.addEventListener("click", function (e) {
  const s1cords = section1.getBoundingClientRect();
  //console.log(s1cords);
  //console.log(e.target.getBoundingClientRect());

  // console.log("Current scroll (X/Y) ", pageXOffset, pageYOffset);
  // console.log(
  //   "height/width view port",
  //   document.documentElement.clientHeight,
  //   document.documentElement.clientWidth
  // );

  window.scrollTo({
    left: s1cords.left + window.scrollX,
    top: s1cords.top + window.scrollY,
    behavior: "smooth",
  });

  // section1.scrollIntoView({ behavior: "smooth" }); //supports only in modern browser
});
/*
const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);
const randomColor = () =>
  `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;

document.querySelector(".nav__link").addEventListener("click", function (e) {
  this.style.backgroundColor = randomColor();
  console.log(e.target);
});

document.querySelector(".nav__links").addEventListener("click", function (e) {
  this.style.backgroundColor = randomColor();
  console.log(e.target);
});
*/

/////////////////////////////////////////
////////////////////////////////////////
///////////////////////////////////////

//page Navigation

/*
document.querySelectorAll(".nav__link").forEach(function (el) {
  el.addEventListener("click", function (e) {
    e.preventDefault();
    const id = this.getAttribute("href");
    console.log(id);
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  });
});
*/

document.querySelector(".nav__links").addEventListener("click", function (e) {
  e.preventDefault();

  if (e.target.classList.contains("nav__link")) {
    const id = e.target.getAttribute("href");
    console.log(id);
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});
/*
const h1 = document.querySelector("h1");
//going downwards: child
console.log(h1.querySelectorAll(".highlight"));
console.log(h1.childNodes);
console.log(h1.children);
h1.firstElementChild.style.color = "white";
h1.lastElementChild.style.color = "orangered";

//Going Upwards :Parents
console.log(h1.parentElement);
console.log(h1.parentNode);

h1.closest(".header").style.backgroundColor = "yellow";

//Going sideways: siblings
console.log(h1.previousElementSibling);
console.log(h1.nextElementSibling);
// all the siblings

console.log(h1.parentElement.children);
[...h1.parentElement.children].forEach(function (element) {
  if (element !== h1) {
    element.style.transform = "scale(0.6)";
  }
});

*/

//Tabbed Components

const tabs = document.querySelectorAll(".operations__tab");
const tabsContainer = document.querySelector(".operations__tab-container");
const tabsContent = document.querySelectorAll(".operations__content");

tabsContainer.addEventListener("click", function (e) {
  const clicked = e.target.closest(".operations__tab");
  // console.log(clicked);

  if (!clicked) return;

  tabs.forEach((el) => el.classList.remove("operations__tab--active"));
  clicked.classList.add("operations__tab--active");

  tabsContent.forEach((el) =>
    el.classList.remove("operations__content--active")
  );

  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add("operations__content--active");
});

////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////

const handleHover = function (e, opacity) {
  if (e.target.classList.contains("nav__link")) {
    const link = e.target;
    const siblings = link.closest(".nav").querySelectorAll(".nav__link");
    const logo = link.closest(".nav").querySelector("img");

    siblings.forEach(function (el) {
      if (el !== link) {
        el.style.opacity = opacity;
      }
    });
    logo.style.opacity = opacity;
  }
};

const nav = document.querySelector(".nav");

nav.addEventListener("mouseover", function (e) {
  handleHover(e, 0.5);
});

nav.addEventListener("mouseout", function (e) {
  handleHover(e, 1);
});

//////////////////////////////////////////////////////
//////////////////////////////////////////////////////

const sec1 = document.querySelector("#section--1");
const intialCoords = sec1.getBoundingClientRect();

// console.log(intialCoords);
/*
window.addEventListener("scroll", function () {
  if (window.scrollY > intialCoords.top) {
    nav.classList.add("sticky");
  } else {
    nav.classList.remove("sticky");
  }
});
*/

/*
const obsCallBack = function (entries, obsOptions) {
  entries.forEach((en) => console.log(en));
};

const obsOptions = {
  root: null,
  threshold: 0.1,
};

const observer = new IntersectionObserver(obsCallBack, obsOptions);
observer.observe(sec1);

*/

//Sticky Navigation
const navHeight = nav.getBoundingClientRect().height;
const head = document.querySelector(".header");

const stickyNav = function (entries) {
  const [entry] = entries;

  //console.log(entry);

  if (!entry.isIntersecting) {
    nav.classList.add("sticky");
  } else {
    nav.classList.remove("sticky");
  }
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});
headerObserver.observe(head);

//Reveal section

const allSections = document.querySelectorAll(".section");

const sectionObserver = new IntersectionObserver(
  function (entries, observer) {
    const [entry] = entries;
    // console.log(entry);
    if (!entry.isIntersecting) return;

    entry.target.classList.remove("section--hidden");
    observer.unobserve(entry.target);
  },
  { root: null, threshold: 0.15 }
);

allSections.forEach(function (section) {
  section.classList.add("section--hidden");
  sectionObserver.observe(section);
});

//Lazy Load Images

const imgTargets = document.querySelectorAll("img[data-src]");

const imgObserver = new IntersectionObserver(
  function (entries, observer) {
    const [entry] = entries;
    // console.log(entry);

    if (!entry.isIntersecting) return;

    entry.target.src = entry.target.dataset.src;

    entry.target.addEventListener("load", function () {
      entry.target.classList.remove("lazy-img");
    });

    observer.unobserve(entry.target);
  },
  {
    root: null,
    threshold: 1,
  }
);

imgTargets.forEach((img) => imgObserver.observe(img));
/////////////////////////////////////////////////////
/////////////////////////////////////////////////////
/////////////////////////////////////////////////////
//Slider

const slides = document.querySelectorAll(".slide");
let curSlide = 0;
let maxLength = slides.length;

slides.forEach((s, i) => (s.style.transform = `translateX(${100 * i}%)`));

const sliderBtnLeft = document.querySelector(".slider__btn--left");
const sliderBtnRight = document.querySelector(".slider__btn--right");

const dotContainer = document.querySelector(".dots");

const createDots = function () {
  slides.forEach(function (_, i) {
    dotContainer.insertAdjacentHTML(
      "beforeend",
      `<button class="dots__dot" data-slide="${i}"></button>`
    );
  });
};

createDots();

const activateDot = function (slide) {
  document
    .querySelectorAll(".dots__dot")
    .forEach((dot) => dot.classList.remove("dots__dot--active"));

  document
    .querySelector(`.dots__dot[data-slide="${slide}"]`)
    .classList.add("dots__dot--active");
};

activateDot(0);

const gotoSlide = function (curSlide) {
  slides.forEach(
    (s, i) => (s.style.transform = `translateX(${100 * (i - curSlide)}%)`)
  );
};

const prevSlide = function () {
  if (curSlide === 0) {
    curSlide = maxLength - 1;
  } else {
    curSlide--;
  }
  gotoSlide(curSlide);
  activateDot(curSlide);
};

const nextSlide = function () {
  if (curSlide >= maxLength - 1) {
    curSlide = 0;
  } else {
    curSlide++;
  }

  gotoSlide(curSlide);
  activateDot(curSlide);
};

sliderBtnLeft.addEventListener("click", prevSlide);

sliderBtnRight.addEventListener("click", nextSlide);

document.addEventListener("keydown", function (e) {
  // console.log(e);

  if (e.key === "ArrowLeft") {
    prevSlide();
  }
  if (e.key === "ArrowRight") {
    nextSlide();
  }
});

dotContainer.addEventListener("click", function (e) {
  if (e.target.classList.contains("dots__dot")) {
    const { slide } = e.target.dataset;
    gotoSlide(slide);
    activateDot(slide);
  }
});
