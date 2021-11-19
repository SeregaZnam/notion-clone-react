import { PostModel } from '../../types/Post.model';
import React, { FC, SyntheticEvent, useState } from 'react';
import { useAppDispatch } from '../../store/hooks';
import { fetchChangePost, fetchRemovePost } from '../../store/post/postSliceThunks';
import { Avatar, Box, ListItem, ListItemAvatar, ListItemText, TextField } from '@mui/material';
import {
  StyledCloseIcon,
  StyledDeleteIcon,
  StyledEditIcon,
  StyledImage,
  StyledSectionContent,
} from './Styles';
import { AudioComponent } from '../AudioComponent';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';

interface Props {
  post: PostModel;
}

export const Post: FC<Props> = ({ post }) => {
  const srcAudioFile = `http://localhost:3001/getFile?fileName=${post.srcAudioFile}`;

  const [visibleChangePost, setVisibleChangePost] = useState(false);
  const [changedPostText, setChangedPostText] = useState(post.text);
  const [changedImageBlob, setChangedImageBlob] = useState(post.imageBlob);
  const dispatch = useAppDispatch();

  const onEdit = (event: SyntheticEvent) => {
    event.preventDefault();
    dispatch(
      fetchChangePost({
        ...post,
        id: post.id,
        text: changedPostText,
        imageBlob: changedImageBlob,
      }),
    );
    setVisibleChangePost(false);
  };

  const onDelete = () => {
    dispatch(fetchRemovePost({ id: post.id }));
  };

  return (
    <section style={{ borderBottom: '1px solid black' }}>
      <article>
        <ListItem>
          <ListItemAvatar>
            <Avatar alt="Profile Picture" src={''} />
          </ListItemAvatar>
          <ListItemText primary={post.author} secondary={post.date} />
        </ListItem>
        <StyledSectionContent>
          {visibleChangePost ? (
            <form onSubmit={onEdit}>
              <input
                type="text"
                value={changedPostText}
                onChange={(e) => setChangedPostText(e.target.value)}
              />
              {changedImageBlob && (
                <div>
                  <img src={changedImageBlob as unknown as string} alt="" />
                  <StyledCloseIcon onClick={() => setChangedImageBlob(null)} />
                </div>
              )}
            </form>
          ) : (
            <div>
              <span>{post.text}</span>
              <div>
                <Box sx={{ width: 300, marginTop: '20px' }}>
                  <StyledImage src={post.imageBlob as unknown as string} alt="" />{' '}
                </Box>
              </div>
            </div>
          )}
          <StyledEditIcon onClick={() => setVisibleChangePost(!visibleChangePost)} />
          <StyledDeleteIcon onClick={() => onDelete()} />

          {post.srcAudioFile && <AudioComponent srcAudioFile={srcAudioFile} />}
        </StyledSectionContent>

        <div>
          <ThumbUpIcon />
          <span>{post.likes}</span>
          <ThumbDownIcon />
          <span>{post.dislikes}</span>
        </div>

        <section style={{ display: 'flex' }}>
          <Avatar alt="Profile Picture" src={''} />
          <TextField label="Comment" variant="standard" />
        </section>
      </article>
    </section>
  );
};
