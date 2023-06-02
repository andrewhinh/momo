const themeSwitch = require('./themeSwitch');

const mockCallback = jest.fn(x => x);

test('Test theme display', () => {
    expect(themeSwitch("dark", true, mockCallback)).toBe("light");

    // The mock function was called once
    expect(mockCallback.mock.calls).toHaveLength(1);

    // The argument of the call to the function was true
    expect(mockCallback.mock.calls[0][0]).toBe(true);

    // The return value of the call to the function was true
    expect(mockCallback.mock.results[0].value).toBe(true);
});

test('Test theme change', () => {
    expect(themeSwitch("dark", false, mockCallback)).toBe("Light");
});