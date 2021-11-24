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
  initValueComment?: string;
  initImagePreviewSrc?: string | null;
}

export const InputPageComment: FC<Props> = ({
  handleSubmit,
  autoFocus,
  setFileBlob,
  initValueComment = "",
  initImagePreviewSrc = null,
}) => {
  const [inputValueComment, setInputValueComment] = useState(initValueComment);
  const [imagePreviewSrc, setImagePreviewSrc] = useState(initImagePreviewSrc);
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
    setImagePreviewSrc("");
    fileInputRef.current.value = "";
  };

  useEffect(() => {
    if (fileInputRef.current.value.length === 0 && imagePreviewSrc === "") {
      setImagePreviewSrc(null);
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
      <label>
        <StyledAttachFileIcon />
        <input type="file" ref={fileInputRef} onChange={handleFileInput} hidden />
      </label>
      <div hidden={!imagePreviewSrc}>
        <StyledImagePreview>
          <StyledImagePreload imageSrc={`url(${imagePreviewSrc})`} />
          <StyledCancelIcon onClick={removeImage} />
        </StyledImagePreview>
      </div>
    </StyledForm>
  );
};
