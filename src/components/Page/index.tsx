import ImageIcon from "@mui/icons-material/Image";
import MessageIcon from "@mui/icons-material/Message";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import {
  StyledBoxIcons,
  StyledControlsBlock,
  StyledCountResolvedComments,
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
import { SyntheticEvent, useEffect, useRef, useState } from "react";
import { InputPageComment } from "../InputPageComment";
import { addComment, addPageIcon, resolveComment } from "../../store/pagesSlice";
import { useHistory } from "react-router-dom";
import { CommentsSection } from "../CommentsSection";
import CheckIcon from "@mui/icons-material/Check";
import { openModal } from "../../store/modalSlice";
import { Comment } from "../Comment";

export const Page = () => {
  const [visibleInputComment, setVisibleInputComment] = useState(false);
  const [fileBlob, setFileBlob] = useState(null);
  const dispatch = useAppDispatch();
  const history = useHistory();
  const { id } = useParams<{ id: string }>();
  const page = useAppSelector((state) => state.pages.pages.find((page) => page.id === id));

  useEffect(() => {
    setVisibleInputComment(false);
  }, [id]);

  if (!page) {
    history.push("/");
    return null;
  }

  const onAddComment = (text): void => {
    dispatch(addComment({ text, pageId: id, imageBlob: fileBlob }));
  };

  const onHandleAddIcon = () => {
    dispatch(
      addPageIcon({
        pageId: page.id,
        srcIcon: "https://notion-emojis.s3-us-west-2.amazonaws.com/v0/svg-twitter/1f4e7.svg",
      }),
    );
  };

  const onHandleAddComment = () => {
    setVisibleInputComment(true);
  };

  const onResolveComment = (pageId: string, commentId: string) => {
    dispatch(resolveComment({ pageId, commentId }));
  };

  const openContextMenu = (event) => {
    // console.log(event);
    const node = <CommentsSection comments={page.comments} onResolveComment={onResolveComment} />;

    dispatch(
      openModal({
        position: [`${event.pageX}px`, `${event.pageY}px`],
        node,
      }),
    );
  };

  const countResolvedComments = page.comments.reduce((count, comment) => {
    return comment.resolved ? count + 1 : count;
  }, 0);

  document.addEventListener("click", (e) => {
    console.log(e);
  });

  return (
    <>
      <StyledPage>
        <StyledTopMenu>
          <Box sx={{ width: "50%" }}>Untitled</Box>
          <Box sx={{ width: "50%" }}>Share</Box>
        </StyledTopMenu>
        <Box sx={{ padding: "0 96px" }}>
          <StyledBoxIcons>
            {page.srcIcon && <StyledPageIcon src={page.srcIcon} />}
            <StyledControlsBlock>
              <div onClick={onHandleAddIcon}>
                <IconControl className="icon-control" text="Add icon">
                  <EmojiEmotionsIcon />
                </IconControl>
              </div>
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
          <CommentsSection comments={page.comments} onResolveComment={onResolveComment} />
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
          {countResolvedComments !== 0 && (
            <StyledCountResolvedComments onClick={openContextMenu}>
              <CheckIcon className="check-count-icon" />
              <div>{countResolvedComments} resolved comment</div>
            </StyledCountResolvedComments>
          )}
          <TitlePage pageTitle={page.title} />
        </Box>
      </StyledPage>
    </>
  );
};
