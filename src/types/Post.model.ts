export interface PostModel {
  id: string;
  text: string;
  author: string;
  likes: number;
  dislikes: number;
  date: string;
  imageBlob: Blob | null;
  srcAudioFile?: string;
}
