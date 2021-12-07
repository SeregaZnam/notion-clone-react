import { TextBlockModel } from "./TextBlock.model";
import { CalloutModel } from "./Callout.model";
import { TodoModel } from "./Todo.model";

export type SectionModel = TextBlockModel | CalloutModel | TodoModel;
