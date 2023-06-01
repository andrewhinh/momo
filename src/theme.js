function themeSetup () {
    const themeButton = document.querySelector(".theme-button");
    themeButton.addEventListener("click", () =>{
        const root = document.documentElement;
        const displayTheme = root.className === "dark" ? "light" : "dark";
        root.className = displayTheme;
        const changeTheme = root.className === "dark" ? "Light" : "Dark";
        document.querySelector(".display-theme-name").textContent = changeTheme;
    });
}

export default themeSetup;