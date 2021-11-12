import React, { FC } from 'react';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { Link } from 'react-router-dom';
import { StyledLiItem } from './Styles';

interface Props {
  title: string;
  linkId: string;
}

export const ListItem: FC<Props> = ({ title, linkId }) => {
  return (
    <StyledLiItem>
      <ArrowRightIcon />
      <Link to={`/${linkId}`}>{title}</Link>
        <input type="text"/>
    </StyledLiItem>
  );
};
