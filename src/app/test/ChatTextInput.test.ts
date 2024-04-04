import { describe, expect, test } from "@jest/globals";

describe("handleInput", () => {
  test("it should not allow an empty input", () => {
    const input = "";
    expect(validateUserInput(input).toBe(false))
  })
})