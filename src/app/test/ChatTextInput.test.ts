import { describe, expect, test } from "@jest/globals";
import { validateUserInput } from "../utils/utils";

describe("handleInput", () => {
  test("it should not allow an empty input", () => {
    const input = "";
    expect(validateUserInput(input)).toBe("Input cannot be empty");
  });
});
