const themeSwitch = require('./themeSwitch');

const mockCallback = jest.fn(x => x).mockName('identity transform');;

test('Test theme display', () => {
    expect(themeSwitch("dark", true, mockCallback)).toBe("light");

    // The mock function was called once
    expect(mockCallback).toHaveBeenCalled();

    // The argument of the call to the function was true
    expect(mockCallback).toHaveBeenCalledWith(true);

    // The return value of the call to the function was true
    expect(mockCallback.mock.results[0].value).toBe(true);
});

test('Test theme change', () => {
    expect(themeSwitch("dark", false, mockCallback)).toBe("Light");
});