export const validateUserInput = (input: string) => {
  if (input === "") {
    return "Input cannot be empty";
  }
  return "valid";
};
