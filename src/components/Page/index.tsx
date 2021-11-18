import ImageIcon from "@mui/icons-material/Image";
import MessageIcon from "@mui/icons-material/Message";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import {
  StyledBoxIcons,
  StyledControlsBlock,
  StyledHorizontalLine,
  StyledPage,
  StyledPageIcon,
  StyledTopMenu,
} from "./Styles";
import { Box } from "@mui/material";
import { IconControl } from "../IconControl";
import { TitlePage } from "../TitlePage";
import { useParams } from "react-router";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { useEffect, useState } from "react";
import { InputPageComment } from "../InputPageComment";
import { CommentsSection } from "../CommentsSection";
import { TextSection } from "../../shared/components/TextSection";
import { fetchChangePage } from "../../store/pageSliceThunks";
import { CountResolvedComments } from "../CountResolvedComments";
import { fetchAddComment, fetchChangeComment, fetchComments } from "../../store/commentsThunks";

export const Page = () => {
  const { id } = useParams<{ id: string }>();

  const [fileBlob, setFileBlob] = useState(null);
  const [visibleInputComment, setVisibleInputComment] = useState(false);
  const dispatch = useAppDispatch();
  const page = useAppSelector((state) => state.pages.pages.find((page) => page.id === id));

  useEffect(() => {
    dispatch(fetchComments({ id }));
  }, [id]);

  if (!page) {
    return null;
  }

  const onAddComment = (text): void => {
    dispatch(fetchAddComment({ text, pageId: id, imageBlob: fileBlob }));
  };

  const onHandleAddIcon = () => {
    dispatch(
      fetchChangePage({
        ...page,
        iconClass: `icon-${getRandomInt(400)}`,
      }),
    );
  };

  function getRandomInt(max) {
    return Math.floor(Math.random() * (max - 2)) + 1;
  }

  const onResolveComment = (commentId: string) => {
    dispatch(fetchChangeComment({ id: commentId, resolved: true }));
  };

  return (
    <>
      <StyledPage>
        <StyledTopMenu>
          <Box sx={{ width: "50%" }}>Untitled</Box>
          <Box sx={{ width: "50%" }}>Share</Box>
        </StyledTopMenu>
        <Box sx={{ padding: "0 96px" }}>
          <StyledBoxIcons>
            {page.iconSrc ? (
              <div className="page-icon-container">
                <StyledPageIcon src={page.iconSrc} />
              </div>
            ) : (
              <div className="page-icon-container">
                <i className={page.iconClass}></i>
              </div>
            )}
            <StyledControlsBlock>
              <div onClick={onHandleAddIcon}>
                <IconControl className="icon-control" text="Add icon">
                  <EmojiEmotionsIcon />
                </IconControl>
              </div>
              <IconControl className="icon-control" text="Add cover">
                <ImageIcon />
              </IconControl>
              <div onClick={() => setVisibleInputComment(true)}>
                <IconControl className="icon-control" text="Add comment">
                  <MessageIcon />
                </IconControl>
              </div>
            </StyledControlsBlock>
          </StyledBoxIcons>
          <TitlePage page={page} />
          <CommentsSection pageId={page.id} optionText="Resolve" onOptionClick={onResolveComment} />
          {visibleInputComment && (
            <>
              <InputPageComment
                handleSubmit={onAddComment}
                autoFocus={true}
                setFileBlob={setFileBlob}
              />
              <StyledHorizontalLine />
            </>
          )}
          <CountResolvedComments pageId={page.id} />

          <TextSection />
        </Box>
      </StyledPage>
    </>
  );
};
