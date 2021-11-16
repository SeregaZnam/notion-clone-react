export interface CommentModel {
  id: string;
  pageId: string;
  text: string;
  date: number;
  resolved: boolean;
  imageBlob?: Blob | null;
}
