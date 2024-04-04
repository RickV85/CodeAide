import { describe, expect, test } from "@jest/globals";
import { validateUserInput } from "../utils/utils";

describe("handleInput", () => {
  test("it should not allow an empty input", () => {
    const input = "";
    expect(validateUserInput(input)).toBe("Input cannot be empty");
  });

  test("it should not allow inputs longer than 1000 chars", () => {
    const tooLong = "a".repeat(1001);

    expect(validateUserInput(tooLong)).toBe("Max character count exceeded");
  });
});
