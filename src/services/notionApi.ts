import { PageModel } from "../types/Page.model";
import { CommentModel } from "../types/Comment.model";

export namespace NotionApi {
  const baseUrl = "http://localhost:4200";
  const headers = {
    "Content-type": "application/json; charset=UTF-8",
  };

  export namespace Pages {
    export function getPages(): Promise<Response> {
      return fetch(`${baseUrl}/pages`, {
        method: "GET",
      });
    }

    export function addPage(pageData: Omit<PageModel, "comments">): Promise<Response> {
      const newPage = JSON.stringify(pageData);

      return fetch(`${baseUrl}/pages`, {
        headers,
        method: "POST",
        body: newPage,
      });
    }

    export function changePage(pageData: PageModel): Promise<Response> {
      const changedPage = JSON.stringify(pageData);

      return fetch(`${baseUrl}/pages/${pageData.id}`, {
        headers,
        method: "PUT",
        body: changedPage,
      });
    }
  }

  export namespace Comments {
    export function getPageComments(pageId: string) {
      const namePropertyPageId: keyof Pick<CommentModel, "pageId"> = "pageId";

      return fetch(`${baseUrl}/comments?${namePropertyPageId}=${pageId}`, {
        method: "GET",
      });
    }

    export function addPageComment(commentData: CommentModel): Promise<Response> {
      const newPageComment = JSON.stringify(commentData);

      return fetch(`${baseUrl}/comments`, {
        headers,
        method: "POST",
        body: newPageComment,
      });
    }

    export function removePageComment(commentId: string): Promise<Response> {
      return fetch(`${baseUrl}/comments/${commentId}`, {
        method: "DELETE",
      });
    }

    export function changePageComment(comment: CommentModel): Promise<Response> {
      const updatedComment = JSON.stringify(comment);

      return fetch(`${baseUrl}/comments/${comment.id}`, {
        headers,
        method: "PUT",
        body: updatedComment,
      });
    }
  }
}
