const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  })
);
console.log("Lemoxyy");
var cursor = document.querySelector(".cursor");
var cursorinner = document.querySelector(".cursor2");
var a = document.querySelectorAll("a");

document.addEventListener("mousemove", function (e) {
  var x = e.clientX;
  var y = e.clientY;
  cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`;
});

document.addEventListener("mousemove", function (e) {
  var x = e.clientX;
  var y = e.clientY;
  cursorinner.style.left = x + "px";
  cursorinner.style.top = y + "px";
});

document.addEventListener("mousedown", function () {
  cursor.classList.add("click");
  cursorinner.classList.add("cursorinnerhover");
});

document.addEventListener("mouseup", function () {
  cursor.classList.remove("click");
  cursorinner.classList.remove("cursorinnerhover");
});

a.forEach((item) => {
  item.addEventListener("mouseover", () => {
    cursor.classList.add("hover");
  });
  item.addEventListener("mouseleave", () => {
    cursor.classList.remove("hover");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  if ("ontouchstart" in window || navigator.maxTouchPoints) {
    document.documentElement.style.cursor = "none";
  }
});
function openWebsite() {
  window.open("https://www.instagram.com/lemoxyy__/", "_blank");
}

// document.addEventListener("DOMContentLoaded", function () {
//   const text = `This website hasn't been completed yet.`;
//   const typingText = document.getElementById("development");
//   let index = 0;

//   function type() {
//     if (index < text.length) {
//       typingText.textContent += text.charAt(index);
//       index++;
//       setTimeout(type, 100); // Adjust typing speed here (milliseconds)
//     } else {
//       typingText.textContent += " "; // Add space to make room for cursor
//       typingText.appendChild(cursor);
//     }
//   }
//   type();
// });



console.log("If you are reading this then Thanks for wasting you time.")



