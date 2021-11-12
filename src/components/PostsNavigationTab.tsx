import React, { ChangeEvent, SyntheticEvent, useRef, useState } from 'react';
import { Button, TextField } from '@mui/material';
import { Posts } from './Posts';
import { useAppDispatch } from '../store/hooks';
import { fetchAddAudio, fetchAddPost } from '../store/postSliceThunks';
import { InputFile } from './InputFile';
import { InputAudio } from './InputAudio';

export const PostsNavigationTab = () => {
  const [inputValue, setInputValue] = useState('');
  const [fileBlob, setFileBlob] = useState(null);
  const [audioFile, setAudioFile] = useState<File>(null);

  const fileInputRef = useRef<HTMLInputElement>();
  const audioInputRef = useRef<HTMLInputElement>();
  const dispatch = useAppDispatch();

  const onAddPost = (event: SyntheticEvent): void => {
    event.preventDefault();

    dispatch(
      fetchAddPost({
        text: inputValue,
        author: localStorage.getItem('user') || 'user',
        imageBlob: fileBlob,
        srcAudioFile: audioFile?.name ?? '',
      }),
    );
    dispatch(fetchAddAudio(audioFile));
    resetForm();
  };

  const resetForm = (): void => {
    setInputValue('');
    setFileBlob(null);
    fileInputRef.current.value = '';
    audioInputRef.current.value = '';
  };

  const changeInputValue = (event: ChangeEvent<HTMLInputElement>): void =>
    setInputValue(event.target.value);

  return (
    <>
      <form onSubmit={onAddPost}>
        <TextField
          id="outlined-multiline-static"
          label="Post"
          multiline
          fullWidth
          value={inputValue}
          onChange={changeInputValue}
        />
        <InputFile inputRef={fileInputRef} setFileBlob={setFileBlob} />
        <InputAudio inputRef={audioInputRef} setAudioFile={setAudioFile} />
        <Button type="submit" sx={{ margin: '10px 0 10px' }}>
          Add Post
        </Button>
      </form>

      <Posts />
    </>
  );
};
