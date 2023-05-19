function hey(name) {
  return "Hello, " + name + "!";
}

let username = prompt("I'm Momo, who are you?");

if (username.toLowerCase() == "andrew") {
  alert(hey(username));
} else {
  alert(hey("stranger"));
}
