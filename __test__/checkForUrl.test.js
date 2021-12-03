import { checkForUrl } from "../src/client/js/urlChecker";

describe("Testing checkForUrl ", () => {
  test("should return true or false ", () => {
    const input = "www.google.com";
    const output = true;
    const badInput = "google-com";
    const badOutput = false;

    expect(checkForUrl(input)).toEqual(output);
    expect(checkForUrl(badInput)).toEqual(badOutput);
  });
});
