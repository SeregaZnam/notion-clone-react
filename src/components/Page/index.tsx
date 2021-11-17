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
import { resolveComment } from "../../store/pagesSlice";
import { CommentsSection } from "../CommentsSection";
import { TextSection } from "../../shared/components/TextSection";
import { fetchChangePage } from "../../store/pageSliceThunks";
import { CountResolvedComments } from "../CountResolvedComments";
import { fetchAddPageComment, fetchPageComments } from "../../store/pagesCommentsThunks";

export const Page = () => {
  const { id } = useParams<{ id: string }>();

  const [fileBlob, setFileBlob] = useState(null);
  const [visibleInputComment, setVisibleInputComment] = useState(false);
  const dispatch = useAppDispatch();
  const page = useAppSelector((state) => state.pages.pages.find((page) => page.id === id));

  useEffect(() => {
    dispatch(fetchPageComments({ id }));
  }, [id]);

  if (!page) {
    return null;
  }

  const onAddComment = (text): void => {
    dispatch(fetchAddPageComment({ text, pageId: id, imageBlob: fileBlob }));
  };

  const onHandleAddIcon = () => {
    dispatch(
      fetchChangePage({
        ...page,
        srcIcon: "https://notion-emojis.s3-us-west-2.amazonaws.com/v0/svg-twitter/1f4e7.svg",
      }),
    );
  };

  const onResolveComment = (pageId: string, commentId: string) => {
    dispatch(resolveComment({ pageId, commentId }));
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
          <TextSection />
        </Box>
      </StyledPage>
    </>
  );
};
