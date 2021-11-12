import React, { FC } from 'react';
import MoodIcon from '@mui/icons-material/Mood';

interface Props {
  className?: string;
  text: string;
}

export const IconControl: FC<Props> = ({ text, className = '', children }) => {
  return (
    <div className={className} style={{ display: 'flex', height: '28px', padding: '0 8px 0 8px' }}>
      <span style={{ display: 'flex', alignItems: 'center' }}>
        {children}
        <span style={{ marginLeft: '5px' }}>{text}</span>
      </span>
    </div>
  );
};
