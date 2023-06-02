function themeSwitch(currentTheme, isDisplay, callback=x=>x) {
    const newIsDisplay = callback(isDisplay);
    if (newIsDisplay) {
        return currentTheme === "dark" ? "light" : "dark";
    }
    return currentTheme === "dark" ? "Light" : "Dark";
}

module.exports = themeSwitch;