const themeSwitch = require('./themeSwitch');

function themeSetup () {
    const themeButton = document.querySelector(".theme-button");
    themeButton.addEventListener("click", () =>{
        const root = document.documentElement;
        const displayTheme = themeSwitch(root.className, true)
        root.className = displayTheme;
        const changeTheme = themeSwitch(root.className, false);
        document.querySelector(".display-theme-name").textContent = changeTheme;
    });
}

export default themeSetup;