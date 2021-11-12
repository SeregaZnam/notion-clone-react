import React, { FC, MutableRefObject, useEffect, useState } from 'react';
import { StyledInputAudio } from './Styles';
import { AudioComponent } from '../AudioComponent';

interface Props {
  inputRef: MutableRefObject<HTMLInputElement>;
  setAudioFile: (file: File) => void;
}

export const InputAudio: FC<Props> = ({ inputRef, setAudioFile }) => {
  const [srcAudioFile, setSrcAudioFile] = useState('');

  const handleAudioInput = (event) => {
    const [file] = event.target.files !== null ? [...event.target.files] : [];
    const blob = window.URL || window.webkitURL;
    const fileUrl = blob.createObjectURL(file);

    setSrcAudioFile(fileUrl);
    setAudioFile(file);
  };

  useEffect(() => {
    if (inputRef.current.value.length === 0) {
      setSrcAudioFile('');
    }
  }, [inputRef.current?.value]);

  return (
    <>
      <StyledInputAudio>
        <input type="file" ref={inputRef} accept="audio/*" onChange={handleAudioInput} />
        <br />
        {srcAudioFile && <AudioComponent srcAudioFile={srcAudioFile} />}
      </StyledInputAudio>
    </>
  );
};
