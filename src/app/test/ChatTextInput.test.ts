import { describe, expect, test } from "@jest/globals";
import { validateUserInput } from "../utils/utils";

describe("handleInput", () => {
  test("it should not allow an empty input", () => {
    const input = "";
    expect(validateUserInput(input)).toBe("Input cannot be empty");
  });

  test("it should not allow inputs longer than 2000 chars", () => {
    const maxLength = "a".repeat(2000);
    const tooLong = "a".repeat(2010);

    expect(validateUserInput(maxLength)).toBe("valid");
    expect(validateUserInput(tooLong)).toBe("Your response is 10 characters too long");
  });
});
