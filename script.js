function hey(name) {
  return "Hello, " + name + "!";
}

while (true) {
  var username = document.querySelecter(".main > input").value;

  if (username.toLowerCase() == "andrew" || "ethan") {
    alert(hey(username.charAt(0).toUpperCase() + username.slice(1)));
  } else {
    alert(hey("stranger"));
  }

}
