const main_div = document.querySelector('.main');
const input_text = main_div.querySelector('input');
const tellme_button = main_div.querySelector('button');
const people_div = main_div.querySelector('.people');
const family = ["andrew", "ethan"];

function greet(name) {
  let person_div = document.createElement('div');
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

tellme_button.addEventListener('click', () => {
  let username = input_text.value;
  greet(username);
});