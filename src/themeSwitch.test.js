const themeSwitch = require('./themeSwitch');

test('Test theme display', () => {
    expect(themeSwitch("dark", true)).toBe("light");
});

test('Test theme change', () => {
    expect(themeSwitch("dark", false)).toBe("Light");
});
