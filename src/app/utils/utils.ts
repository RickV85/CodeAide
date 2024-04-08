export const validateUserInput = (input: string) => {
  if (input === "") {
    return "Input cannot be empty";
  } else if (input.length > 2000) {
    return `Your response is ${input.length - 2000} characters too long`;
  } else {
    return "valid";
  }
};
