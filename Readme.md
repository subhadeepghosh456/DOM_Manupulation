const allsections = document.querySelectorAll(".section");
//Node list
console.log(allsections);

const allButtons = document.getElementsByTagName("button");
//HTMLcollection
console.log(allButtons);

message.cloneNode(true)
header.prepend(message.cloneNode(true));

logo.getAttribute("designer")
logo.setAttribute("company", "ghosh");

logo.classList.add('c', 'j');
logo.classList.remove('c', 'j');
logo.classList.toggle('c');
logo.classList.contains('c')

section1.scrollIntoView({ behavior: "smooth" });

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
