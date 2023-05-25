/* eslint-disable no-use-before-define */

// Imports
import "./style.css";

// Helper variables
const assetsPath = "./assets/";
const images = [
  `${assetsPath}0.jpg`,
  `${assetsPath}1.jpg`,
  `${assetsPath}2.jpg`,
  `${assetsPath}3.jpg`,
  `${assetsPath}4.jpg`,
];
let timer = null;
let currentImage = 0; // index of the currently displayed image in the images array

const mainDiv = document.querySelector(".main");
const themeButton = mainDiv.querySelector(".theme-button");
const imageCarousel = mainDiv.querySelector(".image-carousel");
const indicatorTray = document.querySelector(
  ".carousel-controls .indicator-tray"
);
const form = mainDiv.querySelector("form");
const inputText = mainDiv.querySelector("#name");
const inputTextError = document.querySelector("#name + p.error");
const tellMeButton = mainDiv.querySelector(".tellme-button");

// Helper functions
function setTheme() {
  const root = document.documentElement;
  const displayTheme = root.className === "dark" ? "light" : "dark";
  root.className = displayTheme;
  const changeTheme = root.className === "dark" ? "Light" : "Dark";
  mainDiv.querySelector(".display-theme-name").textContent = changeTheme;
}

function resetTimer() {
  if (timer) {
    clearTimeout(timer); // clear the existing timer
  }
  // Set a new timer
  timer = setTimeout(() => {
    updateImageTo((currentImage + 1) % images.length);
  }, 2500); // 2500ms = 2.5s
}

function updateImageTo(index) {
  const previousImage = currentImage;
  currentImage = index;

  imageCarousel.removeChild(
    document.querySelector(`.image-carousel`).firstChild
  );
  const img = document.createElement("img");
  // eslint-disable-next-line prefer-destructuring
  img.src = images[currentImage];
  imageCarousel.appendChild(img);

  indicatorTray
    .querySelector(`.indicator:nth-child(${previousImage + 1})`)
    .classList.remove("active");

  indicatorTray
    .querySelector(`.indicator:nth-child(${currentImage + 1})`)
    .classList.add("active");

  resetTimer(); // reset the timer whenever the image is updated
}

function handleCarouselStep(direction) {
  const index =
    direction === "next"
      ? (currentImage + 1) % images.length
      : (currentImage - 1 + images.length) % images.length;
  updateImageTo(index);
}

const Person = (name) => ({ name });

const Momo = (() => {
  const family = ["andrew", "ethan", "mom"];
  const sayHey = (name, isBored) => {
    if (isBored) {
      return `Hey ${name}.`;
    }
    return `Hey ${name}!`;
  };
  const greet = (person) => {
    if (person.name.length !== 0) {
      
      const peopleDiv = mainDiv.querySelector(".people");
      const personDiv = document.createElement("div");
      personDiv.classname = "person";
      const sayHi = document.createElement("p");
      const hiGif = document.createElement("video");

      if (family.includes(person.name.toLowerCase())) {
        sayHi.innerHTML = sayHey(
          person.name[0].toUpperCase() + person.name.slice(1).toLowerCase(),
          true
        );
        hiGif.src = `${assetsPath}momo-bored.mp4`;
      } else {
        sayHi.innerHTML = sayHey("stranger", false);
        hiGif.src = `${assetsPath}momo-happy.mp4`;
      }

      hiGif.alt = "Momo Gif";
      hiGif.autoplay = true;
      hiGif.controls = true;
      hiGif.loop = true;
      hiGif.muted = true;
      hiGif.type = "video/mp4";

      personDiv.appendChild(sayHi);
      personDiv.appendChild(hiGif);
      peopleDiv.appendChild(personDiv);
      mainDiv.appendChild(peopleDiv);
    }
  };
  return { greet };
})();

function showError() {
  if (inputText.validity.valueMissing) {
    // If the field is empty,
    // display the following error message.
    inputTextError.textContent = "WHAT'S YOUR NAME?";
  }

  // Set the styling appropriately
  inputTextError.className = "error active";
}

// Event listeners
document.addEventListener("DOMContentLoaded", () => {
  const img = document.createElement("img");
  // eslint-disable-next-line prefer-destructuring
  img.src = images[currentImage];
  imageCarousel.appendChild(img);

  images.forEach((_, index) => {
    const indicator = document.createElement("div");
    indicator.classList.add("indicator");
    if (index === 0) {
      indicator.classList.add("active");
    }
    indicatorTray.appendChild(indicator);
  });

  document
    .querySelector(".previous")
    .addEventListener("click", () => handleCarouselStep("previous"));
  document
    .querySelector(".next")
    .addEventListener("click", () => handleCarouselStep("next"));
  window.addEventListener("keydown", (event) => {
    if (event.key === "ArrowRight") {
      handleCarouselStep("next");
    } else if (event.key === "ArrowLeft") {
      handleCarouselStep("previous");
    }
  });

  const indicators = document.querySelectorAll(".indicator");
  indicators.forEach((indicator, index) => {
    indicator.addEventListener("click", () => updateImageTo(index));
  });

  resetTimer();
});

// eslint-disable-next-line no-unused-vars
inputText.addEventListener("input", (event) => {
  // Each time the user types something, we check if the
  // form fields are valid.

  if (inputText.validity.valid) {
    // In case there is an error message visible, if the field
    // is valid, we remove the error message.
    inputTextError.textContent = ""; // Reset the content of the message
    inputTextError.className = "error"; // Reset the visual state of the message
  } else {
    // If there is still an error, show the correct error
    showError();
  }
});

form.addEventListener("submit", (event) => {
  // if the inputText field is valid, we let the form submit
  if (!inputText.validity.valid) {
    // If it isn't, we display an appropriate error message
    showError();
  }
  // Then we prevent the form from being sent by canceling the event
  event.preventDefault();
});

tellMeButton.addEventListener("click", () => {
  const name = inputText.value;
  const person = Person(name);
  Momo.greet(person);
});

themeButton.addEventListener("click", setTheme);

/*
const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);
const response = await openai.createCompletion({
  model: "text-davinci-003",
  prompt: "Say this is a test",
  temperature: 0,
  max_tokens: 7,
});
*/
