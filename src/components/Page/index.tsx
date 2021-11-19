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
import { useCallback, useEffect, useState } from "react";
import { InputPageComment } from "../InputPageComment";
import { CommentsSection } from "../CommentsSection";
import { TextSection } from "../../shared/components/TextSection";
import { fetchChangePage } from "../../store/page/pageSliceThunks";
import { CountResolvedComments } from "../CountResolvedComments";
import { fetchAddComment, fetchChangeComment, fetchComments } from "../../store/comment/commentsSliceThunks";
import { usePrev } from "./usePrev";

export const Page = () => {
  const { id } = useParams<{ id: string }>();

  const [fileBlob, setFileBlob] = useState(null);
  const [visibleInputComment, setVisibleInputComment] = useState(false);
  const dispatch = useAppDispatch();
  const page = useAppSelector((state) => state.pages.pages.find((page) => page.id === id));

  const onAddComment = (text): void => {
    dispatch(fetchAddComment({ text, pageId: id, imageBlob: fileBlob }));
  };

  const onHandleAddIcon = () => {
    dispatch(
      fetchChangePage({
        id: page.id,
        iconClass: `icon-${getRandomInt(400)}`,
      }),
    );
  };

  const onResolveComment = useCallback((commentId: string) => {
    dispatch(fetchChangeComment({ id: commentId, resolved: true }));
  }, []);

  // const prevFunc = usePrev(onResolveComment);
  //
  // console.log(onResolveComment === prevFunc);

  useEffect(() => {
    dispatch(fetchComments({ id }));
  }, [id]);

  if (!page) {
    return null;
  }

  function getRandomInt(max) {
    return Math.floor(Math.random() * (max - 2)) + 1;
  }

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
          <TitlePage pageId={page.id} title={page.title} />
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
