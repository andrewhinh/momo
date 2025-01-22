function interactSetup() {
    // Helper variables
    const assetsPath = "./assets/";

    const nameForm = document.querySelector(".name-form");
    const nameText = document.querySelector("#name");
    const nameTextError = document.querySelector("#name + p.error");
    const tellMeButton = document.querySelector(".tellme-button");

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
                const people = document.querySelector(".people");
                people.style.visibility = "visible";  // show people after being hidden in initial page load
                const person = document.createElement("div");
                person.classname = "person";
                const title = document.createElement("p");
                const video = document.createElement("video");

                if (family.includes(name.toLowerCase())) {
                    title.innerHTML = sayHey(
                        name[0].toUpperCase() + name.slice(1).toLowerCase(),
                        true
                    );
                    video.src = `${assetsPath}momo-bored.mp4`;
                    video.alt = "Video of Momo being bored";
                } else {
                    title.innerHTML = sayHey("stranger", false);
                    video.src = `${assetsPath}momo-happy.mp4`;
                    video.alt = "Video of Momo being happy";
                }

                video.autoplay = true;
                video.controls = true;
                video.loop = true;
                video.muted = true;
                video.type = "video/mp4";

                person.appendChild(title);
                person.appendChild(video);
                people.appendChild(person);
            }
        };
        return { greet };
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

    nameForm.addEventListener("submit", (event) => {
        // if the nameText field is valid, we let the nameForm submit
        if (!nameText.validity.valid) {
            // If it isn't, we display an appropriate error message
            showNameError();
        }
        // Then we prevent the nameForm from being sent by canceling the event
        event.preventDefault();
    });

    tellMeButton.addEventListener("click", () => {
        const name = nameText.value;
        Momo.greet(name);
    });

}

export default interactSetup;