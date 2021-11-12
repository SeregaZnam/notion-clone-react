import React, { useEffect } from 'react';
import { useRouteMatch } from 'react-router-dom';
import ImageIcon from '@mui/icons-material/Image';
import MessageIcon from '@mui/icons-material/Message';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import { StyledBoxIcons, StyledControlsBlock, StyledPage, StyledTopMenu } from './Styles';
import { Box } from '@mui/material';
import { IconControl } from '../IconControl';
import { TitlePage } from '../TitlePage';

export const Page = () => {
  return (
    <>
      <StyledPage>
        <StyledTopMenu>
          <Box sx={{ width: '50%' }}>Untitled</Box>
          <Box sx={{ width: '50%' }}>Share</Box>
        </StyledTopMenu>
        <Box sx={{ paddingLeft: '96px' }}>
          <StyledBoxIcons className="123">
            <StyledControlsBlock>
              <IconControl className="icon-control" text="Add icon">
                <EmojiEmotionsIcon />
              </IconControl>
              <IconControl className="icon-control" text="Add cover">
                <ImageIcon />
              </IconControl>
              <IconControl className="icon-control" text="Add comment">
                <MessageIcon />
              </IconControl>
            </StyledControlsBlock>
          </StyledBoxIcons>
          <TitlePage />
        </Box>
      </StyledPage>
    </>
  );
};
