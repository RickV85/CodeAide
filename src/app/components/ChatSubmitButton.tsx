import { Button } from "@mui/material";
import { RefObject } from "react";

interface Props {
  chatSubmitBtnRef: RefObject<HTMLButtonElement>;
}

export default function ChatSubmitButton({ chatSubmitBtnRef }: Props) {
  return (
    <Button type="submit" variant="contained" ref={chatSubmitBtnRef}>
      Submit
    </Button>
  );
}
