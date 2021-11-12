import { PostModel } from "../types/Post.model";

export namespace Api {
  const baseUrl = "http://localhost:4200";
  const apiUrl = "http://localhost:3001";
  const headers = {
    "Content-type": "application/json; charset=UTF-8",
  };

  export namespace Posts {
    export function getPosts(): Promise<Response> {
      return fetch(`${baseUrl}/posts`, {
        method: "GET",
      });
    }

    export function addPost(
      postData: Pick<PostModel, "text" | "author">
    ): Promise<Response> {
      const newPost = JSON.stringify(postData);

      return fetch(`${baseUrl}/posts`, {
        headers,
        method: "POST",
        body: newPost,
      });
    }

    export function changePost(postData: PostModel): Promise<Response> {
      const changedPost = JSON.stringify(postData);

      return fetch(`${baseUrl}/posts/${postData.id}`, {
        headers,
        method: "PUT",
        body: changedPost,
      });
    }

    export function removePost(postId: string): Promise<Response> {
      return fetch(`${baseUrl}/posts/${postId}`, {
        method: "DELETE",
      });
    }

    export function addAudio(audioFile: File): Promise<Response> {
      const formData = new FormData();

      formData.append("audioFile", audioFile);

      return fetch(`${apiUrl}/upload`, {
        method: "POST",
        body: formData,
        mode: "no-cors",
      });
    }
  }
}
