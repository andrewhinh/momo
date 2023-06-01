function themeSwitch(currentTheme, isDisplay) {
    if (isDisplay) {
        return currentTheme === "dark" ? "light" : "dark";
    }
    return currentTheme === "dark" ? "Light" : "Dark";
}

module.exports = themeSwitch;