import { handleSubmit } from "../src/client/js/formHandler";

describe('Testing the submit functionality', () => {
    test('testing the handleSubmit() function', () => {
        expect(handleSubmit).toBeDefined();
      });
});