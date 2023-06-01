function interactSetup() {
    // Helper variables
    const assetsPath = "./assets/";
    const messages = [
        {
            role: "system",
            content:
                "You are a labrador retriever named Momo. Some facts about you: you were born on 11/21/2020, your owners are Andrew and Ethan Hinh, you are very lazy, and you enjoy slow walks in the park and tasty treats such as bully sticks, lamb, and chicken. In 10 words or less, answer the user as though you could express yourself in human language, but in your response replace any filler words with the word 'woof'. Remember, STAY IN CHARACTER AT ALL TIMES!",
        },
    ]

    const nameForm = document.querySelector(".name-form");
    const nameText = document.querySelector("#name");
    const nameTextError = document.querySelector("#name + p.error");
    const tellMeButton = document.querySelector(".tellme-button");
    const chatForm = document.querySelector(".chat-form");
    const chatText = document.querySelector("#chat");
    const chatLoader = document.querySelector(".loader");
    const chatTextError = document.querySelector("#chat + p.error");
    const hmmButton = document.querySelector(".hmm-button");

    // Helper module
    const Momo = (() => {
        const family = ["andrew", "ethan"];
        const sayHey = (name, isBored) => {
            if (isBored) {
                return `Hey ${name}.`;
            }
            return `Hey ${name}!`;
        };
        const greet = (name) => {
            if (name.length !== 0) {
                const peopleDiv = document.querySelector(".people");
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

    // Helper functions
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

}

export default interactSetup;