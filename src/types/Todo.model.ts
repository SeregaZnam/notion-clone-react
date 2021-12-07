import { SectionType } from "./SectionType.enum";

export interface TodoModel {
  id: string;
  pageId: string;
  text: string;
  check: boolean;
  order: number;
  type: SectionType.Todo;
}
