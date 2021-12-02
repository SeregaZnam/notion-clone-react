import { SectionType } from "./SectionType.enum";

export interface CalloutModel {
  id: string;
  pageId: string;
  imageClass: string;
  text: string;
  order: number;
  type: SectionType.Callout;
}
