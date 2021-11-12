import { FC, MutableRefObject, useState } from "react";
import { StyledInputComment } from "./Styles";

interface Props {
  inputRef: MutableRefObject<HTMLInputElement>;
  handleSubmit: (value: string) => void;
}

export const InputPageComment: FC<Props> = ({ handleSubmit, inputRef }) => {
  const [inputValueComment, setInputValueComment] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(event.target);
    handleSubmit(inputValueComment);
  };

  return (
    <form onSubmit={onSubmit}>
      <StyledInputComment
        type="text"
        placeholder="Add a comment..."
        ref={inputRef}
        value={inputValueComment}
        onChange={(event) => setInputValueComment(event.target.value)}
      />
    </form>
  );
};
