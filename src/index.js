// Imports
import './style.css';
import happy_video from './assets/momo-happy.mp4';
import bored_video from './assets/momo-bored.mp4';

// Helper variables
const main_div = document.querySelector('.main');
const theme_button = main_div.querySelector('.theme-button');
const input_text = main_div.querySelector('input');
const tellme_button = main_div.querySelector('.tellme-button');
const people_div = main_div.querySelector('.people');
const family = ["andrew", "ethan", "mom"];

// Helper functions
const Person = (name) => {
  return { name };
};

const Momo = (() => {
  const say_hey = (name) => `Hey ${name}!`;
  const greet = (person) => {
    let person_div = document.createElement('div');
    person_div.classname = "person";
    let say_hi = document.createElement('p');
    let hi_gif = document.createElement('video');

    if (family.includes(person.name.toLowerCase())) {
      say_hi.innerHTML = say_hey(person.name[0].toUpperCase() + person.name.slice(1));
      hi_gif.src = happy_video;
    } else {
      say_hi.innerHTML = say_hey("stranger");
      hi_gif.src = bored_video;
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
  }
  return { greet };
})();

function setTheme() {
  const root = document.documentElement;
  const setTheme = root.className === 'dark' ? 'light' : 'dark';
  root.className = setTheme;
  const displayTheme = root.className === 'dark' ? 'Light' : 'Dark';
  main_div.querySelector('.display-theme-name').textContent = displayTheme;
}

// Event listeners
tellme_button.addEventListener('click', () => {
  let name = input_text.value;
  let person = Person(name);
  Momo.greet(person);
});

theme_button.addEventListener('click', setTheme);

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