import ImageIcon from "@mui/icons-material/Image";
import MessageIcon from "@mui/icons-material/Message";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import { StyledBoxIcons, StyledControlsBlock, StyledPage, StyledTopMenu } from "./Styles";
import { Box } from "@mui/material";
import { IconControl } from "../IconControl";
import { TitlePage } from "../TitlePage";
import { useParams } from "react-router";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { useEffect, useRef, useState } from "react";
import { InputPageComment } from "../InputPageComment";
import { addComment } from "../../store/pagesSlice";

export const Page = () => {
  const { id } = useParams<{ id: string }>();
  const page = useAppSelector((state) => state.pages.pages.find((page) => page.id === id));
  const [visibleInputComment, setVisibleInputComment] = useState(false);
  const dispatch = useAppDispatch();
  const inputCommentRef = useRef<HTMLInputElement>();

  useEffect(() => {
    setVisibleInputComment(false);
  }, [id]);

  const onAddComment = (text): void => {
    dispatch(addComment({ text, pageId: id }));
  };

  const onHandleAddComment = () => {
    setVisibleInputComment(true);
    console.log(inputCommentRef)
  };

  return (
    <>
      <StyledPage>
        <StyledTopMenu>
          <Box sx={{ width: "50%" }}>Untitled</Box>
          <Box sx={{ width: "50%" }}>Share</Box>
        </StyledTopMenu>
        <Box sx={{ paddingLeft: "96px" }}>
          <StyledBoxIcons>
            <StyledControlsBlock>
              <IconControl className="icon-control" text="Add icon">
                <EmojiEmotionsIcon />
              </IconControl>
              <IconControl className="icon-control" text="Add cover">
                <ImageIcon />
              </IconControl>
              <div onClick={onHandleAddComment}>
                <IconControl className="icon-control" text="Add comment">
                  <MessageIcon />
                </IconControl>
              </div>
            </StyledControlsBlock>
          </StyledBoxIcons>
          {visibleInputComment && (
            <InputPageComment inputRef={inputCommentRef} handleSubmit={onAddComment} />
          )}
          <TitlePage pageTitle={page.title} />
        </Box>
      </StyledPage>
    </>
  );
};
