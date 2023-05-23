// Helper variables
const main_div = document.querySelector('.main');
const theme_button = main_div.querySelector('.theme-button');
const input_text = main_div.querySelector('input');
const tellme_button = main_div.querySelector('.tellme-button');
const people_div = main_div.querySelector('.people');
const family = ["andrew", "ethan", "mom"];

// Helper functions
function greet(name) {
  let person_div = document.createElement('div');
  person_div.classname = "person";
  let say_hi = document.createElement('p');
  function hey(name) { return `Hello, ${name}!`; }
  let hi_gif = document.createElement('video');

  if (family.includes(name.toLowerCase())) {
    say_hi.innerHTML = hey(name[0].toUpperCase() + name.slice(1));
    hi_gif.src = "./assets/momo-happy.mp4";
  } else {
    say_hi.innerHTML = hey("stranger");
    hi_gif.src = "./assets/momo-bored.mp4";
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

function setTheme() {
  const root = document.documentElement;
  const setTheme = root.className === 'dark' ? 'light' : 'dark';
  root.className = setTheme;
  const displayTheme = root.className === 'dark' ? 'Light' : 'Dark';
  main_div.querySelector('.display-theme-name').textContent = displayTheme;
}

// Event listeners
tellme_button.addEventListener('click', () => {
  let username = input_text.value;
  greet(username);
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