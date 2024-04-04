export const validateUserInput = (input: string) => {
  if (input === "") {
    return "Input cannot be empty";
  } else if (input.length > 1000) {
    return "Max character count exceeded";
  } else {
    return "valid";
  }
};
