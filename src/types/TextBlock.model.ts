import { SectionType } from "./SectionType.enum";

export interface TextBlockModel {
  id: string;
  pageId: string;
  text: string;
  order: number;
  type: SectionType.TextBlock;
}
