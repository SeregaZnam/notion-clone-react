import React, { ChangeEvent, FC, MutableRefObject, useEffect, useState } from 'react';
import { StyledCancelIcon, StyledImagePreload, StyledInputFile } from './Styles';
import { Box } from '@mui/material';

interface Props {
  inputRef: MutableRefObject<HTMLInputElement>;
  setFileBlob: (fileBlob: string) => void;
}

export const InputFile: FC<Props> = ({ inputRef, setFileBlob }) => {
  const [imagePreviewSrc, setImagePreviewSrc] = useState('');

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
      setImagePreviewSrc('');
    }
  };

  const removeImage = () => {
    setFileBlob('');
    inputRef.current.value = '';
  };

  useEffect(() => {
    if (inputRef.current.value.length === 0) {
      setImagePreviewSrc('');
    }
  }, [inputRef.current?.value]);

  return (
    <>
      <StyledInputFile>
        <input type="file" ref={inputRef} onChange={handleFileInput} />
        <br />
        {imagePreviewSrc && (
          <Box sx={{ display: 'inline-block', position: 'relative' }}>
            <StyledImagePreload imageSrc={`url(${imagePreviewSrc})`} />
            <StyledCancelIcon onClick={removeImage} />
          </Box>
        )}
      </StyledInputFile>
    </>
  );
};
