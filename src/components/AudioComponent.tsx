import React, { FC } from "react";

interface Prop {
  srcAudioFile: string;
}

export const AudioComponent: FC<Prop> = ({ srcAudioFile }) => {
  return (
    <audio src={srcAudioFile} controls>
      <source src={srcAudioFile} type="audio/mp3" />
    </audio>
  );
};
