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
    let curImgIdx = 0; // index of the currently displayed image in the images array

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
            updateImageTo((curImgIdx + 1) % images.length);
        }, 1000); // 1000 = 1000ms = 1s
    }

    function updateImageTo(index) {
        const prevImgIdx = curImgIdx;
        curImgIdx = index;

        const prevImg = imageCarousel.querySelector(`img:nth-child(${prevImgIdx + 1})`);
        const curImg = imageCarousel.querySelector(`img:nth-child(${curImgIdx + 1})`);

        prevImg.style.display = "none";
        curImg.style.display = "block";
        if (prevImg.classList.contains("moving-left")) {
            prevImg.classList.remove("moving-left");
            curImg.classList.add("moving-right");
        } else {
            prevImg.classList.remove("moving-right");
            curImg.classList.add("moving-left");
        }

        indicatorTray
            .querySelector(`.indicator:nth-child(${prevImgIdx + 1})`)
            .classList.remove("active");

        indicatorTray
            .querySelector(`.indicator:nth-child(${curImgIdx + 1})`)
            .classList.add("active");

        resetTimer(); // reset the timer whenever the image is updated
    }

    function handleCarouselStep(direction) {
        const index =
            direction === "next"
                ? (curImgIdx + 1) % images.length
                : (curImgIdx - 1 + images.length) % images.length;
        updateImageTo(index);
    }

    // Event listeners
    document.querySelector(".previous").addEventListener("click", () => handleCarouselStep("previous"));

    document.querySelector(".next").addEventListener("click", () => handleCarouselStep("next"));


    window.addEventListener("keydown", (event) => {
        if (event.key === "ArrowRight") {
            handleCarouselStep("next");
        } else if (event.key === "ArrowLeft") {
            handleCarouselStep("previous");
        }
    });

    document.addEventListener("DOMContentLoaded", () => {
        images.forEach((_, index) => {
            const img = document.createElement("img");
            img.src = images[index]; // check if img.src is undefined

            const indicator = document.createElement("div");
            indicator.classList.add("indicator");

            if (index === 0) {
                img.style.display = "block";
                img.classList.add("moving-left");
                indicator.classList.add("active");
            }

            imageCarousel.appendChild(img);
            indicatorTray.appendChild(indicator);
        });

        document.querySelectorAll(".indicator").forEach((indicator, index) => {
            indicator.addEventListener("click", () => updateImageTo(index));
        });
        resetTimer();
    });
}

export default carouselSetup;