import ImageIcon from "@mui/icons-material/Image";
import MessageIcon from "@mui/icons-material/Message";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import {
  StyledBoxIcons,
  StyledControlsBlock,
  StyledHorizontalLine,
  StyledPage,
  StyledPageIcon,
} from "./Styles";
import { IconControl } from "../IconControl";
import { TitlePage } from "../TitlePage";
import { useParams } from "react-router";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import React, { useCallback, useEffect, useState } from "react";
import { InputPageComment } from "../InputPageComment";
import { CommentsSection } from "../CommentsSection";
import { CalloutSection } from "../../shared/components/CalloutSection";
import { fetchChangePage } from "../../store/page/pageSliceThunks";
import { CountResolvedComments } from "../CountResolvedComments";
import {
  fetchAddComment,
  fetchChangeComment,
  fetchComments,
} from "../../store/comment/commentSliceThunks";
import { usePrev } from "./usePrev";
import { TopPagePanelOptions } from "../TopPagePanelOptions";
import { CoverPage } from "../CoverPage";
import { fetchCallouts } from "../../store/callout/calloutSliceThunks";
import { fetchAddTextBlock, fetchTextBlocks } from "../../store/text-block/textBlockThunks";
import { TextSection } from "../../shared/components/TextSection";
import { EmptyPageContent } from "../EmptyPageContent";
import { getRandomInt } from "../../helpers/getRandomInt";

export const Page = () => {
  const { id } = useParams<{ id: string }>();

  const [fileBlob, setFileBlob] = useState(null);
  const [visibleInputComment, setVisibleInputComment] = useState(false);
  const dispatch = useAppDispatch();
  const page = useAppSelector((state) => state.pages.pages.find((page) => page.id === id));
  const textSections = useAppSelector((state) => state.textBlocks.textBlocks);

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

  const onHandleAddCover = () => {
    dispatch(
      fetchChangePage({
        id: page.id,
        coverSrc:
          "https://www.notion.so/image/https%3A%2F%2Fwww.notion.so%2Fimages%2Fpage-cover%2Frijksmuseum_claesz_1628.jpg?table=block&id=ae63f873-5582-4af8-962e-225f1d8b9a40&spaceId=200e494a-4564-4f4d-a9b4-07c8d20be800&width=1910&userId=d27664a5-59f8-48d0-8e82-38007839f244&cache=v2",
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
    dispatch(fetchTextBlocks({ id }));
    dispatch(fetchCallouts({ id }));
  }, [id]);

  if (!page) {
    return null;
  }

  return (
    <>
      <StyledPage>
        <TopPagePanelOptions title={page.title} iconSrc={page.iconSrc} iconClass={page.iconClass} />
        <CoverPage imageSrc={page.coverSrc} />
        <div className={page.coverSrc ? "content-with-cover" : ""}>
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
              <IconControl className="icon-control" text="Add icon" onHandleClick={onHandleAddIcon}>
                <EmojiEmotionsIcon />
              </IconControl>
              <IconControl
                className="icon-control"
                text="Add cover"
                onHandleClick={onHandleAddCover}
              >
                <ImageIcon />
              </IconControl>
              <IconControl
                className="icon-control"
                text="Add comment"
                onHandleClick={() => setVisibleInputComment(true)}
              >
                <MessageIcon />
              </IconControl>
            </StyledControlsBlock>
          </StyledBoxIcons>
          <TitlePage pageId={page.id} title={page.title} />
          <div className="content-centring">
            <CommentsSection
              pageId={page.id}
              optionText="Resolve"
              onOptionClick={onResolveComment}
            />
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

            <CalloutSection />
            {textSections.map((i) => (
              <TextSection
                pageId={page.id}
                text={i.text}
                order={i.order}
                textSectionId={i.id}
                key={i.id}
              />
            ))}
          </div>

          {textSections.length === 0 && (
            <div className="content-centring">
              <EmptyPageContent pageId={page.id} />
            </div>
          )}
        </div>
      </StyledPage>
    </>
  );
};
