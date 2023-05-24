// Imports
import "./style.css";

// Helper variables
const main_div = document.querySelector(".main");
const theme_button = main_div.querySelector(".theme-button");
const input_text = main_div.querySelector("input");
const tellme_button = main_div.querySelector(".tellme-button");

// Helper functions
const Person = (name) => ({ name });

const Momo = (() => {
  const family = ["andrew", "ethan", "mom"];
  const say_hey = (name) => `Hey ${name}!`;
  const greet = (person) => {
    const assets_path = "assets/";
    const people_div = main_div.querySelector(".people");
    const person_div = document.createElement("div");
    person_div.classname = "person";
    const say_hi = document.createElement("p");
    const hi_gif = document.createElement("video");

    if (family.includes(person.name.toLowerCase())) {
      say_hi.innerHTML = say_hey(
        person.name[0].toUpperCase() + person.name.slice(1).toLowerCase()
      );
      hi_gif.src = `${assets_path}momo-bored.mp4`;
    } else {
      say_hi.innerHTML = say_hey("stranger");
      hi_gif.src = `${assets_path}momo-happy.mp4`;
    }

    hi_gif.alt = "Momo Gif";
    hi_gif.autoplay = true;
    hi_gif.controls = true;
    hi_gif.loop = true;
    hi_gif.muted = true;
    hi_gif.type = "video/mp4";

    person_div.appendChild(say_hi);
    person_div.appendChild(hi_gif);
    people_div.appendChild(person_div);
    main_div.appendChild(people_div);
  };
  return { greet };
})();

function setTheme() {
  const root = document.documentElement;
  const setTheme = root.className === "dark" ? "light" : "dark";
  root.className = setTheme;
  const displayTheme = root.className === "dark" ? "Light" : "Dark";
  main_div.querySelector(".display-theme-name").textContent = displayTheme;
}

// Event listeners
tellme_button.addEventListener("click", () => {
  const name = input_text.value;
  const person = Person(name);
  Momo.greet(person);
});

theme_button.addEventListener("click", setTheme);

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
