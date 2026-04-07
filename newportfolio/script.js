const texts = ["Software Engineer", "System Analyst", "UI/UX Designer"];
const typingTextElement = document.getElementById("typing-text");

let textIndex = 0;
let charIndex = 0;
const typingSpeed = 150;
const deletingSpeed = 50;
const delayBetweenTexts = 1000;

function typeText() {
  const currentText = texts[textIndex];
  
  if (charIndex < currentText.length) {
    typingTextElement.textContent += currentText.charAt(charIndex);
    charIndex++;
    setTimeout(typeText, typingSpeed);
  } else {
    setTimeout(deleteText, delayBetweenTexts);
  }
}

function deleteText() {
  if (charIndex > 0) {
    typingTextElement.textContent = typingTextElement.textContent.slice(0, -1);
    charIndex--;
    setTimeout(deleteText, deletingSpeed);
  } else {
    textIndex = (textIndex + 1) % texts.length;
    setTimeout(typeText, typingSpeed);
  }
}
window.addEventListener("scroll", function () {
  const header = document.querySelector("header");

  if (window.scrollY > 50) {
      header.classList.add("scrolled");
  } else {
      header.classList.remove("scrolled");
  }
});

window.onload = typeText;

var codingProjects = document.querySelectorAll(".project");
var codingProjects = document.querySelectorAll(".skill-item");

codingProjects.forEach((project, index) => {
  project.dataset.aos = "fade-down";
  project.dataset.aosDuration = 500;
  project.dataset.aosDelay = index * 300;
})

AOS.init();