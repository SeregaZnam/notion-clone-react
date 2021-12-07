import { PageModel } from "../types/Page.model";
import { CommentModel } from "../types/Comment.model";
import { CalloutModel } from "../types/Callout.model";
import { TextBlockModel } from "../types/TextBlock.model";
import { TodoModel } from "../types/Todo.model";

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

  export namespace Callouts {
    export function getCallouts(pageId: string): Promise<Response> {
      const namePropertyPageId: keyof Pick<CommentModel, "pageId"> = "pageId";

      return fetch(`${baseUrl}/callouts?${namePropertyPageId}=${pageId}`, {
        method: "GET",
      });
    }

    export function addPageCallouts(callout: CalloutModel): Promise<Response> {
      const newPageCallout = JSON.stringify(callout);

      return fetch(`${baseUrl}/callouts`, {
        headers,
        method: "POST",
        body: newPageCallout,
      });
    }

    export function removeCallouts(calloutId: string): Promise<Response> {
      return fetch(`${baseUrl}/callouts/${calloutId}`, {
        method: "DELETE",
      });
    }

    export function changePageCallouts(callout: CalloutModel): Promise<Response> {
      const updatedCallout = JSON.stringify(callout);

      return fetch(`${baseUrl}/callouts/${callout.id}`, {
        headers,
        method: "PUT",
        body: updatedCallout,
      });
    }
  }

  export namespace TextBlocks {
    export function getTextBlocks(pageId: string): Promise<Response> {
      const namePropertyPageId: keyof Pick<CommentModel, "pageId"> = "pageId";

      return fetch(`${baseUrl}/textBlocks?${namePropertyPageId}=${pageId}`, {
        method: "GET",
      });
    }

    export function addTextBlock(textBlock: TextBlockModel): Promise<Response> {
      const newTextBlock = JSON.stringify(textBlock);

      return fetch(`${baseUrl}/textBlocks`, {
        headers,
        method: "POST",
        body: newTextBlock,
      });
    }

    export function changeTextBlock(textBlock: TextBlockModel): Promise<Response> {
      const updatedTextBlock = JSON.stringify(textBlock);

      return fetch(`${baseUrl}/textBlocks/${textBlock.id}`, {
        headers,
        method: "PUT",
        body: updatedTextBlock,
      });
    }

    export function removeTextBlock(textBlockId: string): Promise<Response> {
      return fetch(`${baseUrl}/textBlocks/${textBlockId}`, {
        method: "DELETE",
      });
    }
  }

  export namespace Todos {
    export function getTodos(pageId: string): Promise<Response> {
      const namePropertyPageId: keyof Pick<TodoModel, "pageId"> = "pageId";

      return fetch(`${baseUrl}/todos?${namePropertyPageId}=${pageId}`, {
        method: "GET",
      });
    }

    export function addTodo(newTodo: TodoModel): Promise<Response> {
      const newPageTodo = JSON.stringify(newTodo);

      return fetch(`${baseUrl}/todos`, {
        headers,
        method: "POST",
        body: newPageTodo,
      });
    }
  }
}
