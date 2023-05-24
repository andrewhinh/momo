// Imports
import "./style.css";

// Helper variables
const mainDiv = document.querySelector(".main");
const themeButton = mainDiv.querySelector(".theme-button");
const inputText = mainDiv.querySelector("input");
const tellMeButton = mainDiv.querySelector(".tellme-button");

// Helper functions
const Person = (name) => ({ name });

const Momo = (() => {
  const family = ["andrew", "ethan", "mom"];
  const sayHey = (name) => `Hey ${name}!`;
  const greet = (person) => {
    const assetsPath = "assets/";
    const peopleDiv = mainDiv.querySelector(".people");
    const personDiv = document.createElement("div");
    personDiv.classname = "person";
    const sayHi = document.createElement("p");
    const hiGif = document.createElement("video");

    if (family.includes(person.name.toLowerCase())) {
      sayHi.innerHTML = sayHey(
        person.name[0].toUpperCase() + person.name.slice(1).toLowerCase()
      );
      hiGif.src = `${assetsPath}momo-bored.mp4`;
    } else {
      sayHi.innerHTML = sayHey("stranger");
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
  };
  return { greet };
})();

function setTheme() {
  const root = document.documentElement;
  const displayTheme = root.className === "dark" ? "light" : "dark";
  root.className = displayTheme;
  const changeTheme = root.className === "dark" ? "Light" : "Dark";
  mainDiv.querySelector(".display-theme-name").textContent = changeTheme;
}

// Event listeners
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
