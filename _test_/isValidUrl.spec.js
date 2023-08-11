import { isValidUrl } from "../src/client/js/urlChecker";

describe('Testing the url validation', () => {
    test('isValidUrl() function returns true for valid url', () => {
        const url = 'https://www.udacity.com/'
        expect(isValidUrl(url)).toBe(true)
    })
    test('isValidUrl() function returns false for invalid url', () => {
        const url = 'udacity'
        expect(isValidUrl(url)).toBe(false)
    })
})