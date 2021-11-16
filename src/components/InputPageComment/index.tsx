import React, { ChangeEvent, FC, useEffect, useRef, useState } from "react";
import {
  StyledAttachFileIcon,
  StyledCancelIcon,
  StyledForm,
  StyledImagePreload,
  StyledImagePreview,
  StyledInputComment,
} from "./Styles";

interface Props {
  handleSubmit: (value: string) => void;
  setFileBlob: (value: string) => void;
  autoFocus: boolean;
}

export const InputPageComment: FC<Props> = ({ handleSubmit, autoFocus, setFileBlob }) => {
  const [inputValueComment, setInputValueComment] = useState("");
  const [imagePreviewSrc, setImagePreviewSrc] = useState("");
  const fileInputRef = useRef<HTMLInputElement>();

  const onSubmit = (event) => {
    event.preventDefault();
    handleSubmit(inputValueComment);
    resetForm();
  };

  const resetForm = () => {
    setInputValueComment("");
    setImagePreviewSrc("");
    setFileBlob(null);
  };

  const handleFileInput = (event: ChangeEvent<HTMLInputElement>): void => {
    const [file] = event.target.files !== null ? [...event.target.files] : [];
    const reader = new FileReader();

    reader.onloadend = () => {
      setImagePreviewSrc(reader.result as string);
      setFileBlob(reader.result as string);
    };

    if (file) {
      reader.readAsDataURL(file);
    } else {
      setImagePreviewSrc("");
    }
  };

  const removeImage = () => {
    setFileBlob("");
    fileInputRef.current.value = "";
  };

  useEffect(() => {
    if (fileInputRef.current.value.length === 0) {
      setImagePreviewSrc("");
    }
  }, [fileInputRef.current?.value]);

  return (
    <StyledForm onSubmit={onSubmit}>
      <StyledInputComment
        type="text"
        placeholder="Add a comment..."
        value={inputValueComment}
        onChange={(event) => setInputValueComment(event.target.value)}
        autoFocus={autoFocus}
      />
      <label htmlFor="upload-file">
        <StyledAttachFileIcon />
        <input id="upload-file" type="file" ref={fileInputRef} onChange={handleFileInput} hidden />
      </label>
      {imagePreviewSrc && (
        <StyledImagePreview>
          <StyledImagePreload imageSrc={`url(${imagePreviewSrc})`} />
          <StyledCancelIcon onClick={removeImage} />
        </StyledImagePreview>
      )}
    </StyledForm>
  );
};
