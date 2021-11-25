import React, { FC } from "react";
import { StyledEmptyPageContent, StyledPageDatabase } from "./Styles";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import InsertDriveFileOutlinedIcon from "@mui/icons-material/InsertDriveFileOutlined";
import DownloadIcon from "@mui/icons-material/Download";
import TableRowsOutlinedIcon from "@mui/icons-material/TableRowsOutlined";
import AssessmentOutlinedIcon from "@mui/icons-material/AssessmentOutlined";
import ListAltIcon from "@mui/icons-material/ListAlt";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import CollectionsOutlinedIcon from "@mui/icons-material/CollectionsOutlined";
import FeedOutlinedIcon from "@mui/icons-material/FeedOutlined";
import { fetchAddTextBlock } from "../../store/text-block/textBlockThunks";
import { useAppDispatch } from "../../store/hooks";
import { fetchChangePage } from "../../store/page/pageSliceThunks";
import { getRandomInt } from "../../helpers/getRandomInt";

export const EmptyPageContent: FC<{ pageId: string }> = ({ pageId }) => {
  const dispatch = useAppDispatch();

  const addTextContent = () => {
    dispatch(fetchAddTextBlock({ pageId, text: "", order: 0 }));
  };

  const onHandleAddIcon = () => {
    dispatch(
      fetchChangePage({
        id: pageId,
        iconClass: `icon-${getRandomInt(400)}`,
      }),
    );
  };

  return (
    <StyledEmptyPageContent>
      <div className="page-text" onClick={addTextContent}>
        Press Enter to continue with an empty page, or pick a template (↑↓ to select)
      </div>
      <ul>
        <li className="page-list-item" onClick={onHandleAddIcon}>
          <span>
            <DescriptionOutlinedIcon />
          </span>
          <span>Empty with icon</span>
        </li>
        <li className="page-list-item" onClick={addTextContent}>
          <span>
            <InsertDriveFileOutlinedIcon />
          </span>
          <span>Empty</span>
        </li>
        <li className="page-list-item">
          <span>
            <svg viewBox="0 0 20 20" className="templatesColor">
              <g>
                <path
                  d="M6.39733 5.67853C5.89764 5.50234 5.36002 5.40649 4.8 5.40649C2.14904 5.40649 0 7.55432 0 10.2038C0 12.8533 2.14904 15.0011 4.8 15.0011C6.52165 15.0011 8.0316 14.0952 8.87867 12.7343L5.26487 12.0975L6.39733 5.67853Z"
                  fill="#3C9ED7"
                />
                <path
                  d="M17.3126 3.66609L7.85843 2L6.19141 11.4489L10.6545 12.2354L14.3998 5.81854L16.3449 9.15116L17.3126 3.66609Z"
                  fill="#E7595E"
                />
                <path d="M8.80078 17L14.4008 7.4054L20.0008 17H8.80078Z" fill="#F5BC4E"></path>
              </g>
            </svg>
          </span>
          <span>Templates</span>
        </li>
        <li className="page-list-item">
          <span>
            <DownloadIcon />
          </span>
          <span>Import</span>
        </li>
      </ul>

      <StyledPageDatabase>
        <h3 className="page-database-title">Database</h3>
        <ul>
          <li className="page-list-item">
            <span>
              <TableRowsOutlinedIcon />
            </span>
            <span>Table</span>
          </li>
          <li className="page-list-item">
            <span>
              <AssessmentOutlinedIcon />
            </span>
            <span>Board</span>
          </li>
          <li className="page-list-item">
            <span>
              <ListAltIcon />
            </span>
            <span>List</span>
          </li>
          <li className="page-list-item">
            <span>
              <EventAvailableIcon />
            </span>
            <span>Calendar</span>
          </li>
          <li className="page-list-item">
            <span>
              <CollectionsOutlinedIcon />
            </span>
            <span>Gallery</span>
          </li>
          <li className="page-list-item">
            <span>
              <FeedOutlinedIcon />
            </span>
            <span>Timeline</span>
          </li>
        </ul>
      </StyledPageDatabase>
    </StyledEmptyPageContent>
  );
};
