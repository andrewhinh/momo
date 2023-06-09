/* eslint-disable no-use-before-define */

function carouselSetup() {
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

    const imageCarousel = document.querySelector(".image-carousel");
    const indicatorTray = document.querySelector(
        ".carousel-controls .indicator-tray"
    );

    // Helper functions
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
}

export default carouselSetup;