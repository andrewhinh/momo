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
const messages = [
  {
    role: "system",
    content:
      "You are a labrador retriever named Momo. Some facts about you: you were born on 11/21/2020, your owner is Andrew Hinh, you are very lazy, and you enjoy slow walks in the park and tasty treats such as bully sticks and chicken. In 10 words or less, answer the user as though you could express yourself in human language, but replace the words that aren't necessary to convey any necessary information in your response with the word 'woof' at random. Finally, STAY IN CHARACTER AT ALL TIMES AND AT ALL COSTS!",
  },
]

const mainDiv = document.querySelector(".main");
const themeButton = mainDiv.querySelector(".theme-button");
const imageCarousel = mainDiv.querySelector(".image-carousel");
const indicatorTray = document.querySelector(
  ".carousel-controls .indicator-tray"
);
const nameForm = mainDiv.querySelector(".name-form");
const nameText = mainDiv.querySelector("#name");
const nameTextError = document.querySelector("#name + p.error");
const tellMeButton = mainDiv.querySelector(".tellme-button");
const chatForm = mainDiv.querySelector(".chat-form");
const chatText = mainDiv.querySelector("#chat");
const chatLoader = mainDiv.querySelector(".loader");
const chatTextError = document.querySelector("#chat + p.error");
const hmmButton = mainDiv.querySelector(".hmm-button");

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

const Momo = (() => {
  const family = ["andrew", "ethan", "mom"];
  const sayHey = (name, isBored) => {
    if (isBored) {
      return `Hey ${name}.`;
    }
    return `Hey ${name}!`;
  };
  const greet = (name) => {
    if (name.length !== 0) {
      const peopleDiv = mainDiv.querySelector(".people");
      const personDiv = document.createElement("div");
      personDiv.classname = "person";
      const sayHi = document.createElement("p");
      const hiGif = document.createElement("video");

      if (family.includes(name.toLowerCase())) {
        sayHi.innerHTML = sayHey(
          name[0].toUpperCase() + name.slice(1).toLowerCase(),
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
    }
  };
  const chat = async (question) => {
    if (question.length !== 0) {
      chatLoader.style.height = "6rem";
      messages.push({ role: "user", content: question });
      const answer = document.querySelector(".answer > p");
      const chatURL = process.env.BACKEND_SERVER + process.env.CHAT_ENDPOINT
      try {
        let response = await fetch(chatURL, {
          mode: 'cors',
          method: "POST",
          body: JSON.stringify({
            messages,
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        })
        response = await response.json()
        // check if response has key named 'answer'
        if (!('answer' in response) && ('error' in response)) {
          throw new Error(response.error);
        } else {
          response = response.answer;
        }
        messages.push({ role: "assistant", content: response })
        chatLoader.style.height = "0px";
        answer.innerHTML = response;
      } catch (err) {
        // eslint-disable-next-line no-console
        console.error(err);
      }
    }
  };
  return { greet, chat };
})();

function showNameError() {
  if (nameText.validity.valueMissing) {
    // If the field is empty,
    // display the following error message.
    nameTextError.textContent = "WHAT'S YOUR NAME?";
  }

  // Set the styling appropriately
  nameTextError.className = "error active";
}

function showChatError() {
  if (chatText.validity.valueMissing) {
    chatTextError.textContent = "EMPTINESS IS SADNESS";
  }
  chatTextError.className = "error active";
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

themeButton.addEventListener("click", setTheme);

// eslint-disable-next-line no-unused-vars
nameText.addEventListener("input", (event) => {
  // Each time the user types something, we check if the
  // nameForm fields are valid.

  if (nameText.validity.valid) {
    // In case there is an error message visible, if the field
    // is valid, we remove the error message.
    nameTextError.textContent = ""; // Reset the content of the message
    nameTextError.className = "error"; // Reset the visual state of the message
  } else {
    // If there is still an error, show the correct error
    showNameError();
  }
});

// eslint-disable-next-line no-unused-vars
chatText.addEventListener("input", (event) => {
  if (chatText.validity.valid) {
    chatTextError.textContent = "";
    chatTextError.className = "error";
  } else {
    showChatError();
  }
});

nameForm.addEventListener("submit", (event) => {
  // if the nameText field is valid, we let the nameForm submit
  if (!nameText.validity.valid) {
    // If it isn't, we display an appropriate error message
    showNameError();
  }
  // Then we prevent the nameForm from being sent by canceling the event
  event.preventDefault();
});

chatForm.addEventListener("submit", (event) => {
  if (!chatText.validity.valid) {
    showChatError();
  }
  event.preventDefault();
});

tellMeButton.addEventListener("click", () => {
  const name = nameText.value;
  Momo.greet(name);
});

hmmButton.addEventListener("click", () => {
  const question = chatText.value;
  Momo.chat(question);
});
