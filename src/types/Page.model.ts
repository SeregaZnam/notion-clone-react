import { CommentModel } from "./Comment.model";

export interface PageModel {
  id: string;
  title: string;
  srcIcon: string;
  comments: CommentModel[];
}
